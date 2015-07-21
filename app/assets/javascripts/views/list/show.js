Cohabitate.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  tagName: "li",

  className: "list",

  initialize: function (options) {
    this.list = options.list;
    this.items = options.list.items();
    // this.listenTo(this.collection, "sync add change remove reset", this.render);
  },

  events: {

  },

  // lots of editing and viewing will be taking place here

  render: function () {
    var content = this.template({
      items: this.items,
      list: this.list
    });

    this.$el.html(content);
    return this;
  }
});
