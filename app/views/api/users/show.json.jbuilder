json.partial! "api/users/user", user: @user

if @user.quest
  json.quest do
    json.extract! @user.quest, :id, :title, :leader_id, :created_at, :updated_at
  end
end

if @user.roomies
  json.roomies @user.roomies do |roomie|
    json.extract! roomie, :id, :email, :is_leader, :username
  end
end
