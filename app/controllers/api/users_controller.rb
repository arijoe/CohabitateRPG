class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: [:new, :create, :index]
  before_action :require_logged_in, only: [:show, :edit, :update, :destroy]

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in!(@user)
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
    params.require(:user).permit(:email, :is_leader, :password)
  end
end
