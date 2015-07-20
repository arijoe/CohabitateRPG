class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    @user.is_leader = true
    User.assign_username(@user)

    if @user.save
      User.assign_leader_id(@user)
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :is_leader, :username, :password, :quest)
  end
end
