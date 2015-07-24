Cohabitate.Views.GamebarShow = Backbone.CompositeView.extend({
  template: JST['quests/bar_show'],

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest
  },

  events: {

  },

  calcWinner: function () {
    var winner = -1;

    this.quest.members().each(function (member) {
      if ( winner === -1 || (member.escape('level') >= winner.escape('level') && member.escape('xp') >= winner.escape('xp')) ) {
        winner = member;
      }
    });

    return winner === -1 ? this.user : winner
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

  render: function () {
    var content = this.template({
      quest: this.quest,
      winner: this.calcWinner()
    });
    this.$el.html(content);

    this.renderProfileDisplay();
    this.renderMiddleDisplay();

    return this;
  }
});
