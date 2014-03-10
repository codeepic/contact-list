define(
  ["text!templates/EditContactView.html",
   "models/ContactModel"],
  function(template, Contact){
  var EditUser = Backbone.View.extend({
    el: "#dialog",
    render: function(options){  //options is undefined
      var that = this;
      if(options.id){
        //GET request - fetch contact from collection and update it
        var contact = new Contact({id: options.id});
        contact.fetch({
          success: function(){
            var template = _.template(template, {contact: contact});
            that.$el.html(template);
          }
        });
      }else{
         //render a form to add new user
        var template = _.template(template, {contact: null});
        this.$el.html(template);
      }
    }
  });

  return EditUser;
});