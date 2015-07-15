Cohabitate.Collections.Quests = Backbone.Collection.extend ({
  model: Cohabitate.Models.Quest,

  url: "/api/quests",

  getOrFetch: function (id) {
    var collection = this;
    var quest = collection.get(id);

    if (quest) {
      quest.fetch();
    } else {
      quest = new Cohabitate.Models.Quest({ id: id });
      quest.fetch({
        success: function () {
          collection.add(quest);
        }
      });
    }

    return quest;
  }
});

Cohabitate.Collections.quests = new Cohabitate.Collections.Quests ();
