Cohabitate.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(BackboneAuthDemo.currentUser, "signIn signOut", this.render);
    this.render();
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

  signOut: function(event){
    event.preventDefault();
    Cohabitate.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  }

});
