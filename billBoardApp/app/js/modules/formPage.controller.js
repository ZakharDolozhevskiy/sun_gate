(function() {
    "use strict";
    angular.module('AddFormCtrl', []).
        controller('AddFormCtrl', function ($scope, $rootScope, dataBaseApi, relatedTags, categories, firebaseApi) {
            var tag;
            $rootScope.title = 'Add new note';
            $scope.showPopUp = false;
            $scope.catOptions = categories.get();
            $scope.reletedTags = [];
            $scope.thisNoteTags = [];
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
                tag = $scope.note.tags;
                // check that add tag isn't duplicate
                if( $scope.thisNoteTags.indexOf(tag) === -1 ) $scope.thisNoteTags.push(tag);
                if( $scope.reletedTags.indexOf(tag) === -1 ) relatedTags.add(tag);
                // clear input field
                $scope.note.tags = '';
            };
            /**
             * Complete new note adding
             */
            $scope.addNewNote = function() {
                /**
                 * Call DB Api and add new note object on it
                 */
                firebaseApi.addNote($scope.note);
                //dataBaseApi.addFiles([$scope.note]);
                $scope.note = {};  $scope.thisNoteTags = [];
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
