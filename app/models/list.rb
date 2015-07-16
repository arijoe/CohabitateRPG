class List < ActiveRecord::Base
  validates :type, :quest_id, presence: true

  belongs_to: :quest
  belongs_to: :leader, through: :quest, source: :leader
end
