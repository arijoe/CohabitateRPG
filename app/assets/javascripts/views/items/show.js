Cohabitate.Views.ItemsShow = Backbone.View.extend({
  template: JST['items/show'],

  initialize: function () {
    this.listenTo(this.collection, "sync change", this.render)
  },

  events: {
    "click .attr": "toggleDescription",
    "click .complete": "completeTask"
  },

  toggleDescription: function (event) {
    event.preventDefault();

    var descriptions = this.$el.find('.description')

    descriptions.each( function (idx) {
      var desc = $(descriptions[idx]);
      if ( $(event.target).attr('data') === desc.attr('data') ) {
        desc.hasClass('hidden') ? desc.removeClass('hidden') : desc.addClass('hidden');
      };
    });
  },

  completeTask: function (event) {
    event.preventDefault();

    var taskID = $(event.target).attr('data');
    var task = this.collection.get(taskID);

    Cohabitate.currentUser.completedTasks().add(task);
    task.save({completer_id: Cohabitate.currentUser.id});
  },

  render: function () {
    var content = this.template({ items: this.collection });
    this.$el.html(content);
    return this;
  }
});
