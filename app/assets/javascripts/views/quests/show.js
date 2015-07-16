Cohabitate.Views.QuestShow = Backbone.View.extend({
  template: JST['quests/show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
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
