Cohabitate.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],

  tagName: "div",

  className: "item group",

  events: {
    "click .attr": "toggleDescription",
    "click .complete": "completeTask",
    "click .remove-task": "removeTask",
    "click .edit-task": "editTask"
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
    if ($(event.target).hasClass('check')) { return; }

    var taskID = $(event.target).attr('data');
    var task = this.collection.get(taskID);

    Cohabitate.currentUser.completedTasks().add(task);
    task.save({completer_id: Cohabitate.currentUser.id});

    Cohabitate.currentUser.trigger("updateUser");
  },

  removeTask: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
    this.render();
  },

  editTask: function (event) {
    event.preventDefault();

    var form = new Cohabitate.Views.ItemNew({
      model: this.model,
      list: this.collection
    });

    $(this.$el).html($(form.render().$el));
  },

  render: function () {
    this.$el.attr('data', this.model.id)
    var content = this.template({ item: this.model });
    this.$el.append(content);
    return this;
  }
});
