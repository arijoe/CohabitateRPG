window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    Cohabitate.Collections.quests.fetch();
    if (options.questID) {
      this.currentQuest = Cohabitate.Collections.quests.getOrFetch(options.questID);
    };
    
    new Cohabitate.Routers.Router({
      $rootEl: $("#app-container"),
      quest: this.currentQuest
      // current_user: Cohabitate.Collections.currentUsers.getOrFetch(options.current_userID)
    });

    Backbone.history.start();
  }
};
