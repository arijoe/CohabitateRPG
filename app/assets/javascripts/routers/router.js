Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.model = options.quest
  },

  routes: {
    "quest": "show",
    "quests/new": "create",
    "quests/edit": "edit"
  },

  show: function () {
    debugger
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
    this.$rootEl.html(view.render().$el);
  }
});
