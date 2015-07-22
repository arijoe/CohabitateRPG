class Api::QuestsController < ApplicationController
  before_action :require_logged_in

  def create
    @quest = current_user.led_quest.new(quest_params)

    if @quest.save
      render json: @quest
    else
      render json: @quest.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    if current_quest
      @quest = current_quest
      render :show
    else
      render json: ""
    end
  end

  def edit
    @quest = Quest.find(params[:id])

    if @quest.update_attributes(quest_params)
      render json: @quest
    else
      render json: @quest.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @quest = current_quest
    @quest.destroy
    render json: {}
  end

  private
  def quest_params
    params.require(:quest).permit(:title, member_ids: [])
  end
end
