define(['./SQLEngine/Engine', '_'], function (modules, _) {
    "use strict";
    /**
     * Describe application
     * @constructor
     */
    var App = function($cont, $form) {
        this.engine = modules.Engine;
        this.sql_db = modules.SQL_DB;

        this.initView($cont, $form);
        this.loadDB();
    };

    App.prototype.parseQuery = function(str) {
        return this.engine.execute(str);
    };

    App.prototype.loadDB = function() {
        $.ajax({
            url: "../db.json"
        }).done(function (data) {
            this.sql_db.setDB(data);
            this.printTableLable(Object.keys(data));
        }.bind(this))
    };

    App.prototype.render = function($cont, data) {
        var template = _.template($( ".template").html());
        // get columns name and create single object with it
        data.unshift({col_name: Object.keys(data[0])});
        $cont.empty();
        $cont.append(template(data));
    };

    App.prototype.printTableLable = function (keys) {
        var template = _.template($( ".t_lable").html()),
            $holder = $('.lable_box');
        debugger;
        $holder.empty();
        $holder.append(template(keys));

    };

    App.prototype.initView = function($cont, $form) {
        var val, data, $input = $form.find('.form-control');

        _.templateSettings.variable = "rc";

        $('form').on('submit', function() {
            val = $input.val();
            data = this.parseQuery(val);

            data ? this.render($cont, data) : $input.parent().addClass('has-error');
        }.bind(this));

        $('body').on('click', function() {
            $input.parent().removeClass('has-error')
        });
    };

    return App;
});