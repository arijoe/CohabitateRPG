class Api::ListsController < ApplicationController
  before_action :require_leader

  def update
    @list = current_quest.lists.find(params[:id])

    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @list = current_quest.lists.find(params[:id])
    @list.destroy
    render json: {}
  end

  private
  def lists_params
    params.require(:list).permit(:title, :quest_id)
  end
end