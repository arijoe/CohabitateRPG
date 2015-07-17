class Api::SessionsController < ApplicationController
  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def create
    user = User.find_by_credentials(
                  params[:user][:email],
                  params[:user][:password])

    if user.nil?
      head :unprocessable_entity
    else
      login!(user)
      render :show
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
