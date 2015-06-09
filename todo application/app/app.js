require.config({
  baseUrl: './',
  paths: {
    text: 'vendor/text/text',
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone'
  }
});

require(['view/TodoView.js'], function(ToDo) {
  new ToDo();
});

