class User < ActiveRecord::Base
  validates: :email, :is_leader, :leader_id, :password_digest, :session_token,
      presence: true
  validates: :email, uniqueness: true
  validates: :password, {length: {minimum: 8, allow_nil: true}}

  attr_reader :password

  after_initialize :ensure_session_token

  # associations here

  # model functions here

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
