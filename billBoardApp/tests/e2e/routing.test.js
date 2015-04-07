describe('page routing', function() {
    "use strict";

    beforeEach(function() {
        browser.get('http://localhost:3000/');
    });

    it('should start with dashboard page',function() {
        browser.getLocationAbsUrl().then(function(url) { expect(url).toBe('/'); });
    });

    it('should redirect to add new note page',function() {
        browser.get('http://localhost:3000/#/new');
        browser.getLocationAbsUrl().then(function(url) { expect(url).toBe('/new'); });
    });

    it('should redirect to dashboard page in otherwise cases',function() {
        browser.get('http://localhost:3000/#/new2');
        browser.getLocationAbsUrl().then(function(url) { expect(url).toBe('/'); });
    });

});
