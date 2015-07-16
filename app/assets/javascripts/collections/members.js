Cohabitate.Collections.Members = Backbone.Collection.extend ({
  model: Cohabitate.Models.Member,

  url: "/api/members",

  initialize: function (models, options) {
    this.quest = options.quest;
  }
});
