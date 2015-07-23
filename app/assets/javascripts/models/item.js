Cohabitate.Models.Item = Backbone.Model.extend({
  urlRoot: "/api/items",

  isCompleted: function () {
    return !!this.get('completer_id');
  }
});
