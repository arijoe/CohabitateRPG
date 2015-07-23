Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render);
  },

  events: {
    "click": "customEvent"
  },

  addList: function (list) {
    var view = new Cohabitate.Views.ListShow({
      list: list
    });
    this.addSubview(".lists", view);
  },

  renderLists: function () {
    var that = this;

    this.collection.each( function (list) {
      that.addList(list);
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderLists();

    return this;
  },

  customEvent: function () {
    Cohabitate.currentUser.trigger("ari");
  }
});
