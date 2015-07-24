Cohabitate.Views.BarMiddle = Backbone.View.extend({
  template: JST['gamebar/middle'],

  tagName: 'div',

  className: 'view-switch',

  initialize: function (options) {
    this.user = options.user,
    this.quest = options.quest,
    this.listenTo(Cohabitate.currentUser, "updateUser", this.updateUser);
  },

  // Binary display toggle

  events: {
    "click #roomies": "toggleRoomies",
    "click #user": "toggleUser"
  },

  toggleRoomies: function (event) {
    event.preventDefault();

    this.$el.find('.members-detail').removeClass('hide-detail');
    this.$el.find('.user-detail').addClass('hide-detail');
  },

  toggleUser: function (event) {
    event.preventDefault();

    this.$el.find('.user-detail').removeClass('hide-detail');
    this.$el.find('.members-detail').addClass('hide-detail');
  },

  render: function () {
    var content = this.template({ user: this.user, quest: this.quest });
    this.$el.html(content);
    return this;
  }
});
