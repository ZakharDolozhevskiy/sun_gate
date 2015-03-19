"use strict";

var SQL_Engine_Page = function () {
    global.isAngularSite(false);
    browser.get('http://localhost:63342/sql_parser/src/index.html');
};

SQL_Engine_Page.prototype = Object.create({}, {
    input: {
        get: function () {
            return element(by.css('.query_field'));
        }
    },
    inputClass: {
        get: function () {
            return element(by.css('.input-group')).getAttribute('class');
        }
    },
    submit: {
        get: function () {
            return element(by.css('.go_btn'));
        }
    },
    t_rows: {
        get: function () {
            return element.all(by.css('.table tr'));
        }
    },
    query: {
        value: function (key) {
            this.input.sendKeys(key);
            this.submit.click();
        }
    }
});

module.exports = SQL_Engine_Page;