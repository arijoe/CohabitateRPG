class User < ActiveRecord::Base
  validates :email,  :password_digest, :session_token,
      presence: true
  validates :email, uniqueness: true
  validates :password, {length: {minimum: 8, allow_nil: true}}
  validate :unique_within_quest

  has_attached_file :image, styles: {medium: "200x200>", thumb: "52x52" }, default_url: "default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token, :xp, :level

  has_many :followers,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  has_one :led_quest,
    class_name: "Quest",
    foreign_key: :leader_id,
    primary_key: :id

  has_one :quest_membership,
    class_name: "QuestMembership",
    foreign_key: :user_id,
    primary_key: :id

  has_one :quest, through: :quest_membership, source: :quests

  has_many :roomies, through: :quest, source: :members

  has_many :lists, through: :led_quest, source: :lists

  has_many :created_tasks,
    class_name: "Item",
    foreign_key: :leader_id,
    primary_key: :id

  has_many :completed_tasks,
    class_name: "Item",
    foreign_key: :completer_id,
    primary_key: :id

  def self.assign_leader_id(user)
    if user.is_leader
      user.leader_id = user.id
    else
      nil
      #will set to invited person's id
    end

    user.save
  end

  def self.assign_username(user)
    if user.username.nil? || user.username.empty?
      user.username = user.email
    end

    user
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid])

    unless user
      user = User.create!(
            provider: auth_hash[:provider],
            uid: auth_hash[:uid],
            username: auth_hash[:info][:name],
            email: auth_hash[:info][:email],
            password: SecureRandom::urlsafe_base64
          )
    end
  end

  def points
    points = 0
    completed_tasks.each{ |task| points += task.points }
    points
  end

  def level
    points / 50 + 1
  end

  def xp
    points % 50
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def unique_within_quest
    usernames = []

    if quest
      quest.members.each do |member|
        next if member = self
        usernames << member.username
      end
    end

    if usernames.include?(username)
      errors[:base] << "That username is already taken within this quest."
    end
  end
end
