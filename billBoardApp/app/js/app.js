(function() {
    "use strict";
    var app = angular.module('app',['ngRoute', 'DashboardCtrl', 'AddFormCtrl']);

    app.config(function ($routeProvider) {
        $routeProvider.
          when('/new',{
            templateUrl: '../templates/addNewForm.template.html',
            controller: 'AddFormCtrl'
          }).
          when('/',{
            templateUrl: '../templates/dashboard.template.html',
            controller: 'DashboardCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
    })
})();
