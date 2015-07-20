Cohabitate.Views.UsersShow = Backbone.View.extend({
  tagName: 'div',

  className: 'user-info',

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/show'],

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  }

});
