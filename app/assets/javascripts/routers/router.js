Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$gameEl = options.$gameEl,
    this.model = options.quest
  },

  routes: {
    "": "show",
    "quest": "show",
    "quests/new": "create",
    "quests/edit": "edit"
  },

  show: function () {
    var showView = new Cohabitate.Views.QuestShow({ model: this.model });
    this._swapView(showView);
  },

  create: function () {

  },

  edit: function () {

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$gameEl.html(view.render().$el);
  }
});
