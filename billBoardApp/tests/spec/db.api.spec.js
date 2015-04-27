describe('Data base api service', function() {
    "use strict";

    var DB_Api;

    beforeEach(module('app'));
    beforeEach(inject(function($injector) {
        DB_Api = $injector.get('dataBaseApi');
    }));

    it('should added data into IndexedDB', function() {
      var testData = [{'test':'test'},{'test2':'test2'}];

        DB_Api.addFiles(testData);
        DB_Api.getFiles().then(function(result) {
            expect(result).toEqual(testData);
        });
    });

    it('should delete all data from IndexedDB', function() {
        var testData = [{'test':'test'},{'test2':'test2'}];

        DB_Api.addFiles(testData);
        DB_Api.getFiles().then(function(result) {
            expect(result.length).toBeGreaterThan(0);
        });

        DB_Api.dropFiles();

        DB_Api.getFiles().then(function(result) {
            expect(result.length).toBe(0);
        });

    });

    it('should return all data from database', function() {
        var testData = [{'test':'test'},{'test2':'test2'},{'test3':'test3'},{'test4':'test4'},{'test5':'test5'}];

        DB_Api.addFiles(testData);
        DB_Api.getFiles().then(function(result) {
            expect(result).toEqual(testData);
        });
    });
});

