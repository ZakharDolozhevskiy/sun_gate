define(['$', './SQLEngine/Engine', 'json!../db.json'], function ($, modules, DB) {
    "use strict";
    /**
     * Describe application
     * @constructor
     */
    var App = function($cont, $input, $btn) {
        this.engine = modules.Engine;
        this.sql_db = modules.SQL_DB;
        this.sql_db.setDB(DB);
        // init view
        this.initView($cont, $input, $btn);
    };

    App.prototype.parseQuery = function(str) {
        return this.engine.execute(str);
    };

    App.prototype.loadDB = function() {

    };

    App.prototype.render = function($cont, data) {
        $cont.append(data);
    };

    App.prototype.initView = function($cont, $input, $btn) {
        // add query submit listener
        $btn.on('click', function() {
          var val = $input.val(),
              data = this.parseQuery(val);

          if(data) {
              this.render($cont, data);
          }
        }.bind(this));
    };

    return App;
});