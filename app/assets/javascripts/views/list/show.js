Cohabitate.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['list/show'],

  tagName: "li",

  className: "list",

  initialize: function (options) {
    this.list = options.list;
    this.items = options.list.items();
  },

  events: {
    'click .new-item': 'showForm',
    'click .cancel': 'removeForm',
    'submit form': 'submit'
  },

  showForm: function (event) {
    event.preventDefault();
    $(this.$el.find('.new')).remove();

    var form = new Cohabitate.Views.ItemNew({
      model: new Cohabitate.Models.Item(),
      list: this.list
     });

    $(this.$el.find('.items-list')).append($(form.render().$el));
  },

  removeForm: function (event) {
    event.preventDefault();
    $(this.$el.find('.new')).remove();
  },

  submit: function (event) {
    event.preventDefault();

    var that = this;
    var newItem = new Cohabitate.Models.Item();
    var formData = $(this.$el.find('.item-form')).serializeJSON();
    var view = new Cohabitate.Views.ItemShow({ model: newItem });

    newItem.save(formData, {
      success: function () {
        that.removeForm(event);
        view.render();
      }
    });
  },

  renderItems: function () {
    var view = new Cohabitate.Views.ItemsShow({ collection: this.items });
    this.addSubview(".items-list", view);
  },

  render: function () {
    var content = this.template({
      items: this.items,
      list: this.list
    });

    if (this.items) {
      this.renderItems();
    };

    this.$el.html(content);
    return this;
  }
});
