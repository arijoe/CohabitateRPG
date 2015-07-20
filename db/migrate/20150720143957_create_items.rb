class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string      "label",  null: false
      t.text        "description", default: ""
      t.integer     "duedate"
      t.integer     "points", default: "10"
      t.integer     "leader_id", null: false
      t.integer     "list_id", null: false
      t.integer     "completer_id"

      t.timestamps
    end

    add_index :items, :leader_id
    add_index :items, :list_id
    add_index :items, :completer_id
  end
end
