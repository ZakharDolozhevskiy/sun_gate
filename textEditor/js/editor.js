(function(global){
    "use strict";
    /**
     * @param container jQuery object
     * @constructor
     */
    var Editor = function(container){
        Editor.prototype.container = container;
        Editor.prototype.init(container);
    };

    $.extend(Editor.prototype, {

        init: function(container) {
            // render UI components
            this.render(container);

            // init the library that work with user's selection
            rangyCreate(this.iWindow);

            this.rangy = this.iWindow.rangy;

            this.rangy.init();


            // add style toggles

            this.controls = {
                bold: this.rangy.createCssClassApplier("bold", true),
                italic: this.rangy.createCssClassApplier("italic", true),
                underLine: this.rangy.createCssClassApplier("underline", true)
            };
        },

        render: function(container){
            var $iframe = $('<iframe/>').addClass('content'),
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
                       .on('click', $.proxy(this.showPreview, this)),
                // test btn
               $b_tgl = $('<button/>').text('bold').on('click', $.proxy(this.setBold, this)),
               $i_tgl = $('<button/>').text('italic').on('click', $.proxy(this.setItalic, this)),
               $u_tgl = $('<button/>').text('underline').on('click', $.proxy(this.setUnderline, this));


            $(container).append(elem)
                        .append(preview)
                        .append($b_tgl)
                        .append($i_tgl)
                        .append($u_tgl);
        },

        showPreview: function(){
            var newWin = open("", "Preview", "height=600,width=800"),
                // content that have been added in the editable iframe's window
               content= $(this.iDoc.body).html();

            $(newWin.document.body).html( content );
        },

        // ---------- functions - controls block --------------

        setBold: function() {
            debugger;
            this.controls.bold.toggleSelection();
        },

        setItalic: function() {
            this.controls.italic.toggleSelection();
        },

        setUnderline: function () {
            this.controls.underLine.toggleSelection();
        }

    });

    new Editor($('#editor'));

})(this);



