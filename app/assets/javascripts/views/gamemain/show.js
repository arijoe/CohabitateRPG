Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render);
  },

  events: {
    "click": "customEvent"
  },

  renderItems: function () {
    var that = this;
    this.collection.each( function (list) {
      var view = new Cohabitate.Views.ListShow({
        collection: list.items();
      });

      that.addSubview(".list", view);
    };
  },

  render: function () {
    var content = this.template({ lists: this.collection });
    this.$el.html(content);

    this.renderItems();

    return this;
  },

  customEvent: function () {
    Cohabitate.currentUser.trigger("ari");
  }
});
