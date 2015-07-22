Cohabitate.Views.GamebarShow = Backbone.CompositeView.extend({
  template: JST['quests/bar_show'],

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest
  },

  events: {

  },

  renderProfileDisplay: function () {
    
  },

  render: function () {
    var content = this.template({ quest: this.quest });
    this.$el.html(content);
    return this;
  }
});
