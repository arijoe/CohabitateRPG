Cohabitate.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],

  tagName: "div",

  className: "item group",

  completeTask: function (event) {
    event.preventDefault();
    if ($(event.target).hasClass('check')) { return; }

    var taskID = $(event.target).attr('data');
    var task = this.collection.get(taskID);

    Cohabitate.currentUser.completedTasks().add(task);
    task.save({completer_id: Cohabitate.currentUser.id});

    Cohabitate.currentUser.trigger("updateUser");
  },

  render: function () {
    this.$el.attr('data', this.model.id)
    var content = this.template({ item: this.model });
    this.$el.append(content);
    return this;
  }
});
