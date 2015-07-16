class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string    "type",     null: false
      t.integer   "quest_id", null: false

      t.timestamps
    end

    add_index :lists, :quest_id
  end
end
