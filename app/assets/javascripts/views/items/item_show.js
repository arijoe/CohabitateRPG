Cohabitate.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],

  tagName: "div",

  className: "item group",

  initialize: function (options) {
    this.list = options.list;
    this.listenTo(this.model, "change", this.render)
  },

  events: {
    "click .attr": "toggleDescription",
    "click .complete": "completeTask",
    "click .remove-task": "removeTask",
    "click .edit-task": "editTask",
    "click .cancel": "cancelEdit",
    "submit .edit-form": "updateTask"
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
      list: this.list
    });

    this.$el.addClass("item new group");
    this.$el.html($(form.render().$el.html()));
    this.$el.find('form').addClass("edit-form");
  },

  updateTask: function (event) {
    event.preventDefault();
    var that = this;
    var formData = this.$el.find('.item-form').serializeJSON();

    this.model.save(formData, {
      success: function (response) {
        that.model.set(response);
        that.remove();
        that.render();
      }
    });
  },

  cancelEdit: function (event) {
    event.preventDefault();
    $(this.$el.find('.item-form')).remove();

    var view = new Cohabitate.Views.ItemShow({
      collection: this.collection,
      model: this.model,
      list: this.list
    });

    this.$el.html(view.render().$el.html());
  },

  render: function () {
    this.$el.attr('data', this.model.id)
    var content = this.template({ item: this.model });
    this.$el.append(content);
    return this;
  }
});
