window.Cohabitate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new Cohabitate.Models.CurrentUser();
    this.currentUser.fetch({
      success: function () {
        this.header = new Cohabitate.Views.Header({ el: "#top-bar" });

        new Cohabitate.Routers.Router({
          $rootEl: $("#root-el")
        });

        Backbone.history.start();
      }
    });
  }
};
