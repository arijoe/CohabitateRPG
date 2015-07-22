Cohabitate.Views.UserForm = Backbone.View.extend({
  template: JST['users/form'],

  events: {
    "submit form": "submit"
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submit: function(event){
    event.preventDefault();

    var that = this;
    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Cohabitate.currentUser.fetch();
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate(
          "/users/" + that.model.id,
          { trigger: true });
      }
    });
  }

});
