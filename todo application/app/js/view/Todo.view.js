define([
  'backbone',
  'js/collection/Todo.collection',
  'text!js/view/todoApp.tpl'
], function(Backbone, Collection, tmpl) {
  "use strict";

  return Backbone.View.extend({
    el: '.application',
    collection : new Collection,
    template: _.template(tmpl),
    count: 0,
    events: {
      'submit form': "addItem",
      'click .delete-btn': "removeItem",
      'change input:checkbox': "changeStatus",
      'blur .todo-description': "changeItem",
      'click .hide-done-item-btn': "hideDoneItem"
    },

    initialize: function() {
      this.listenTo(this.collection, "update", this.render);
      this.listenTo(this.collection, "change", this.render);
      this.listenTo(this.collection, "reset", this.render);
      this.render();

      this.listenTo(Backbone.Events, "ShowInProgressItem", this.showInProgressItem);
      this.listenTo(Backbone.Events, "ShowDoneItem", this.showDoneItem);
      this.listenTo(Backbone.Events, "ShowAllItem", this.render);
    },

    render: function(ev, opt, data) {

      this.$el.html( this.template({ "list" : data || this.collection.toJSON() }));
      return this;
    },

    addItem: function() {
      this.collection.add({
        _id: this.count++,
        description: this.$('.newTodo-filed').val()
      });

      return false;
    },

    removeItem: function(ev) {
      var itemID = $(ev.target).parent().data('id');

      this.collection.remove(itemID);
    },

    changeItem: function(ev) {
      var itemID = $(ev.target).parent().parent().data('id');

      this.collection.get(itemID).set({description: $(ev.target).text()});
    },

    changeStatus: function(ev) {
      var itemID = $(ev.target).parent().parent().data('id');

      this.collection.get(itemID).set({
          status: ev.target.checked ? 'done' : 'new'
        });
    },

    hideDoneItem: function() {
      this.collection.removeCompleteItem();
    },

    showInProgressItem: function() {
      this.render( this.collection.returnOnlyInProgress() );
    },

    showDoneItem: function() {
      this.render( this.collection.returnOnlyCompleted() );
    }

  });
});
