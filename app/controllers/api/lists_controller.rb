class Api::ListsController < ApplicationController
  before_action :require_leader, only: [:create, :edit, :update, :destroy]

  def create
    @list = current_user.led_quest.new(quest_params)

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
  def lists_params
    params.require(:list).permit(:title, :quest_id)
  end
end
