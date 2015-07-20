json.partial! "api/users/user", user: @user

if @user.quest
  json.quest do
    json.extract! @user.quest, :id, :title, :leader_id, :username, :created_at, :updated_at
  end
end
