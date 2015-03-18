describe('e2e testing', function() {
    beforeEach(function() {
        global.isAngularSite(false);
    });
    beforeEach(function() {
        browser.get('http://localhost:63342/CDP/src/index.html');
    });

    it('should except query', function() {
        element(by.css('.query_field')).sendKeys('* FROM actor');
        element(by.css('.go_btn')).click();

        var res = element.all(by.css('.table tr'));
        expect(res.count()).toEqual(63);
    });
});
