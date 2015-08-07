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

  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        resolve: {
          user: function ($rootScope, $http, $state, URL) {
            // check if user already logged in
            $http.post(URL + '/isLogin')
              .success(function (user) {
                if (user) { $rootScope.user = user; }
                else { $state.go('app.dashboard'); }
              });
          }
        },
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
      })

      .state('app.contactUs', {
        url: '/contactUs',
        views: {
          menuContent: {
            templateUrl: 'templates/contactUs.html',
            controller: function ($scope, $rootScope) {
              $scope.$on('$ionicView.beforeEnter', function () {
                $rootScope.activePage = 'Contact Us';
              });
            }

          }
        }
      })

      .state('app.accountDetails', {
        url: '/accountDetails',
        views: {
          menuContent: {
            templateUrl: 'templates/accountDetails.html',
            controller: 'AccountDetailsCtrl as vm'
          }
        }
      })

      .state('app.login', {
        url: '/login',
        views: {
          menuContent: {
            templateUrl: 'templates/loginPage.html',
            controller: 'LoginCtrl as vm'
          }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');

    $httpProvider.defaults.withCredentials = true;
  })

  .constant('CATEGORY', [
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
  ])
  .constant('URL', 'http://guarded-savannah-1593.herokuapp.com');

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.services', []);
