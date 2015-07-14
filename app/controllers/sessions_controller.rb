class SessionsController < ApplicationController
  before_action :require_logged_out, only: [:new, :create]
  before_action :require_logged_in, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])

    if @user
      login!(@user)
      #remember to change this later
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ["Invalid login credentials."]
      render :new
    end
  end

  def destroy
    logout!
    redirect_to root_url
  end
end
