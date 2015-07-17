window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    if (options.questID !== 0) {
      Cohabitate.Collections.quests.fetch();
      this.currentQuest = Cohabitate.Collections.quests.getOrFetch(options.questID);
    };

    this.currentUser = new Cohabitate.Models.CurrentUser();
    this.currentUser.fetch();

    this.header = new Cohabitate.Views.Header({ el: "#top-bar" });
    this.router = new Cohabitate.Routers.Router({
      $rootEl: $("#app-container")
    });

    Backbone.history.start();
  }
};
