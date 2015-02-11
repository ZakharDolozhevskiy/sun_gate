//(function($){
//    "use strict";
//    $('iframe').load(function(){
//        var win = $(this)[0].contentWindow,
//            $modal_btn = $('#showModal'),
//            controls = {
//                'B' : $('.bold'),
//                'U' : $('.u_line'),
//                'I' : $('.italic')
//            };
//
//        controls['B'].on('click', function(){
//            win.editor.setBold();
//        });
//
//        controls['I'].on('click', function(){
//            win.editor.setItalic();
//        });
//
//        controls['U'].on('click', function(){
//            win.editor.setUnderline();
//        });
//
//        $('.preview').on('click', function(){
//            var data = JSON.stringify(win.editor.getContent()),
//                prevWindow,
//                url = 'http://localhost:63342/textEditor/frames/testFrame.html';
//
//                prevWindow = win.editor.previewer(true);
//                setTimeout(function(){
//                    prevWindow.postMessage(data, url);
//                }, 500);
//        });
//
//        $modal_btn.on('click', function(){
//            var data = win.editor.getContent(),
//                container = $('#modal');
//
//            container.html(data);
//        });
//
//        $modal_btn.leanModal();
//    });
//
//
//
//})(jQuery);
