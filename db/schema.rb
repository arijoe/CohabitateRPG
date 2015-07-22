# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150722214750) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: :cascade do |t|
    t.string   "label",                     null: false
    t.text     "description",  default: ""
    t.integer  "duedate"
    t.integer  "points",       default: 10
    t.integer  "leader_id",                 null: false
    t.integer  "list_id",                   null: false
    t.integer  "completer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "completed"
  end

  add_index "items", ["completer_id"], name: "index_items_on_completer_id", using: :btree
  add_index "items", ["leader_id"], name: "index_items_on_leader_id", using: :btree
  add_index "items", ["list_id"], name: "index_items_on_list_id", using: :btree

  create_table "lists", force: :cascade do |t|
    t.string   "type",       null: false
    t.integer  "quest_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "lists", ["quest_id"], name: "index_lists_on_quest_id", using: :btree

  create_table "quest_memberships", id: false, force: :cascade do |t|
    t.integer "user_id",  null: false
    t.integer "quest_id", null: false
  end

  add_index "quest_memberships", ["quest_id"], name: "index_quest_memberships_on_quest_id", using: :btree
  add_index "quest_memberships", ["user_id"], name: "index_quest_memberships_on_user_id", using: :btree

  create_table "quests", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "leader_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "quests", ["leader_id"], name: "index_quests_on_leader_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                             null: false
    t.boolean  "is_leader",          default: true, null: false
    t.string   "password_digest",                   null: false
    t.string   "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "leader_id"
    t.string   "username"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

end
