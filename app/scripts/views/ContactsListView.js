define(
	['text!templates/ContactsListView.html'], 
function (template) {
  var ContactListView = Backbone.View.extend({

  		render: function(){

  			this.$el.html(_.template(template,{}));
  			return this;
  		}

  });
  return ContactListView;
});