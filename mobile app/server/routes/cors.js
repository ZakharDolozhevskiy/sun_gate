module.exports = function (app) {
  app
    .all('*', function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Credentials', false);
      res.header('Access-Control-Max-Age', '86400');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
      next();
    })
    .options('*', function(req, res) {
      res.send(200);
    });
};