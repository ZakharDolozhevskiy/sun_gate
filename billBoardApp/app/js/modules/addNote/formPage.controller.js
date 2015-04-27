(function() {
    "use strict";
    angular.module('AddFormCtrl', []).
        controller('AddFormCtrl', function ($scope, $rootScope, $window, dataBaseApi, relatedTags, options, firebaseApi, title) {
            var tag;
            $rootScope.title = title;
            $rootScope.isDashboard = false;
            $scope.showPopUp = false;
            $scope.catOptions = options;
            $scope.reletedTags = [''];
            $scope.note = {};
            $scope.note.tags = [];
            // waiting for loading and then filter data
            relatedTags.get().$loaded().then(function(res) {
              res.map(function(i) {
                  $scope.reletedTags.push(i.$value);
              })
            });
            /**
             * Add new tag to creating note
             */
            $scope.addTag = function() {
                // find input and read users tag
                tag = $scope.tag;
                // check that add tag isn't duplicate
                if( $scope.note.tags.indexOf(tag) === -1 ) $scope.note.tags.push(tag);
                if( $scope.reletedTags.indexOf(tag) === -1 ) relatedTags.add(tag);
                // clear input field
                $scope.tag = '';
            };
            /**
             * Complete new note adding
             */
            $scope.addNewNote = function() {
                /**
                 * Call DB Api and add new note object on it
                 */
                firebaseApi.addNote($scope.note);
                // if user is offline add new note to local DB too
                if(!$window.navigator.onLine){
                    dataBaseApi.addFiles([$scope.note]);
                }
                $scope.note = {};  $scope.note.tags = [];
                $scope.form.$setUntouched();
                $scope.showPopUp = true;
            };

            $scope.close = function() {
                $scope.showPopUp = false;
            };
            /////////////////////////////////////////////////////////////////////////
            $scope.log = function() {
                dataBaseApi.getFiles().then(function(val) { console.log(val); });
            };
            $scope.clear = function() {
                console.log(dataBaseApi.dropFiles());
            };
        });
})();
