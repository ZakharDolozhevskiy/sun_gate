define([
  'backbone',
  'model/Todo.model.js'
], function(Backbone, Model) {
  "use strict";

  return Backbone.Collection.extend({
    model: Model,
    comparator: "createDate"
  })

});
