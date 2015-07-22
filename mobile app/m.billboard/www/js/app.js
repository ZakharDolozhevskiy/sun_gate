angular.module('app', ['ionic', 'app.controllers', 'app.directives', 'app.services', 'ngDropdowns'])

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
        templateUrl: 'templates/menu.html'
      })

      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          menuContent: {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl as vm'
          }
        }
      })

      .state('app.addOne', {
        url: '/addItem',
        views: {
          menuContent: {
            templateUrl: 'templates/add-item.html',
            controller: 'CreateItemCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
  })

  .constant('CATEGORY',
    [
      {
        text: 'avto',
        value: 'avto'
      },
      {
        text: 'computers',
        value: 'computers'
      },
      {
        text: 'devices',
        value: 'devices'
      },
      {
        text: 'education',
        value: 'education'
      },
      {
        text: 'apartment',
        value: 'apartment'
      },
      {
        text: 'other',
        value: 'unknown category'
      }
    ]
  );

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);
