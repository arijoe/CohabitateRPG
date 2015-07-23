json.partial! "api/users/user", user: @user

json.xp @user.xp

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

if @user.completed_tasks
  json.completed_tasks @user.completed_tasks do |task|
    json.extract! task, :label, :points
  end
end
