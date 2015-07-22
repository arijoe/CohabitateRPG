Cohabitate.Views.GamebarShow = Backbone.CompositeView.extend({
  template: JST['quests/bar_show'],

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest
  },

  events: {

  },

  renderProfileDisplay: function () {
    var view = new Cohabitate.Views.MiniShow({ model: this.user });
    this.addSubview(".profile-display", view);
  },

  renderMiddleDisplay: function () {
    var view = new Cohabitate.Views.BarMiddle({
      user: this.user,
      quest: this.quest
    });
    this.addSubview(".quest-info", view);
  },

  renderQuestLeader: function () {

  },

  render: function () {
    var content = this.template({ quest: this.quest });
    this.$el.html(content);

    this.renderProfileDisplay();
    this.renderMiddleDisplay();

    return this;
  }
});
