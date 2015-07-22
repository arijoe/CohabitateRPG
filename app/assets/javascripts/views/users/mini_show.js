Cohabitate.Views.MiniShow = Backbone.View.extend({
  tagName: 'div',

  className: 'mini-info',

  template: JST['users/mini_show'],

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  }
});
