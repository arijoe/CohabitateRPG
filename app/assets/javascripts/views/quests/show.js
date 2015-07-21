Cohabitate.Views.QuestShow = Backbone.CompositeView.extend({
  mainTemplate: JST['quests/main_show'],

  barTemplate: JST['quests/bar_show'],

  initialize: function (options) {
    this.user = options.user;
    this.collection = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
  },

  events: {

  },

  render: function () {
    var mainContent = this.mainTemplate({ quest: this.model });
    var barContent = this.barTemplate({ quest: this.model });
    this.$rootEl.html(mainContent);
    // this.attachSubviews();
    return this;
  }
});
