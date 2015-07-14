require 'byebug'

class UsersController < ApplicationController
  before_action :require_logged_out, only: [:new, :create, :index]
  before_action :require_logged_in, only: [:show, :edit, :update, :destroy]

  def new
  end

  def create
    @user = User.new(user_params)
    @user.is_leader = true

    if @user.save
      User.assign_leader_id(@user)
      login!(@user)
      # remember to edit later
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
  end

  def show
    @user = User.find(params[:id])
    user_url(@user)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
