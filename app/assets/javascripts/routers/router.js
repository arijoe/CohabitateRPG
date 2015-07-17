Cohabitate.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$gameEl = options.$gameEl;
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

  userIndex: function(){
    var callback = this.index.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var indexView = new Cohabitate.Views.UsersIndex({
      collection: this.collection
    });
    this._swapView(indexView, this.$rootEl);
  },

  userNew: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new Cohabitate.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView, this.$rootEl);
  },

  userShow: function(id){
    var callback = this.userShow.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new Cohabitate.Views.UsersShow({
      model: model
    });
    this._swapView(showView, this.$rootEl);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Cohabitate.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView, this.$rootEl);
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
    if (!Cohabitate.currentQuest) {
      if (this.currentUser) {
        var questID  = this.currentUser.quest.get(id);
        this.currentQuest = Cohabitate.Collections.quests.getOrFetch(options.questID);
      } else {
        return;
      }
    };

    var showView = new Cohabitate.Views.QuestShow({ model: Cohabitate.currentQuest });
    this._swapView(showView, this.$gameEl);
  },

  questCreate: function () {

  },

  questEdit: function () {

  },

  _swapView: function (view, el) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    el.html(view.render().$el);
  }
});
