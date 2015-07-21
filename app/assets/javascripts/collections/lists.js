Cohabitate.Collections.Lists = Backbone.Collection.extend({
  model: Cohabitate.Models.List,

  url: "/api/lists",
  
  initialize: function (models, options) {
    this.quest = options.quest
  }
})
