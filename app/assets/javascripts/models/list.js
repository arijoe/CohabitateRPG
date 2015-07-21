Cohabitate.Models.List = Backbone.Model.extend ({
  urlRoot: "/api/lists",

  parse: function (response) {
    if (response.items) {
      this.items().set(response.items);
      delete response.items;
    };

    return response;
  },

  items: function () {
    if (!this._items) {
      this._items = new Cohabitate.Models.Item();
    }

    return this._item;
  }
});
