User.create!(
  email: "finn@ooo.com",
  is_leader: true,
  leader_id: 1,
  password: "bubblegum"
)

# User.create!(
#   email: "jake@ooo.com",
#   is_leader: false,
#   leader_id: 1,
#   password: "bubblegum"
# )
#
# User.create!(
#   email: "bmo@ooo.com",
#   is_leader: false,
#   leader_id: 1,
#   password: "bubblegum"
# )

Quest.create!(
  title: "treehouse",
  leader_id: 1,
  user_id: 1
)

# Quest.create!(
#   title: "treehouse",
#   leader_id: 1,
#   user_id: 2
# )
