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

    // this.currentUser stuff
    // this.header = new Cohabitate.Views.Header({ el: "#top-bar" });


    this.router = new Cohabitate.Routers.Router({
      $rootEl: $("#app-container"),
      quest: this.currentQuest
    });

    Backbone.history.start();
  }
};
