window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Cohabitate.Routers.Router({
      $rootEl: ("#main"),
      quests: new Cohabitate.Collections.quests
    });
    Backbone.history.start();
  }
};
