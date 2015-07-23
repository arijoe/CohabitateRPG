Cohabitate.Views.SignIn = Backbone.View.extend({

  initialize: function (options) {
    this.callback = options.callback;
    this.listenTo(Cohabitate.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit",
    "click #special": "guestLogin"
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Cohabitate.currentUser.signIn({
      email: formData.email,
      password: formData.password
    });
  },

  signInCallback: function (event) {
    if(this.callback) {
      this.callback();
    } else {
      Cohabitate.Routers.router.questShow();
    }
  },

  guestLogin: function (event) {
    event.preventDefault();

    Cohabitate.currentUser.signIn({
      email: "finn@ooo.com",
      password: "bubblegum"
    });
  }
});
