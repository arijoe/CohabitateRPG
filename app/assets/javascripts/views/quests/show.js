Cohabitate.Views.QuestShow = Backbone.View.extend({
  template: JST['quests/show'],

  initialize: function () {
    // add listeners
  },

  events: {
    // add events
  },

  render: function () {
    var content = this.template({ quest: this.model });
    this.$el.html(content);
    return this;
  }
});
