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
      return this.where({status: 'done'});
    },

    returnOnlyInProgress: function() {
      return this.where({status: 'new'});
    }
  });

  return new Collection;
});
