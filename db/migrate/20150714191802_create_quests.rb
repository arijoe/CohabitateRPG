class CreateQuests < ActiveRecord::Migration
  def change
    create_table :quests do |t|
      t.string    :title,     null: false
      t.integer   :leader_id, null: false

      t.timestamps
    end

    add_index :quests, :leader_id
  end
end
