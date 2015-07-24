User.create!(
  email: "finn@ooo.com",
  is_leader: true,
  password: "bubblegum",
  leader_id: 1,
  username: "Finn"
)

Quest.create!(
  title: "Treehouse",
  leader_id: 1
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

User.all[0..2].each do |user|
  Quest.all[0].members << user
end

i = Quest.all.first.items.new ({
  label: "Make the bacon pancakes.",
  description: "First make some bacon and then you put it in the pancakes.",
  completed: false
})

i.leader = User.all.first
i.list = Quest.all.first.lists.first
i.completed = false
i.save!

j = Quest.all.first.items.new ({
  label: "Feed Loraine.",
  description: "Chicken's gotta eat, man.",
  completed: false
})

j.leader = User.all.first
j.list = Quest.all.first.lists.first
j.completed = false
j.save!
