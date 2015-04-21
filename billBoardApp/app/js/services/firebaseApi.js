(function() {
    "use strict";
    angular.module('app')
        .service('firebaseApi', function($firebaseArray) {
            var refNote = null, refTags = null, refCat = null,
                instanceNote, instanceTags, instanceCat,
                getNotes = function() {
                    return instanceNote = instanceNote ? instanceNote : $firebaseArray(refNote);
                },

                getCategories = function() {
                    return instanceCat = instanceCat ? instanceCat : $firebaseArray(refCat);
                },

                getTags = function() {
                    return instanceTags = instanceTags ? instanceTags : $firebaseArray(refTags);
                },

                addTag = function(tag) {
                    instanceTags = instanceTags ? instanceTags : $firebaseArray(refTags);
                    return instanceTags.$add(tag);
                },

                addNote = function(data) {
                    instanceNote = instanceNote ? instanceNote : $firebaseArray(refNote);
                    return instanceNote.$add(data);
                };

            refNote = refNote || new Firebase("https://billboardapp.firebaseio.com/notes");
            refTags = refTags || new Firebase("https://billboardapp.firebaseio.com/tags");
            refCat  = refCat || new Firebase("https://billboardapp.firebaseio.com/Categories");

            return  {
                getNotes: getNotes,
                getTags: getTags,
                addTag: addTag,
                getCategories: getCategories,
                addNote: addNote
            };
        });
})();
