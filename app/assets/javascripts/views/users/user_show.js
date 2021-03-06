Cohabitate.Views.UserShow = Backbone.View.extend({
  tagName: 'div',

  className: 'user-info',

  initialize: function(options){
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['users/show'],

  events: {
    'click .user-modal-dismiss': 'dismiss',
    'click .edit': 'showField',
    'submit .attr-form': 'update',
    "change #input-user-image": "fileInputChange",
    'submit .image-form': 'updateImage'
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

  showField: function (event) {
    event.preventDefault();

    var editables = this.$el.find('.edit')
    var fields = this.$el.find('li')

    editables.each( function (idx) {
      fields.each( function (jdx) {
        var editable = $(editables[idx]);
        var field = $(fields[jdx]);

        if ( $(event.target).attr('id') === editable.attr('id') &&
        $(event.target).attr('id') === field.attr('id')) {
          var label = field.attr('id');
          var userVar = Cohabitate.currentUser.escape(label);

          field.html('<form class="attr-form"><label>' + label + '</label><input type="' + label + '"name="user[' + label + ']"value="' + userVar + '"><button>Update</button></form>')
        };
      });
    });
  },

  update: function (event) {
    event.preventDefault();

    var $form = $(event.target);
    var userData = $form.serializeJSON().user;

    this.model.save(userData);
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);
    return this;
  },

  updateImage: function (event) {
    event.preventDefault();

    var that = this;
    var file = this.$("#input-user-image")[0].files[0];
    var formData = new FormData()
    formData.append("user[image]", file);

    this.model.saveFormData(formData);
  },

  fileInputChange: function(event){
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
    this.$el.find("#preview-user-image").attr("src", src);
  }
});
