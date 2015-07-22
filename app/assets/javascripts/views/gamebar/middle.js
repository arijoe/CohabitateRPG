Cohabitate.Views.BarMiddle = Backbone.View.extend({
  template: JST['gamebar/middle'],

  tagName: 'div',

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest
  },

  // This view should:
  // 1. Display user info automatically
  // 2. Listen to click event on member info/user info
  // 3. Render user info or member info depending on task
  // 4. "swap view"

  events: {

  },

  renderUserInfo: function () {
  },

  rendeMembersInfo: function () {

  },

  render: function () {
    // swap view
  }
});
