define(["views/EditContactView"], function(EditContactView){
  var Router = Backbone.Router.extend({
    routes: {
      'new': 'editContact',
      'edit/:id': 'editContact'
    }
  });

  var contact = new EditContactView();

  var router = new Router();

  router.on("route:editContact", function(id){
    console.log("add new contact or edit existing one");
   contact.render({id: id})
  });

  Backbone.history.start();

  return Router;
});