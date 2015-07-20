class Item < ActiveRecord::Base
  validates :label, :leader_id, :list_id, presence: true
  validate :unique_within_quest

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id,
    primary_key: :id

  belongs_to :list,
    class_name: "List",
    foreign_key: :list_id,
    primary_key: :id

  belongs_to :completer,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

    private
    def unique_within_quest
      labels = []

      if list.quest
        list.quest.items.each do |item|
          next if item = self
          labels << item.label
        end
      end

      if labels.include?(label)
        errors[:base] << "That item already exists within this quest."
      end
    end
end
