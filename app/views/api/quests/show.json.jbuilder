json.extract! @quest, :id, :title, :leader_id, :created_at, :updated_at

json.members @quest.members do |member|
  json.extract! member, :id, :email, :is_leader
end
