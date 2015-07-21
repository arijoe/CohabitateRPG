# CohabitateRPG
[Heroku link][heroku]

[heroku]: http://cohabitate-rpg.herokuapp.com

## Minimum Viable Product
CohabitateRPG is a habitRPG clone for roommates, built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Change profile information
- [ ] View quest and all lists
- [ ] Complete a task
- [ ] Gain points for completed tasks
- [ ] View quest leaderboard

As quest leaders, users can:
- [ ] Create quests (top-level for lists)
- [ ] Invite roomies on quests
- [ ] Create daily, weekly, and monthly task lists
- [ ] Create To-Do Lists

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Create Quest (~1 day)
I'll create user authentication to track returning users and sessions. By the
end of this phase, a user will be able to log-in/out and create a quest. I will
also push the app to Heroku and make sure nothing is broken.

[Details][phase-one]

### Phase 2:  Daily Task Sub-Views, with individual item Sub-Views (~2 days)
As of this stage, a user will be able to add, view, edit, and remove a task-item
to one of the task lists. I will use API routes to manage these functions within
a single-page app. As of this stage, there will be no differentiation between
a group leader (admin) and other users, but the page should be looking more
fleshed out by now.

*note* I want to be able to subjugate daily/weekly/monthly/to-do lists under one
controller and edit the functionality of the to-do list from there, to keep the
code dryer.

[Details][phase-two]

### Phase 3: Incorporating Other Users (~3 days)
This stage will be complex. I will use Rails to set admin status to creators and
allow all other users restricted access to list items. All users will have
ability to view tasks added by quest leader, each other's profiles, and each
other's stats. Group privileges for viewing quest will also need to be set.

[Details][phase-three]

### Phase 4: Add XP Bar, Leaderboard, and Roomie Stats (~2 Days)
I will heavily re-format the views in this stage to allow for two top-bars: one
user profile and session info, and another for quest-specific data display. I
will use a Backbone API to embed a view for a user's profile info, their XP Bar,
and current leader stats.

[Details][phase-four]

### Phase 5: Styling, Notifications, Admin Privileges, and More (~2 Days)
Primarily, I will want to add a notifications menu for users. As a default, I
will set up a mailer to send only a weekly digest. Users will be able to add
notifications for upcoming tasks as a mailer. Secondarily, I want to sync tasks
with Google Calendar in a similar voluntary fashion, and also create a separate
page view for an admin to inspect recent task completions.

[Details][phase-five]


### Bonus Features (TBD)
- [ ] Create a 'notifications' setting to edit alerts for upcoming tasks
- [ ] Extra style to 'Create Quest' page
- [ ] Group message-board
- [ ] Admin can reject task completion
- [ ] Google Calendar integration as notification setting
May not be a good final idea:
- [ ] 'Habits' section, not a 'list' proper
- [ ] Any roomie can assign good or bad habit completion to any other
- [ ] Admin can reject habit completion

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
