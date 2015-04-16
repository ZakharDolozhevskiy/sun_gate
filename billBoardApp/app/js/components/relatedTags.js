(function() {
    "use strict";
    angular.module('app')
        .factory('relatedTags', function(firebaseApi) {
            var dataHolder = [],
                getter = function() {
                    return firebaseApi.getTags();
                },
                adder = function(x) {
                    firebaseApi.addTag(x);
                },
                setter = function(z) {
                    dataHolder = z;
                };
            return {
                get: getter,
                add: adder,
                set: setter
            }
        });
})();

