class CreateMembershipsJoinTable < ActiveRecord::Migration
  def up
    create_join_table(
    :users, :quests, {table_name: :quest_memberships, force: true})  do |t|
      t.index :user_id
      t.index :quest_id
    end
  end

  def down
    drop_table :quest_memberships
  end
end
