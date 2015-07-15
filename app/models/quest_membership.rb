class QuestMembership < ActiveRecord::Base
  belongs_to :user
  belongs_to :quest
end
