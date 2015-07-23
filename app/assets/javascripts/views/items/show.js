Cohabitate.Views.ItemsShow = Backbone.View.extend({
  template: JST['items/show'],

  events: {
    "click #attr": "toggleDescription"
  },

  toggleDescription: function (event) {
    event.preventDefault();

    var desc = this.$el.find('.description')
    desc.hasClass('hidden') ? desc.removeClass('hidden') : desc.addClass('hidden');
  },

  render: function () {
    var content = this.template({ items: this.collection });
    this.$el.html(content);
    return this;
  }
});
