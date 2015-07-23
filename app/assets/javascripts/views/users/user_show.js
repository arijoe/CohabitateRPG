Cohabitate.Views.UserShow = Backbone.View.extend({
  tagName: 'div',

  className: 'user-info',

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/show'],

  events: {
    'click .user-modal-dismiss': 'dismiss',
    'click .user-modal-backdrop': 'dismiss'
  },

  dismiss: function (event) {
    event.preventDefault();
    this.remove();

    if (Cohabitate.currentUser.quest().isNew()) {
      Backbone.history.navigate("/quests/new", { trigger: true });
    } else {
      Backbone.history.navigate("");
    };
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);
    debugger
    return this;
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
    }
  },

  _updatePreview: function(src){
    this.$el.find("#preview-post-image").attr("src", src);
  }
});
