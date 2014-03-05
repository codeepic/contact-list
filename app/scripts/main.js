requirejs.config({
  baseUrl: 'scripts',

  paths: {
    text: 'vendor/text'
  },

  shim: {
  	'vendor/underscore-min': {
      exports: '_'
    },
    'vendor/moment.min': {
      exports: 'moment'
    },
    
    'vendor/bootstrap.min': {
      exports: 'bootstrap'
    },
    'vendor/backbone-min': {
      deps: ['vendor/underscore-min']
    , exports: 'Backbone'
    },
    'app': {
      deps: [
        'vendor/underscore-min', 
        'vendor/backbone-min', 
        'vendor/bootstrap.min',     
        'vendor/moment.min'
      ]
    }
  }
});

// Main entry point now RequireJS is happy.
require(['app'], function(App) {
  window.app = new App();
});