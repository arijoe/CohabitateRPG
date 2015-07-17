Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.model = options.quest;
    this.collection = new Cohabitate.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "questShow",
    "users": "usersIndex"
    "quest": "questShow",
    "users/new": "userNew",
    "quests/new": "questCreate",
    "quests/edit": "questEdit",
    "users/:id": "userShow",
    "session/mew": "signIn"
  },

  questShow: function () {
    var showView = new Cohabitate.Views.QuestShow({ model: this.model });
    this._swapView(showView);
  },

  questCreate: function () {

  },

  questEdit: function () {

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
