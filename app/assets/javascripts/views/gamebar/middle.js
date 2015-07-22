Cohabitate.Views.BarMiddle = Backbone.View.extend({
  template: JST['gamebar/middle'],

  tagName: 'div',

  className: 'view-switch',

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest
  },

  // Binary display toggle

  events: {

  },

  renderUserInfo: function () {

  },

  rendeMembersInfo: function () {

  },

  render: function () {
    var content = this.template({ user: this.user, quest: this.quest });
    this.$el.html(content);
    return this;
  }
});
