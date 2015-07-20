class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :current_quest, :logged_in?, :logout!, :login!

  private
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def current_quest
    return nil unless session[:session_token]
    @current_quest ||= current_user.quest
  end

  def login!(user)
    session[:session_token] = user.reset_session_token
  end

  def logout!
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def require_logged_in
    redirect_to root_url if !logged_in?
  end

  def require_leader
    render json: ["Only your quest leader can do that."], status: :unauthorized
  end
end
