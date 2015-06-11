require.config({
  baseUrl: './',
  paths: {
    text: 'js/vendor/text/text',
    jquery: 'js/vendor/jquery/dist/jquery',
    underscore: 'js/vendor/underscore/underscore',
    backbone: 'js/vendor/backbone/backbone'
  }
});

require([
  'js/views/structure/Todo.view.js',
  'jquery', 'js/router/Todo.router.js'], function(ToDo, $) {

  new ToDo({el: $('.application')});
});

