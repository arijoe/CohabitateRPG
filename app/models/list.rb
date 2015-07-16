class List < ActiveRecord::Base
  validates :type, :quest_id, presence: true

  belongs_to :quest
  has_one :leader, through: :quest, source: :leader
end
