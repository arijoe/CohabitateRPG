Cohabitate.Models.Quest = Backbone.Model.extend ({
  url: "/api/quest",

  parse: function (response) {
    if (response.members) {
      this.members().set(response.members);
      delete response.members;
    };

    return response;
  },

  members: function () {
    if (!this._members) {
      this._members = new Cohabitate.Collections.Members([], { quest: this });
    }
    return this._members;
  }
})
