(function() {
    "use strict";
    angular.module('DashboardCtrl', []).
        controller('DashboardCtrl', function ($scope, $rootScope, dataBaseApi, relatedTags, categories) {
            $rootScope.title = 'Dashboard';

            dataBaseApi.getFiles().then(function(data) {
                $scope.dataList = data;
                categories.set(
                    [{value:'CAT1'},{value:'CAT2'},{value:'CAT3'}, {value:'CAT4'},{value:'CAT5'},{value:'CAT6'}]
                );
                relatedTags.set(['st1','2222','test3','newTag','myTag','nnsq']);
            })
        });
})();
