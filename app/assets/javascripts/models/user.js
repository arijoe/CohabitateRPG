Cohabitate.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  email: function(){
    return this.escape("email");
  },

  toJSON: function(){
    var json = { user: _.clone(this.attributes) };
    return json;
  }
});

Cohabitate.Models.CurrentUser = Cohabitate.Models.User.extend({

  url: "/api/session",

  initialize: function(options){
    this.listenTo(this, "change", this.fireSessionEvent);
  },

  isSignedIn: function() {
    return !this.isNew();
  },

  parse: function (response) {
    if (response.quest) {
      this.quest().set(response.quest);
      delete response.quest;
    };

    return response;
  },

  quest: function () {
    if (!this._quest) {
      this._quest = new Cohabitate.Models.Quest();
    }
    return this._quest;
  },

  signIn: function(options){
    var model = this;
    var credentials = {
      "user[email]": options.email,
      "user[password]": options.password
    };

    $.ajax({
      url: this.url,
      type: "POST",
      data: credentials,
      dataType: "json",
      success: function(data){
        data = model.parse(data);
        model.set(data);
        options.success && options.success();
      },
      error: function(){
        options.error && options.error();
      }
    });
  },

  signOut: function(options){
    var model = this;

    $.ajax({
      url: this.url,
      type: "DELETE",
      dataType: "json",
      success: function(data){
        model.clear();
        options.success && options.success();
      }
    });
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  }

})
