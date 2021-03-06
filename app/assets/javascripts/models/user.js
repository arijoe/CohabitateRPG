Cohabitate.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function (response) {
    if (response.quest) {
      this.quest().set(response.quest);
      delete response.quest;
    };

    if (response.roomies && response.roomies.length > 0) {
      this.roomies().set(response.roomies);
      delete response.roomies;
    };

    if (response.completedTasks && response.completedTasks.length > 0) {
      this.completedTasks().set(response.completedTasks);
      this.points();
      delete response.completedTasks;
    };

    return response;
  },

  quest: function () {
    if (!this._quest) {
      this._quest = new Cohabitate.Models.Quest();
    }

    return this._quest;
  },

  roomies: function () {
    if (!this._roomies) {
      this._roomies = new Cohabitate.Collections.Members([], {quest: this.quest});
    }

    return this._roomies;
  },

  completedTasks: function () {
    if (!this._completedTasks) {
      this._completedTasks = new Cohabitate.Collections.Items([]);
    }

    return this._completedTasks;
  },

  toJSON: function () {
    var json = { user: _.clone(this.attributes) };
    return json;
  },

  saveFormData: function (formData, options) {
    var method = "PUT";
    var model = this;

    $.ajax({
      url: "api/users/" + model.id,
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function (resp) {
        model.set(model.parse(resp));
        model.trigger('sync', model, resp, options);
        options && options.success && options.success(model, resp, options);
      },
      error: function (resp) {
        options && options.error && options.error(model, resp, options);
      }
    });
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

  save: function (attributes, options) {
    options = options || {};
    options.url = "/api/users/" + this.id;
    Backbone.Model.prototype.save.call(this, attributes, options);
  },

  fireSessionEvent: function(){
    if(this.isSignedIn()){
      this.trigger("signIn");
    } else {
      this.trigger("signOut");
    }
  }
})
