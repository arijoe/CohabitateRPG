json.(user, :id, :is_leader, :email, :username, :xp, :level)

json.image_url asset_path(user.image.url)
