# Phase 3: Incorporating Other Users

## Rails
### Models
* Add admin privilege, protect create, update, and destroy functions.

### Controllers
* UsersController(destroy)
* StaticPages (sync with admin privilege).

### Views
* users/index.html.erb (only those in group)
* user/new/.html.erb (render different view if invited/not admin)

## Backbone
### Models

### Collections

### Views
* QuestForm (redirect if not admin)
* ItemForm
* UsersIndex
* UserForm (show/edit)
* InviteUsersForm (if admin)

## Gems/Libraries
* Mailer for inviting new user, create new landing page for accepted invite
