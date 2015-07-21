Cohabitate.Views.GamemainShow = Backbone.CompositeView.extend({
  template: JST['quests/main_show'],

  render: function () {
    var content = this.template({ lists: this.collection });
    this.$el.html(content);
    return this;
  }
});
