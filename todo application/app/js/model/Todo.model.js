define([
  'backbone'
], function(Backbone) {
  "use strict";

  return Backbone.Model.extend({
    defaults: {
      "createDate":  new Date,
      "description": '',
      "status":      'new'
    },
    idAttribute: '_id'
  })

});