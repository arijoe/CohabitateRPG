Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.collection = options.quests
  },

  routes: {
    "quests/id": "show"
  },

  show: function (id) {
    var quest = this.collection.getOrFetch(id);
    var showView = new Cohabitate.Views.QuestShow({ model: quest });
    debugger
    this._swapView(showview);
  },

  function _swapView (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
