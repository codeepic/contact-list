define([
  'library/BaseView', 
  'views/ContactsListView'
], function(BaseView, ContactsListView) {
  /**
   * Main Application View.
   * Makes use of 'assign' helper to delegate subviews to regions (via selector).
   * Look at beefing this up with Marionette's 'Layout Manager' and 'Regions' as there 
   * are some great performance benefits to be reaped from there.
   */
  var AppView = BaseView.extend({
    el: 'body',

    initialize : function () {
      this.vent = this.options.vent;
      this.contactsList = new ContactsListView({ vent : this.vent});    
    },

    render : function () {
      this.assign(this.contactsList, '#contactsList', this.vent);

      return this;
    }
  });

  return AppView;
});