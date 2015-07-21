Cohabitate.Models.List = Backbone.Model.extend ({
  urlRoot: "/api/lists",

  parse: function (response) {
    console.log(response);
    if (response.items) {
      debugger
      this.items().set(response.items);
      delete response.items;
    };

    return response;
  },

  items: function () {
    if (!this._items) {
      this._items = new Cohabitate.Collections.Items([], {list: this});
    }

    return this._items;
  }
});
