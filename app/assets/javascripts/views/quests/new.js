Cohabitate.Views.QuestForm = Backbone.View.extend({
  template: JST['quests/new'],

  initialize: function (options) {
    this.user = options.user;
    this.quest = options.quest;
  },

  label: "div",

  className: "quest-form",

  events: {
    "submit quest-form-modal": "submit"
  },

  render: function () {
    var html = this.template({
      quest: this.quest,
      user: this.user
     });

    this.$el.html(html);
    return this;
  },

  submit: function(event){
    event.preventDefault();
    debugger

    var that = this;
    var $form = $(event.currentTarget);
    var questData = $form.serializeJSON().user;

    this.quest.save(questData, {
      success: function(){
        that.user.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }
});
