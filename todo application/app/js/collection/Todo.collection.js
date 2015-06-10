define([
  'backbone',
  'js/model/Todo.model.js'
], function(Backbone, Model) {
  "use strict";

  return Backbone.Collection.extend({
    model: Model,
    comparator: "createDate",

    removeCompleteItem: function() {
      this.reset( this.where( {status: 'new'} ));
    },

    returnOnlyCompleted: function() {
      return this.where({status: 'done'});
    },

    returnOnlyInProgress: function() {
      return this.where({status: 'new'});
    }
  });
});
