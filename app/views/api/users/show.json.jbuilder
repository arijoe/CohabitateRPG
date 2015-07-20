json.partial! "api/users/user", user: @user

json.quest do
  json.extract! current_user.quest, :id, :title, :leader_id, :username, :created_at, :updated_at
end
