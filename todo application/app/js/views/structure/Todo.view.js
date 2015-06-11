define([
  'backbone',
  'js/collection/Todo.collection.js',
  'js/views/item/Item.view.js',
  'text!js/views/structure/todoApp.tpl'
], function(Backbone, Collection, ItemView, tmpl) {
  "use strict";

  return Backbone.View.extend({
    template: _.template(tmpl),
    itemsViews: [],
    events: {
      'submit form': "addItem",
      'click .hide-done-item-btn': "hideDoneItem"
    },

    initialize: function() {
      // Create structure
      this.$el.html( this.template());
      // Find needed components
      this.$itemsList = this.$('.todo-list');
      this.$input = this.$('.newTodo-filed');
      // Attach listeners
      this.listenTo(Collection, "add", this.renderOne);
      //this.listenTo(Collection, "update", this.renderAll);
      this.listenTo(Collection, "reset", this.renderAll);
    },

    renderAll: function() {
      var View;
      this.clear();

      this.itemsViews = Collection.map(function (each) {
        View = new ItemView({"model": each});

        this.$itemsList.append(View.render());

        return View;
      }.bind(this));

      return this;
    },

    renderOne: function (model) {
      this.$itemsList.append(new ItemView({"model": model}).render());
    },

    addItem: function(e) {
      e.preventDefault();
      Collection.add({ description: this.$input.val() });
      this.$input.val(' ');
    },

    clear: function () {
      // Remove items and all View instance with related event listeners
      this.$itemsList.empty();
      this.itemsViews.forEach(function (View) {
        View.undelegateEvents();
        View.remove();
      });
    },

    hideDoneItem: function() {
      Collection.removeCompleteItem();
    }

  });
});
