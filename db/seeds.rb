User.create!(
  email: "finn@ooo.com",
  is_leader: true,
  password: "bubblegum",
  leader_id: 1,
  username: "Finn"
)

User.create!(
  email: "jake@ooo.com",
  is_leader: false,
  password: "bubblegum",
  leader_id: 1,
  username: "Jake"
)

User.create!(
  email: "bmo@ooo.com",
  is_leader: false,
  password: "bubblegum",
  leader_id: 1,
  username: "B-Mo"
)

Quest.create!(
  title: "Treehouse",
  leader_id: 1,
  membership_id: 1
)

User.all[0..2].each do |user|
  Quest.all[0].members << user
end
