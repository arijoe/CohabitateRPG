# Phase 2: Daily Task Sub-Views, with Individual Item Sub-Views

## Rails
### Models

### Controllers
Api::ListsController (show, update)
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
* Item

### Collections
* Lists
* Items

### Views
* QuestForm
* QuestShow (composite view, contains subviews)
* ListShow
* QuestListItem
* ItemShow

## Util
* CompisteView

## Gems/Libraries
* serializeJSON
