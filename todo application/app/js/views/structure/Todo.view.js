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
    state: 'default',
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
      this.listenTo(Backbone.Events, "stateChange", this.renderAll);
      this.listenTo(Collection, "reset", this.renderAll);
      // Notify Router that app is ready to use
      Backbone.Events.trigger('AppReady');
    },

    renderAll: function(state) {
      this.clear();

      this.state = state || this.state;

      switch(state) {
        case 'done':
          this.$itemsList.text('You colndn\t add saw added items in that state');
          (Collection.returnOnlyCompleted()).forEach(function(model) {
            this.renderOne(model, 'multi_adding');
          }.bind(this));
          break;

        case 'actual':
          (Collection.returnOnlyInProgress()).forEach(function(model) {
            this.renderOne(model, 'multi_adding');
          }.bind(this));
          break;

        default:
          (Collection).forEach(function(model) {
            this.renderOne(model, 'multi_adding');
          }.bind(this));
          break;
      }

      return this;
    },
    // This method launch in single and multi adding mode
    renderOne: function(model, mode) {
      var View = new ItemView({"model": model});
      this.itemsViews.push(View);
      // don't render new item when 'only done' state is active
      if(this.state === 'done' &&  mode !== 'multi_adding') return false;

      this.$itemsList.append(View.render());
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
