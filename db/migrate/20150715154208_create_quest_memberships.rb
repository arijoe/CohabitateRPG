class CreateQuestMemberships < ActiveRecord::Migration
  def change
    create_table :quest_memberships do |t|
      t.integer :user_id,  null: false
      t.integer :quest_id, null: false

      t.timestamps
    end

    add_index :quest_memberships, [:user_id, :quest_id]
  end
end
