class QuestMembership < ActiveRecord::Base
  belongs_to :members,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :quests,
    class_name: "Quest",
    foreign_key: :quest_id,
    primary_key: :id
end
