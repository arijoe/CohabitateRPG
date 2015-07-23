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
    var form = new Cohabitate.Views.ItemNew({ model: new Cohabitate.Models.Item() });
    this.$el.append(form.render());
  },

  removeForm: function (event) {
    event.preventDefault();
    $(this.$el.find('.item-form')).remove();
  },

  submit: function (event) {
    event.preventDefault();
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
