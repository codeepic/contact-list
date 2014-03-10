define([
	'views/AppView',
  'router'
], 
function (AppView, Router) {
  var App = function () {
  	var view, vent = _.extend({}, Backbone.Events);

  	view = new AppView({
  		vent : vent
  	}).render();
  };


  return App;
});