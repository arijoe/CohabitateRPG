Cohabitate.Views.QuestShow = Backbone.CompositeView.extend({
  mainTemplate: JST['quests/main_show'],

  barTemplate: JST['quests/bar_show'],

  initialize: function () {
    this.user = options.user;
    this.collection = this.model.lists().items();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.collection, "add", this.addItem);
  },

  events: {

  },

  render: function () {
    var mainContent = this.mainTemplate({ quest: this.model });
    var barContent = this.barTemplate({ quest: this.model });
    this.$gameMain.html(mainContent);
    this.$gameBar.html(barContent);
    return this;
  }
});
