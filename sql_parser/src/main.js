require.config({
    paths: {
        "text": '../bower_components/requirejs-plugins/lib/text',
        "json": '../bower_components/requirejs-plugins/src/json',
        "_": '../bower_components/lodash/lodash.min',
        "$": '../bower_components/jquery/dist/jquery.min'
    }
});

define(['App','../bower_components/jquery/dist/jquery.min'], function(App, $) {
    "use strict";
    new App(
        $('.table'),
        $('.form-control'),
        $('.init_btn')
    );
});



