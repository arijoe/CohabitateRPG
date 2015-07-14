class AddDefaultLeaderIdToUsers < ActiveRecord::Migration
  def change
    remove_column(:users, :leader_id)
    add_column(:users, :leader_id, :integer)
  end
end
