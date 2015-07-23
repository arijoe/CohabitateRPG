json.(user, :id, :is_leader, :email, :username)

json.image_url asset_path(user.image.url)
