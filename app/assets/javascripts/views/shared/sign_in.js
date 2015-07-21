Cohabitate.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(Cohabitate.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit",
    "click #demo-user": "demoUser"
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Cohabitate.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  },

  demoUser: function (event) {
    event.preventDefault();
    Cohabitate.currentUser.signIn({
      email: "finn@ooo.com",
      password: "bubblegum"
    })
  }
});
