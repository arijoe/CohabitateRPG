class User < ActiveRecord::Base
  validates: :email, :is_leader, :leader_id, :password_digest, :session_token,
      presence: true
  validates: :email, uniqueness: true
  validates: :password, {length: {minimum: 8, allow_nil: true}}

  attr_reader :password

  after_initialize: ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.password?(password) ? user : nil
  end

  def self.generate_session_token

  end

  def reset_session_token

  end

  def password=(password)

  end

  def is_password?(password)

  end
end
