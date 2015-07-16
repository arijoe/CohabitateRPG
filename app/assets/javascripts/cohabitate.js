window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    Cohabitate.Collections.quests.fetch();

    new Cohabitate.Routers.Router({
      $gameEl: $("#game"),
      $gameBar: $("#game-bar"),
      quest: Cohabitate.Collections.quests.getOrFetch(options.questID)
    });

    Backbone.history.start();
  }
};
