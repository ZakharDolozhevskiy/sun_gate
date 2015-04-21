describe('application routing', function() {
    "use strict";
    var $route, $location, $rootScope, $httpBackend, $firebaseApi;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        $route = $injector.get('$route');
        $location = $injector.get('$location');
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should redirect to dashboard and define self controller', function() {
        $httpBackend.expectGET('../templates/dashboard.template.html').respond(200);
        $location.path('/');
        $rootScope.$digest();

        expect($route.current.controller).toBe('DashboardCtrl');
        expect($route.current.templateUrl).toBe('../templates/dashboard.template.html');
    });

    it('should redirect to note creating page and define self controller', function() {
        $httpBackend.expectGET('../templates/addNewForm.template.html').respond(200);
        $location.path('/new');
        $rootScope.$digest();

        expect($route.current.controller).toBe('AddFormCtrl');
        expect($route.current.templateUrl).toBe('../templates/addNewForm.template.html');
    });

    it('in otherwise case should redirect to dashboard', function() {
        $httpBackend.expectGET('../templates/dashboard.template.html').respond(200);
        $location.path('/abc');
        $rootScope.$digest();

        expect($route.current.controller).toBe('DashboardCtrl');
        expect($route.current.templateUrl).toBe('../templates/dashboard.template.html');
    })
});
