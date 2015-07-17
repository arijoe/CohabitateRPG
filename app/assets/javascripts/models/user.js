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

  // parse: function (response) {
  //   if (response.members) {
  //     this.members().set(response.members);
  //     delete response.members;
  //   };
  //
  //   if (response.lists) {
  //     this.lists().set(response.lists);
  //     delete response.lists;
  //   }
  //
  //   return response;
  // },
  //
  // members: function () {
  //   if (!this._members) {
  //     this._members = new Cohabitate.Collections.Members([], { quest: this });
  //   }
  //   return this._members;
  // },

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
        debugger
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
