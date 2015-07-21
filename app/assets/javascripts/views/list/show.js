Cohabitate.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  initialize: function (options) {
    this.list = options.list;
    // this.listenTo(this.collection, "sync add change remove reset", this.render);
  },

  events: {
    
  },

  // lots of editing and viewing will be taking place here

  render: function () {
    var content = this.template({
      items: this.collection,
      list: this.list
    });

    this.$el.html(content);
    return this;
  }
});
