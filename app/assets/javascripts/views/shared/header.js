Cohabitate.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(Cohabitate.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "click .about": "swapInfo"
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
        Cohabitate.Routers.router.questShow();
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  swapInfo: function () {
    if ( $('.about').html() === "About" ) {
      $('.about').html('Contact');
      $('.info').html('Cohabitate RPG was developed for demonstrational purposes only in 2015. If you are interested in more details about the project, I am happy to hear from you at ari dot weitzman at gmail dot com.');
    } else {
      $('.about').html('About');
      $('.info').html("Cohabitate RPG is a live role-playing game for roommates. Inspire yourself and your friends to keep your living space tidy by making a game of it! Pick one person to lead your quest to clean living, and we'll help you through the rest.")
    }
  }
});
