(function() {
    "use strict";
    var app = angular.module('app');

    app.run(function($templateCache) {
        $templateCache.put('noteItem.html', '<div class="note-wrapper note-align">\n    <h3>{{item.title}}</h3>\n    <span class="category label label-success">{{item.category}}</span>\n    <span class="email label label-info">{{item.email}}</span>\n    <h5>Releated tegs:</h5>\n    <ul class="tags">\n        <li class="relatedTags" ng-repeat="tag in item.tags">{{tag}}</li>\n    </ul>\n    <p>{{item.description}}</p>\n</div>')
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url:'/dashboard',
                templateUrl: 'js/modules/dashboard/dashboard.template.html',
                controller: 'DashboardCtrl',
                controllerAs: 'ctrl',
                resolve: {
                    title: function() { return 'Dashboard' }
                }
            })
            .state('dashboard.note', {
                url:'/:id',
                templateUrl: 'noteItem.html',
                controller: function($scope, $stateParams, firebaseApi, $window) {

                    var getItem = function (data, id) {
                        var result;
                        angular.forEach(data, function (item) {
                            if(item.$id === id) result = item;
                        });
                        return result;
                    };

                    if(!$window.navigator.onLine) {
                        dataBaseApi.getFiles().then(function(result) {
                            $scope.dataList = result;
                        })
                    }

                    if($scope.dataList.length === 0) {
                        firebaseApi.getNotes().$loaded().then(function(response) {
                            $scope.dataList = response;
                            $scope.item = getItem($scope.dataList, $stateParams.id);
                        });
                    } else {
                        $scope.item = getItem($scope.dataList, $stateParams.id);
                    }
                }
            })
            .state('newNote', {
                url:'/addNewNote',
                templateUrl: 'js/modules/addNote/addNewForm.template.html',
                controller: 'AddFormCtrl',
                resolve: {
                    title: function() {
                        return 'Add new note'
                    }
                }
            });
    });

    app.constant('options', ["cars","apartment","mobile device","tablet","rent","other"]);

})();

