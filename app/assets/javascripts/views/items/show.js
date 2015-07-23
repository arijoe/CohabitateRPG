Cohabitate.Views.ItemsShow = Backbone.View.extend({
  template: JST['items/show'],

  events: {
    "click #attr": "toggleDescription"
  },

  toggleDescription: function (event) {
    event.preventDefault();

    var descriptions = this.$el.find('.description')

    descriptions.each( function (idx) {
      var desc = $(descriptions[idx]);
      if ( $(event.target).attr('data') === desc.attr('data') ) {
        desc.hasClass('hidden') ? desc.removeClass('hidden') : desc.addClass('hidden');
      };
    });
  },

  render: function () {
    var content = this.template({ items: this.collection });
    this.$el.html(content);
    return this;
  }
});
