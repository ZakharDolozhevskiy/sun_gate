"use strict";

var SQL_Engine_Page = require('./SQL_Engine_Page');

describe('e2e testing', function() {
    var page;

    beforeEach(function() {
        page = new SQL_Engine_Page();
    });

    it('should generate correct tables\'s schema', function() {
        var tables = element.all(by.css('.schema_box'));
        var columns = element.all(by.css('.schema_item'));

        setTimeout(function () {
            expect(tables.count()).toBe(4);
            expect(columns.count()).toBe(10);
        }, 2000);
    });

    it('should add error class if query is incorrect', function() {
        page.query('qwerty1234');
        expect(page.inputClass).toMatch('has-error');
    });

    it('should print result from entry query', function() {
        page.query('* FROM actor');
        expect(page.t_rows.count()).toBe(63);
    });

    it('should print correct result from query with JOIN predicate', function() {

        page.query('movie.title, actor.name FROM movie' +
        'JOIN actor_to_movie ON movie.id = actor_to_movie.movieID' +
        'JOIN actor ON actor_to_movie.actorID = actor.id');

        setTimeout(function () {
            expect(page.t_rows.get(0).getText()).toBe('title');
            expect(page.t_rows.get(1).getText()).toBe('name');
        }, 2000);

    });

    it('should print correct result from query with WHERE predicate', function() {

        page.query('actor.name, movie.title FROM movie' +
        'JOIN actor_to_movie ON movie.id = actor_to_movie.movieID' +
        'JOIN actor ON actor_to_movie.actorID = actor.id' +
        'WHERE actor.name <> Quinton \'Rampage\' Jackson');

        setTimeout(function () {
            expect(page.t_rows.count()).toBe(20);
            expect(page.t_rows.get(0).getText()).toBe('title');
            expect(page.t_rows.get(1).getText()).toBe('name');
        }, 2000);
    });
});
