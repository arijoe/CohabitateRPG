Cohabitate.Views.UsersShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/show'],

  render: function(){
    var html = this.template({ user: this.model });
    debugger
    this.$el.html(html);

    return this;
  }

});
