Cohabitate.Models.Quest = Backbone.Model.extend ({
  url: "/api/quest",

  parse: function (response) {
    if (response.members) {
      this.members().set(response.members);
      delete response.members;
    };

    if (response.lists) {
      this.lists().set(response.lists);
      delete response.lists;
    }

    return response;
  },

  members: function () {
    if (!this._members) {
      this._members = new Cohabitate.Collections.Members([], { quest: this });
    }
    return this._members;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new Cohabitate.Collections.Lists([], { quest: this });
    }

    return this._lists;
  }
})
