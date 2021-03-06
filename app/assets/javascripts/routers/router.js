Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new Cohabitate.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "questShow",
    "quest": "questShow",
    "profile": "profile",
    "users/new": "userNew",
    "quests/new": "questCreate",
    "quests/edit": "questEdit",
    "users/:id": "userShow",
    "session/new": "signIn",
  },

  questShow: function () {
    if (Cohabitate.currentUser.isSignedIn()) {

      var quest = Cohabitate.currentUser.quest();
      quest = Cohabitate.Collections.quests.getOrFetch(quest.id);

      if (quest.isNew()) {
        Backbone.history.navigate("/quests/new", { trigger: true });
        return;
      } else {
          var showView = new Cohabitate.Views.QuestShow({
          model: quest,
          user: Cohabitate.currentUser
        });
      }
    } else {
      var showView = new Cohabitate.Views.SignIn(
        Cohabitate.Views.SignIn.signInCallback
      );
    }

    this._swapView(showView);
  },

  questCreate: function () {
    var newUser = Cohabitate.currentUser;
    var newQuest = Cohabitate.currentUser.quest();

    var formView = new Cohabitate.Views.QuestForm({
      user: newUser,
      quest: newQuest
    });

    this._swapView(formView);
  },

  questEdit: function () {

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  userNew: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new Cohabitate.Views.UserForm({
      collection: this.collection,
      model: model
    });

    this._swapView(formView);
  },

  userShow: function (id) {
    var callback = this.userShow.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new Cohabitate.Views.UserShow({
      model: model
    });

    this.$rootEl.append(showView.render().$el);
  },

  profile: function () {
    var callback = this.profile.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var model = Cohabitate.currentUser;
    var showView = new Cohabitate.Views.UserShow({
      model: model
    });

    if (Cohabitate.currentUser.quest().isNew()) {
      this._swapView(showView);
    } else {
      this.$rootEl.append(showView.render().$el);
    };
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Cohabitate.Views.SignIn({
      callback: callback
    });

    this._swapView(signInView);
  },

  _requireSignedIn: function(callback){
    if (!Cohabitate.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (Cohabitate.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  }
});
