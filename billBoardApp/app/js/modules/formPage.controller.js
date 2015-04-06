(function() {
    "use strict";
    angular.module('AddFormCtrl', []).
        controller('AddFormCtrl', function ($scope, $rootScope, dataBaseApi) {
            $rootScope.title = 'Add new note';
            $scope.showPopUp = false;
            $scope.catOptions = [{value:'CAT1'},{value:'CAT2'},{value:'CAT3'},
                                 {value:'CAT4'},{value:'CAT5'},{value:'CAT6'}];
            $scope.reletedTags = ['st1','2222','test3','newTag','myTag','nnsq'];
            $scope.thisNoteTags = [];
            var addTagInput = angular.element('.related-tags'),
                newNote = {};
            /**
             * Add new tag to creating note
             */
            $scope.addTag = function() {
                // find input and read users tag
                var val = addTagInput.val();
                // check that add tag isn't duplicate
                if( $scope.thisNoteTags.indexOf(val) === -1 ) $scope.thisNoteTags.push(val);
                if( $scope.reletedTags.indexOf(val) === -1 ) $scope.reletedTags.push(val);
                // clear input field
                addTagInput.val('');
            };
            /**
             * Complete new note adding
             */
            $scope.addNewNote = function() {
                /**
                 * add data form data to object that describe new note
                 */
                newNote.title = $scope.noteTitle;
                newNote.category = $scope.selectCat;
                newNote.email = $scope.email;
                newNote.tags = $scope.thisNoteTags;
                newNote.description = $scope.description;
                /**
                 * Call DB Api and add new note object on it
                 */
                dataBaseApi.addFiles([newNote]);
                $scope.showPopUp = true;
            };

            $scope.close = function() {
                $scope.showPopUp = false;
            };
            //////////////////////////////////////////////////////////////
            $scope.log = function() {
                dataBaseApi.getFiles().then(function(val) { console.log(val); });
            };
            $scope.clear = function() {
                console.log(dataBaseApi.dropFiles());
            };
        });
})();
