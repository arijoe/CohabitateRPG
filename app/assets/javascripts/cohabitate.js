window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(questID) {
    Cohabitate.Collections.quests.fetch();

    new Cohabitate.Routers.Router({
      $gameEl: $("#game"),
      $gameBar: $("#game-bar"),
      quest: Cohabitate.Collections.quests.getOrFetch(questID)
    });

    Backbone.history.start();
  }
};
