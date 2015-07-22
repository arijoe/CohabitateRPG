Cohabitate.Views.UserShow = Backbone.View.extend({
  tagName: 'div',

  className: 'user-info',

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/show'],

  events: {
    'click .user-modal-dismiss': 'dismiss',
    'click .user-modal-backdrop': 'dismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();
    Backbone.history.navigate("");
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  }
});
