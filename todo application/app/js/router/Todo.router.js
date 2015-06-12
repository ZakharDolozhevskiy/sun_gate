define(['backbone'], function(Backbone) {
  var Router = Backbone.Router.extend({
    routes: {
      '*state':'changeState'
    }
    ,
    initialize: function() {
      this.listenTo(Backbone.Events, 'AppReady', function() {
        this.changeState(window.location.hash.slice(1));
      });
    },

    changeState: function(params) {
      Backbone.Events.trigger('stateChange', params);
    }
  });

  var instance = new Router();

  Backbone.history.start();

  return instance;
});
