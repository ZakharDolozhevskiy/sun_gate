(function() {
    "use strict";
    var app = angular.module('app');

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
                templateUrl: 'js/modules/noteDetails/note.template.html',
                controller: 'SingleNoteCtrl'
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