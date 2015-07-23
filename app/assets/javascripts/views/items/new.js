Cohabitate.Views.ItemNew = Backbone.View.extend({
  template: JST['items/form'],

  render: function () {
    this.$el.html( this.template({ item: this.model }) )
    return this;
  }
});
