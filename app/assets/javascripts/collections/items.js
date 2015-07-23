Cohabitate.Collections.Items = Backbone.Collection.extend({
  model: Cohabitate.Models.Item,

  url: "/api/items",

  initialize: function (models, options) {
    this.list = options ? options.list : {}
  }
})
