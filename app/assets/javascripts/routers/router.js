Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.model = options.quest;
    this.collection = new Cohabitate.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    "": "questShow",
    "users": "userIndex"
    "quest": "questShow",
    "users/new": "userNew",
    "quests/new": "questCreate",
    "quests/edit": "questEdit",
    "users/:id": "userShow",
    "session/mew": "signIn"
  },

  userIndex: function(){
    var callback = this.index.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var indexView = new Cohabitate.Views.UsersIndex({
      collection: this.collection
    });
    this._swapView(indexView);
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
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new Cohabitate.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
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
