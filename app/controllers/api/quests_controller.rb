class Api::QuestsController < ApplicationController
  def create
    @quest = current_user.led_quest.new(quest_params)

    if @quest.save
      render json: @quest
    else
      render json: @quest.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @quest = current_user.quest

    if @quest
      render :show
    else
      render json: ["None such quest, compadre."], status: 404
    end
  end

  def edit
    @quest = Quest.find(params[:id])

    if @quest.save
      render json: @quest
    else
      render json: @quest.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @quest = current_user.quest
    @quest.destroy
    render json: {}
  end

  private
  def quest_params
    params.require(:quest).permit(:title, member_ids: [])
  end
end
