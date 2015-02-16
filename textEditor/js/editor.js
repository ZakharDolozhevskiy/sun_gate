(function(global){
    "use strict";
    /**
     * @param container jQuery object
     * @constructor
     */
    global.Editor = function(container){
        /**
         * Check that container is the created dom element at the user's page
         */
        if( !container.length ){
            throw Error('Argument isn\'t a DOM element. Please check the passed argument' );
        }

        Editor.prototype.init(container);
    };

    $.extend(Editor.prototype, {

        init: function(container) {

            // determine the styling feature that will be added into legend as a toggle buttons

            this.legend_items = {
                'items':[
                    {'className': 'set_bold', 'title': 'B', 'tag': 'b', 'handler': this.setBold},

                    {'className': 'set_underline', 'title': 'U', 'tag': 'em', 'handler': this.setUnderline},

                    {'className': 'set_cursive', 'title': 'I', 'tag': 's', 'handler': this.setItalic},

                    {'className': 'all_select', 'title': 'Select All', 'handler': this.selectAll}
                ]
            };

            // render UI components
            this.render(container);

            // init the library that work with user's selection
            global.rangyCreate(this.iWindow);

            this.rangy = this.iWindow.rangy;

            this.rangy.init();

            // add toggles of text-style

            this.controls = {
                bold: this.rangy.createCssClassApplier("_b", {
                    elementTagName: "b",
                    ignoreWhiteSpace: true
                }),
                italic: this.rangy.createCssClassApplier("_i", {
                    elementTagName: "em",
                    ignoreWhiteSpace: true
                }),
                underLine: this.rangy.createCssClassApplier("_u", {
                    elementTagName: "s",
                    ignoreWhiteSpace: true
                })
            };

        },

        render: function(container){
            var $iframe = $('<iframe/>').addClass('holder'),
                $content = $('<div/>').addClass('content')
                    .attr('contenteditable','true')
                    .attr('ondragstart','return false')
                    .css('min-height','100%')
                    .text('test string');

            $(container).append($iframe);

            // save iframe's window object link to Editor prototype

            this.iWindow = $iframe[0].contentWindow;
            this.iDoc = $iframe[0].contentDocument;

            // add content into iframe window

            $(this.iDoc).find('body').append($content);

            // init a legend in the user container

            this.createLegend(container);
        },

        createLegend: function(container) {
            var elem = $('<div/>').addClass('legend'),
                // add preview button
                preview = $('<button/>')
                       .text('Show preview')
                       .addClass('preview')
                       .on('click', $.proxy(this.showPreview, this));

            /**
             * generate legend items ( buttons )
             * elem jQuery element, legend wrapper
             * this.legend_items, Object with defined legend's toggles
             */
            this.createItems(elem, this.legend_items);

            // adding event listeners to created toggles in the legend container
            this.addEventListeners(elem, this.legend_items);

            $(container).append(elem)
                        .append(preview);
        },

        createItems: function(container, data){
            var template = "{{#items}} <span class={{className}}> {{title}} </span> {{/items}}",
                items = data,
                output = Mustache.render(template, items);

            $(container).append(output);
        },

        addEventListeners: function(elem, data){
            /**
             * iterate the object with controls and find element (button) by defined classname
             * then added to element method handler that have been added it this object too
             */
            data['items'].forEach(function(obj){
                $(elem).find('.' + obj.className).on('click', $.proxy(obj.handler, this));
            }.bind(this));
        },

        // ---------- functions - controls block --------------

        setBold: function() {
            this.controls.bold.toggleSelection();
        },

        setItalic: function() {
            this.controls.italic.toggleSelection();
        },

        setUnderline: function() {
            this.controls.underLine.toggleSelection();
        },

        showPreview: function(){
            var newWin = open("", "Preview", "height=600,width=800"),
            // content that have been added in the editable iframe's window
                content= $(this.iDoc.body).html();

            $(newWin.document.body).html( content );
        },

        selectAll: function(){
            var range = this.rangy.createRange();
                range.selectNodeContents($(this.iDoc).find('.content')[0]);
            // added selection
            this.rangy.getSelection().setSingleRange(range);
        }
    });

    new Editor($("#editor"));

})(this);



