json.partial! "api/users/user", user: @user

json.extract! @user.quest, :id, :title, :leader_id, :created_at, :updated_at, :members, :lists
