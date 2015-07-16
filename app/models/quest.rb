class Quest < ActiveRecord::Base
  validates :title, :leader_id, presence: true

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  has_many :quest_memberships,
    class_name: "QuestMembership",
    foreign_key: :quest_id,
    primary_key: :id,
    dependent: :destroy

  has_many :lists, dependent: :destroy

  has_many :members, through: :quest_memberships, source: :user

  def add_lists
    id = self.id

    Daily.make(id)
    Weekly.make(id)
    Monthly.make(id)
    Todo.make(id)
  end
end
