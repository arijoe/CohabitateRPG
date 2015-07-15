Cohabitate.Collections.Quests = Backbone.Collection.extend ({
  model: Cohabitate.Models.Quest,

  url: "/api/quests",

  getOrFetch: function (id) {

  }
});

Cohabitate.Collections.quests = new Cohabitate.Collections.Quests ();
