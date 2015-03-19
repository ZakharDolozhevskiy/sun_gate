({
    paths: {
        'text': '../bower_components/requirejs-plugins/lib/text',
        'json':'../bower_components/requirejs-plugins/src/json',
        '_': '../bower_components/lodash/lodash.min'
    },

    mainConfigFile: 'src/main.js',
    baseUrl : "src",
    name: "main",
    out: "builds/main.js",
    removeCombined: true
})
