define([
    'backbone',
    'text!js/views/item/items-list.tpl'
], function (Backbone, tmpl) {
    "use strict";
    return Backbone.View.extend({
        template: _.template(tmpl),
        tagName: 'li',

        events: {
            'click .delete-btn': "removeItem",
            'change input:checkbox': "changeStatus",
            'blur .todo-description': "changeItem",
            'click .hide-done-item-btn': "hideDoneItem"
        },

        initialize: function() {
            this.$el.addClass('item');
            this.$el.append(this.template({'item': this.model.toJSON()}));
            this.desc = this.$('.todo-description');
        },

        render: function() {
            return this.$el;
        },

        removeItem: function() {
            this.model.destroy();
            this.remove();
        },

        changeItem: function(ev) {
            this.model.set({description: $(ev.target).text()});
        },

        changeStatus: function() {
            this.model.set('done', !this.model.get('done'));

            this.desc.toggleClass('complete-item');
            this.desc.hasClass('complete-item') ?
                this.desc.attr('contenteditable', false) :
                this.desc.attr('contenteditable', true);
        }
    });

});
