class Quest < ActiveRecord::Base
  validates :title, :leader_id, presence: true

  after_create :add_lists

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
    List.make!(id)
  end
end
