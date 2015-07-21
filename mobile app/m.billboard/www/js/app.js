angular.module('app', ['ionic', 'app.controllers', 'app.directives'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'DashboardCtrl'
      })

      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          menuContent: {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
  });

angular.module('app.controllers', []);
angular.module('app.directives', []);
