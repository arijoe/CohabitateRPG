Cohabitate.Views.QuestShow = Backbone.CompositeView.extend({
  template: JST['quests/show'],

  initialize: function (options) {
    this.user = options.user;
    this.collection = this.model.lists();
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(this.user, "change", this.render);
  },

  renderQuestBar: function () {
    var view = new Cohabitate.Views.GamebarShow({
      user: this.user,
      quest: this.model
    });

    this.addSubview("#game-bar", view);
  },

  renderQuestMain: function () {
    var view = new Cohabitate.Views.GamemainShow({
      collection: this.collection
    });

    this.addSubview("#game-main", view);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderQuestBar();
    this.renderQuestMain();

    return this;
  }
});
