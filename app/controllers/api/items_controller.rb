class Api::ItemsController < ApplicationController
  before_action :require_leader, only: [:create, :destroy]

  def create
    @item = current_quest.items.new(item_params)

    if @item.save
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update_attributes(item_params)
      render json: @item
    else
      render json: @item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @item = current_quest.items.find(params[:id])
    @item.destroy
    render json: {}
  end

  private
  def item_params
    params.require(:item).permit(
      :label, :description, :duedate,
      :points, :leader_id, :list_id, :completer_id,
      :created_at, :updated_at
    )
  end
end
