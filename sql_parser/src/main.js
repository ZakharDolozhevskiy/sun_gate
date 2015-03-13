require.config({
    paths: {
        "db": "../db.json",
        "text": '../bower_components/requirejs-plugins/lib/text',
        "json": '../bower_components/requirejs-plugins/src/json'
    }
});

define(['SQLEngine/Engine'], function(PP) {

    console.log(PP);
});



