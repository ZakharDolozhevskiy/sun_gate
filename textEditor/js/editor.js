(function(global){
    "use strict";
    /**
     * @param container jQuery object
     * @constructor
     */
    var Editor = function(container){
        this.container = container;
        Editor.prototype.init(container);
    };

    $.extend(Editor.prototype, {

        init: function(container) {
            var iframe = $('<iframe/>').addClass('content'),
                $content = $('<div/>').addClass('content'),
                iWindow, iDoc;
            $(container).append(iframe);

            // save iframe's window object link
            iWindow = iframe[0].contentWindow;
            iDoc = iframe[0].contentDocument;

            // added content into iframe and make it editable
            $content.attr('contenteditable','true')
                    .attr('ondragstart','return false')
                    .text('test string');

            $(iDoc).find('body').append($content);

            this.createLegend(container);
       },

       createLegend: function(container) {
           var elem = $('<div/>').addClass('legend');

           $(container).append(elem);
       }


    });

    //Editor.prototype = {
    //    controls : {},
    //
    //    init: function(){
    //        rangy.init();
    //
    //        this.controls = {
    //            bold: rangy.createCssClassApplier("bold", true),
    //            italic: rangy.createCssClassApplier("italic", true),
    //            underLine: rangy.createCssClassApplier("underline", true)
    //        };
    //
    //
    //    },
    //
    //    setBold: function() {
    //        this.controls.bold.toggleSelection();
    //    },
    //
    //    setItalic: function() {
    //        this.controls.italic.toggleSelection();
    //    },
    //
    //    setUnderline: function () {
    //        this.controls.underLine.toggleSelection();
    //    },
    //
    //    previewer: function (flag) {
    //        if(flag){
    //            var params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no' +
    //                'width=900,height=900,left=100,top=100',
    //                win;
    //
    //                win = window.open('http://localhost:63342/textEditor/frames/testFrame.html', 'preview', params);
    //
    //                $(win).on("message", function(e) {
    //                    var content = JSON.parse(e.originalEvent.data);
    //                    $(win.document).find('#content').html(content);
    //                });
    //        }
    //        return win;
    //    },
    //
    //    getContent: function() {
    //        return this.container.html();
    //    }
    //};

    new Editor($('#editor'));

})(this);



