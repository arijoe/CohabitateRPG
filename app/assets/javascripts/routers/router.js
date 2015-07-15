Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.collection = options.quests
  },

  routes: {
    "quests/id": "show"
  },

  show: function (id) {
    
  },

  function swapView (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
