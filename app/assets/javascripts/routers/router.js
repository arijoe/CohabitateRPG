Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.collection = options.quests
  },

  routes: {
    "quests/id": "show"
  },

  show: function (id) {

  }
});
