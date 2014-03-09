define(
	['text!templates/ContactsListView.html',
  "collections/ContactCollection"],
function (template, ContactCollection) {
  var ContactListView = Backbone.View.extend({

  		render: function(){
        var that = this;
        var contacts = new ContactCollection();
        contacts.fetch({
          success: function(){
            that.$el.html(_.template(template, {contacts: contacts.models}));
            return that;
          }
        });
  		}

  });


  return ContactListView;
});