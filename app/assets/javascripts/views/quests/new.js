Cohabitate.Views.QuestForm = Backbone.View.extend({
  template: JST['quests/new'],

  initialize: function (options) {
    this.user = options.user;
    this.quest = options.quest;
  },

  label: "div",

  className: "quest-form",

  events: {
    "submit form": "submit"
  },

  render: function () {
    debugger
    var html = this.template({
      user: this.user,
      quest: this.quest
     });

    this.$el.html(html);
    return this;
  },

  submit: function(event){
    event.preventDefault();

    var that = this;
    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Cohabitate.currentUser.fetch();
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate( "",{ trigger: true });
      }
    });
  }
});
