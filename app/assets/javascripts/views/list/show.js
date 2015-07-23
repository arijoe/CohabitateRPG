Cohabitate.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  tagName: "li",

  className: "list",

  initialize: function (options) {
    this.list = options.list;
    this.items = options.list.items();
    // this.listenTo(this.collection, "sync add change remove reset", this.render);
  },

  renderItems: function () {
    var view = new Cohabitate.Views.ItemsShow({ collection: this.items });
    this.addSubview(".items-list", view);
  },

  render: function () {
    var content = this.template({
      items: this.items,
      list: this.list
    });

    if (this.items) {
      this.renderItems();
    };

    this.$el.html(content);
    return this;
  }
});
