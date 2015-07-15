class Quest < ActiveRecord::Base
  validates :title, :leader_id, presence: true

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  has_many :quest_memberships,
    class_name: "QuestMembership",
    foreign_key: :quest_id,
    primary_key: :id
end
