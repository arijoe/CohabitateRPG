Cohabitate.Views.ItemNew = Backbone.View.extend({
  template: JST['items/form'],

  tagName: 'div',

  className: "item new group",

  initialize: function (options) {
    this.list = options.list
  },

  render: function () {
    this.$el.html( this.template({
        item: this.model,
        list: this.list
      })
    );

    return this;
  }
});
