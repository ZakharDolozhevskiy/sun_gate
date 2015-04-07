describe('Adding new note', function() {
    "use strict";

    beforeEach(function () {
        browser.get('http://localhost:3000/#new');
    });
    
    it('should render form and buttons on the adding note page',function() {
      var formElems = element.all(by.css('.form-group')),
          btn_submit = element(by.css('.btn-submit')),
          btn_cancel = element(by.css('.btn-cancel'));

        expect(formElems.count()).toBeGreaterThan(5);
        expect(btn_submit).toBeDefined();
        expect(btn_cancel).toBeDefined();
    });

    it('should add new note to application and get greeting message',function() {
        var tagCount;
        // adding test data to note form
        element(by.model('noteTitle')).sendKeys('my note');
        element(by.tagName('option')).click();
        element(by.model('email')).sendKeys('my@mail.ru');
        element(by.model('tagInput')).sendKeys('new tag');
        element(by.css('.add-tag')).click();
        element(by.model('description')).sendKeys('descriptiondescriptiondescription');
        // check that tag have been add in to tag list
        tagCount = element.all(by.css('.tag-list li')).count();
        expect(tagCount).toBe(1);
        // check that after sending form greeting message is shown
        element(by.css('.btn-submit')).click();
        expect( element(by.css('.alert-dismissible')).isDisplayed() )
            .toBeTruthy();
    });

    it('should add new note to dashboard page after creating',function() {
        beforeEach(function () {
            browser.get('http://localhost:3000/');
        });
        expect( element.all(by.css('.alert-dismissible')).count() )
            .toBeGreaterThan(0);
    })
});
