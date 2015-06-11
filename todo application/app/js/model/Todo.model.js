define([
  'backbone'
], function(Backbone) {
  "use strict";

  return Backbone.Model.extend({
    defaults: {
      "createDate":  new Date,
      "description": '',
      "done":        false
    },
    idAttribute: '_id'
  });

});