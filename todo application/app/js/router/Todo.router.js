define(['backbone'], function(Backbone) {
  var Router = Backbone.Router.extend({
    routes: {
      'actual': 'showItemInProgress',
      'done': 'showCompleteItem',
      '':'defaultState'
    },

    showItemInProgress: function() {
      Backbone.Events.trigger('ShowInProgressItem');
    },

    showCompleteItem: function() {
      console.log('ShowDoneItem triggered');
      Backbone.Events.trigger('ShowDoneItem');
    },

    defaultState: function() {
      console.log('ShowAllItem triggered');
      Backbone.Events.trigger('ShowAllItem');
    }
  });

  var instance = new Router();

  Backbone.history.start();

  return instance;
});
