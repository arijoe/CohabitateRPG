Cohabitate.Views.ItemNew = Backbone.View.extend({
  template: JST['items/form'],

  events: {
    'submit form': 'submit'
  },

  tagName: 'div',

  className: "item new group",

  render: function () {
    this.$el.html( this.template({ item: this.model }) )
    return this;
  }
});
