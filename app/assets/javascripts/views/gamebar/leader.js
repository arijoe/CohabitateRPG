// Cohabitate.Views.GamebarShow = Backbone.CompositeView.extend({
//   template: JST['quests/bar_show'],
//
//   initialize: function (options) {
//     this.user = options.user,
//     this.quest = options.quest
//   },
//
//   events: {
//
//   },
//
//   renderProfileDisplay: function () {
//     var view = new Cohabitate.Views.UserShow({ model: this.user });
//     this.addSubview(".profile-display", view);
//   },
//
//   renderMiddleDisplay: function () {
//
//   },
//
//   renderQuestLeader: function () {
//
//   },
//
//   render: function () {
//     var content = this.template({ quest: this.quest });
//     this.$el.html(content);
//
//     this.renderProfileDisplay();
//
//     return this;
//   }
// });
