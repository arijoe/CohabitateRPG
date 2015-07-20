class Item < ActiveRecord::Base
  validates :label, :leader_id, :list_id, presence: true
  validates :label, uniqueness: {scope: :quest}

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  belongs_to :list,
    class_name: "List",
    foreign_key: :list_id,
    primary_key: :id

  belongs_to :completer,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
end
