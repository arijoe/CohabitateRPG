Cohabitate.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(Cohabitate.currentUser, "signIn signOut", this.render);
    this.render();
    this.listenTo(Cohabitate.currentUser, "ari", this.customEvent);
  },

  events: {
    "click #sign-out-link": "signOut"
  },

  template: JST['shared/header'],

  render: function(){
    var content = this.template({ currentUser: Cohabitate.currentUser });
    this.$el.html(content);

    return this;
  },

  customEvent: function () {
    console.log("I'm..... listening.")
  },

  signOut: function(event){
    event.preventDefault();
    Cohabitate.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }

});
