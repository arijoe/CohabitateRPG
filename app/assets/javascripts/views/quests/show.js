Cohabitate.Views.QuestShow = Backbone.CompositeView.extend({
  template: JST['quests/show'],

  initialize: function (options) {
    this.user = options.user;
    this.collection = this.model.lists();
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model, "add", this.render);
  },

  events: {

  },

  addQuestBar: function (bar) {
    
  }

  render: function () {
    debugger
    var content = this.template({ quest: this.model });
    this.$el.htmlcontent);
    // this.attachSubviews();
    return this;
  }
});
