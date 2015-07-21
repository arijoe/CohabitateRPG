Cohabitate.Views.ListShow = Backbone.View.extend({
  template: JST['list/show'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render);
  },

  events: {
    "click": "customEvent"
  }

  render: function () {
    var content = this.template({ lists: this.collection });
    this.$el.html(content);
    return this;
  }
});
