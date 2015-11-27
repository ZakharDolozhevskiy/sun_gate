describe('basic features test', function() {

    var inputs, submit_btn;

    beforeEach(function () {
        browser.get('http://localhost:3000/');
    });
    it('should render form with two inputs and submit button', function() {

        inputs = element.all(by.css('#searchBox input'));
        submit_btn = element(by.css('#searchBox button'));

        expect(inputs.count()).toEqual(2);
        expect(submit_btn).toBeDefined();
    });

    it('should render list with venues data after search query', function() {
        var result;
        element(by.model('placeQuery')).sendKeys('kiev');
        submit_btn.click();
        result = element.all(by.css('.animate-repeat')).count();

        result.then(function (result) {
            expect( result > 0).toBe(true);
        });
    });
});
