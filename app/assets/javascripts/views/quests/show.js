Cohabitate.Views.QuestShow = Backbone.CompositeView.extend({
  gameTemplate: JST['quests/main_show'],

  barTemplate: JST['quests/bar_show'],

  initialize: function () {
    this.$gameBar = $("#game-bar");
    this.$gameMain = $("#game-main");
    this.members = this.model.members;
    this.lists = this.model.lists;
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    // add events
  },

  render: function () {
    var mainContent = this.gameTemplate({ quest: this.model });
    var barContent = this.barTemplate({ quest: this.model });
    this.$gameMain.html(mainContent);
    this.$gameBar.html(barContent);
    return this;
  }
});
