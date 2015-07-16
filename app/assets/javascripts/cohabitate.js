window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    Cohabitate.Collections.quests.fetch();

    new Cohabitate.Routers.Router({
      $rootEl: $("#app-container"),
      quest: Cohabitate.Collections.quests.getOrFetch(options.questID),
      current_user: options.current_user
    });

    Backbone.history.start();
  }
};
