Cohabitate.Views.ListShow = Backbone.View.extend({
  template: JST['list/show'],

  initialize: function () {
    this.listenTo(this.collection, "sync add change remove reset", this.render);
  },

  events: {

  },

  // lots of editing and viewing will be taking place here

  render: function () {
    var content = this.template({ items: this.collection });
    this.$el.html(content);
    return this;
  }
});
