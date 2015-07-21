Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render);
  },

  events: {
    "click": "customEvent"
  },

  addItem: function (list) {
    var view = new Cohabitate.Views.ListShow({
      list: list
    });
    this.addSubview(".lists", view);
  },

  renderItems: function () {
    this.collection.each( function (list) {
      this.addItem(list);
    }.bind(this));
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderItems();

    return this;
  },

  customEvent: function () {
    Cohabitate.currentUser.trigger("ari");
  }
});
