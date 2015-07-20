json.extract! @list, :type

json.items @list.items do |item|
  json.extract! item, :id, :label, :description, :duedate,
    :points, :completer_id, :created_at, :updated_at
end