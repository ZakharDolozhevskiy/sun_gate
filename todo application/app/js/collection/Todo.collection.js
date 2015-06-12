define([
  'backbone',
  'js/model/Todo.model.js'
], function(Backbone, Model) {
  "use strict";

  var Collection = Backbone.Collection.extend({
    model: Model,
    comparator: "createDate",

    removeCompleteItem: function() {
      this.reset( this.where( {done: false} ));
    },

    returnOnlyCompleted: function() {
      return this.where({done: true});
    },

    returnOnlyInProgress: function() {
      return this.where({done: false});
    }
  });

  return new Collection;
});
