class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string      "email",           null: false
      t.boolean     "is_leader",       null: false, default: true
      t.integer     "leader_id",       null: false
      t.string      "password_digest", null: false
      t.string      "session_token"

      t.timestamps
    end

      add_index :users, :leader_id
  end
end
