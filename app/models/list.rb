class List < ActiveRecord::Base
  validates :type, :quest_id, presence: true

  belongs_to :quest
  has_one :leader, through: :quest, source: :leader

  has_many :items,
    class_name: "Item",
    foreign_key: :list_id,
    primary_key: :id,
    dependent: :destroy

  def self.make!(quest_id)
    classes = [Daily, Weekly, Monthly, Todo]

    classes.each do |sub|
      sub.create!(quest_id: quest_id)
    end
  end
end

class Daily < List
end

class Weekly < List
end

class Monthly < List
end

class Todo < List
end
