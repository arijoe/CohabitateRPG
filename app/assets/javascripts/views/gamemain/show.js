Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  initialize: function () {
    
  }

  events: {
    "click": "customEvent"
  },

  customEvent: function () {
    Cohabitate.currentUser.trigger("ari");
  },

  render: function () {
    var content = this.template({ lists: this.collection });
    this.$el.html(content);
    return this;
  }
});
