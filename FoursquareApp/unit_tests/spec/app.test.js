describe('app', function () {
    "use strict";
    var $controller,
        foursquareApi,
        appConfig,
        $httpBackend,
        app;

    beforeEach(app = module('foursquareApp'));
    beforeEach(inject(function($injector){
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        foursquareApi = $injector.get('foursquareApi');
        appConfig = $injector.get('appConfig');

    }));

    it('application module should be defined', function () {
        expect(app).toBeDefined();
    });

    describe('request to foursquare server with adding param', function () {
        var $scope, controller;

        beforeEach(function(){
            $scope = {};
            controller = $controller('mainCtrl', { $scope: $scope, foursquareApi:foursquareApi});
        });

        it('should add place param into placeQuery variable', function() {
            $scope.placeQuery = 'kiev';
            $scope.catQuery = 'cinema';

            expect($scope.placeQuery).toEqual('kiev');
            expect($scope.catQuery).toEqual('cinema');
        });

        it('should send request with params and get correct response', function() {
            var fakeResponse = {"response":{"venues":[{"id":"54f9f74f498e1db95229ad5b","name":"KOKO bar"},{"id":"54f9f74f498e1db95229ad5b","name":"KOKO2 bar"}]}};

            $scope.placeQuery = 'kiev';
            $scope.catQuery = 'bar';


            $httpBackend.whenJSONP(appConfig.api.baseUrl + '?callback=JSON_CALLBACK' + '&client_id=' + appConfig.api.clientId +
                '&client_secret=' + appConfig.api.clientSecret + '&near=kiev&query=bar' +
                '&v=' + appConfig.api.version).respond(fakeResponse, 'success');

            $scope.search();

            $httpBackend.flush();

            expect($scope.places).toEqual(jasmine.any(Array));
        });
    });

});
