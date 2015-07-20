class RemoveUserIdColumnFromQuests < ActiveRecord::Migration
  def change
    remove_column(:quests, :user_id)
  end
end
