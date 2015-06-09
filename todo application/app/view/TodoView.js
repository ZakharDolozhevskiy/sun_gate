define([
  'backbone',
  'collection/Todo.collection',
  'text!view/todoApp.tpl'
], function(Backbone, Collection, tmpl) {
  "use strict";

  return Backbone.View.extend({
    el: '.application',
    todos : new Collection,
    template: _.template(tmpl),
    count: 2,
    events: {
      'submit form': "addItem",
      'click .delete-btn': "removeItem",
      'change input:checkbox': "changeStatus",
      'blur .todo-description': "changeItem"
    },

    initialize: function() {
      this.listenTo(this.todos, "update", this.render);
      this.listenTo(this.todos, "change", this.render);
      // monk data start
      this.todos.add([{'_id': 1, status: 'new', description:'make email template'},
                      {'_id': 2, status: 'new', description:'buy tickets'}]);
      // monk data end
      this.render();
    },

    render: function() {
      this.$el.html( this.template({ "list" : this.todos.toJSON() }));
      return this;
    },

    addItem: function() {
      this.todos.add({
        _id: this.count++,
        description: this.$('.newTodo-filed').val()
      });

      return false;
    },

    removeItem: function(ev) {
      var itemID = $(ev.target).parent().data('id');

      this.todos.remove(itemID);
    },

    changeItem: function(ev) {
      var itemID = $(ev.target).parent().parent().data('id');

      this.todos.get(itemID).set({description: $(ev.target).text()});
    },

    changeStatus: function(ev) {
      var itemID = $(ev.target).parent().parent().data('id');

      this.todos.get(itemID).set({
          status: ev.target.checked ? 'done' : 'new'
        });
    }
  });
});
