require.config({
    baseUrl: './',

    paths: {
        "text": '../bower_components/requirejs-plugins/lib/text',
        "json": '../bower_components/requirejs-plugins/src/json',
        "jQuery": '../bower_components/jquery/dist/jquery',
        "_": '../bower_components/lodash/lodash.min'
    }
});

define(['jQuery','./App'], function(jQuery, App) {
    "use strict";
    new App(
        $('.table'),
        $('.query_form')
    );
});



