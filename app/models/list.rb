class List < ActiveRecord::Base
  validates :type, :quest_id, presence: true

  belongs_to :quest
  has_one :leader, through: :quest, source: :leader


end

class Daily < List

end

class Weekly < List

end

class Monthly < List

end

class Todo < List

end
