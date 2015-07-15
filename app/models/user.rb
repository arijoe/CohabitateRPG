class User < ActiveRecord::Base
  validates :email,  :password_digest, :session_token,
      presence: true
  validates :email, uniqueness: true
  validates :password, {length: {minimum: 8, allow_nil: true}}

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :roomies,
    -> { where(is_leader: true)},
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  has_one :quest,
    class_name: "Quest",
    foreign_key: :user_id,
    primary_key: :id

  has_one :led_quest,
    class_name: "Quest",
    foreign_key: :leader_id,
    primary_key: :id

  has_one :quest_membership,
    class_name: "QuestMembership",
    foreign_key: :user_id,
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
end
