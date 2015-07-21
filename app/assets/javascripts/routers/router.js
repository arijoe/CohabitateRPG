Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new Cohabitate.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "questShow",
    "quest": "questShow",
    "users/new": "userNew",
    "quests/new": "questCreate",
    "quests/edit": "questEdit",
    "users/:id": "userShow",
    "session/new": "signIn"
  },

  questShow: function () {
    if (Cohabitate.currentUser.isSignedIn()) {
      var quest = Cohabitate.currentUser.quest();

      if (quest.isNew()) {
        Backbone.history.navigate("/quests/new", { trigger: true });
      } else {
        debugger
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

  },

  questEdit: function () {

  },

  _swapView: function (view, el) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },








  userNew: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new Cohabitate.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);
  },

  userShow: function(id){
    var callback = this.userShow.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new Cohabitate.Views.UsersShow({
      model: model
    });
    this._swapView(showView, $('.quest-info'));
    Backbone.history.navigate("");
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
