json.partial! "api/users/user", user: current_user

if current_user.quest
  json.quest do
    json.extract! current_user.quest, :id, :title, :leader_id, :created_at, :updated_at
  end
end
