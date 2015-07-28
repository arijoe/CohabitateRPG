Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  addList: function (list) {
    var view = new Cohabitate.Views.ListShow({
      list: list
    });
    this.addSubview(".lists", view);
  },

  renderLists: function () {
    var that = this;

    this.collection.each( function (list) {
      that.addList(list);
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    this.renderLists();

    return this;
  }
});
