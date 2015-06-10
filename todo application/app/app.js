require.config({
  baseUrl: './',
  paths: {
    text: 'js/vendor/text/text',
    jquery: 'js/vendor/jquery/dist/jquery',
    underscore: 'js/vendor/underscore/underscore',
    backbone: 'js/vendor/backbone/backbone'
  }
});

require(['js/view/Todo.view.js', 'js/router/Todo.router.js'], function(ToDo) {
  new ToDo();
});

