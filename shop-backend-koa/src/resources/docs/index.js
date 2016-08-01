const docs = require('koa-docs');

module.exports = docs.get('/docs', {
  title: 'Pet Store API',
  version: '1.0.0',

  theme: 'simplex',    // Specify a theme from www.bootswatch.com;
                       // default is un-themed bootstrap

  routeHandlers: 'disabled',  // Hide the route implementation code from docs

  groups: [
    //  { groupName: 'Pets', routes: [/*  ... route specs ...  */] },
    //  { groupName: 'Store', routes: [/*  ... route specs ...  */] }
  ]
});
