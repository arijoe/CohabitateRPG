class AddColumnUserIdToQuestsTable < ActiveRecord::Migration
  def change
    add_column(:quests, :user_id, :integer, null: false)
  end
end
