# Phase 2: Daily Task Sub-Views, with individual item Sub-Views

## Rails
### Models

### Controllers
Api::QuestsController (create, destroy, update, show)
Api::ListsController (show, update, index)
Api::ItemsController (create, destroy, show, update, index)

### Views
* quests/show.json.jbuilder
* lists/index.json.jbuilder
* lists/show.json.jbiulder
* items/index.json.jbuilder
* items/show.json.jbiulder

## Backbone
### Models
* Quest (parses nested 'lists' and 'items' associations)
* List (parses nested 'items' association)

### Collections
* Lists
* Items

### Views
* QuestForm
* QuestShow (composite view, contains ListsIndex subview)
* ListsIndex (composite view, contains ListsIndexItem subviews)
* ListsIndexItem (link to ItemShow)
* ItemShow

## Gems/Libraries
