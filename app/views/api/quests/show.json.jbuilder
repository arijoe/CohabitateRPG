json.extract! @quest, :id, :title, :leader_id, :created_at, :updated_at

json.members @quest.members do |member|
  json.extract! member, :id, :email, :is_leader, :username
end

json.lists @quest.lists do |list|
  json.extract! list, :id, :type, :created_at, :updated_at

  json.items list.items do |item|
    json.extract! item, :id, :label, :description, :duedate,
      :points, :completer_id, :created_at, :updated_at
  end
end
