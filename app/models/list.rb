class List < ActiveRecord::Base
  validates :type, :quest_id, presence: true

  belongs_to :quest
  has_one :leader, through: :quest, source: :leader

  def self.make(quest_id)
    self.class.create!(
      type: self.class.to_s,
      quest_id: quest_id
    )
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
