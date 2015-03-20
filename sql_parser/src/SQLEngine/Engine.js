define(['./ParserPatterns','_'],function (SQL_Parser, _) {
    "use strict";
    var parser = new SQL_Parser();
    /**
     * Take query string and convert it to object with key words
     * @constructor
     */
    var Engine = function(){};
    /**
     * Get query string and return structured data from DB
     */
    Engine.prototype.execute = function(str) {
        var parserRes = parser.parse(str);

        return (parserRes) ? this.selectData(parserRes) : false;
    };
    /**
     * Comporators for matching with query's string
     */
    Engine.prototype.comparation = {
        '>=': function(l_exp, r_exp) {
            return l_exp >= r_exp;
        },
        '<=': function(l_exp, r_exp) {
            return l_exp <= r_exp;
        },
        '<>': function(l_exp, r_exp) {
            return l_exp !== r_exp;
        },
        '<': function(l_exp, r_exp) {
            return l_exp < r_exp;
        },
        '>': function(l_exp, r_exp) {
            return l_exp > r_exp;
        },
        '=': function(l_exp, r_exp) {
            return l_exp === r_exp;
        }
    };
    /**
     * Parse expressions from WHERE section
     * @param exp string
     * @returns {*}
     */
    Engine.prototype.parseExp = function(exp) {
      var _o = {'false':false, 'true':true}, _l = exp.toLowerCase && exp.toLowerCase();

        if(exp === 'false' || exp === 'true') {
            return _o[exp];
        } else if (_l === 'null'){
            return null;
        }
        // if exp is number return it
        return (!isNaN(exp)) ? +exp : exp;
    };
    /**
     * Get parsed query and make data selection from DB
     */
    Engine.prototype.selectData = function(query) {
        var joinResult = null,
            result = null,
            toSelect = query.select.columns,
            selectFrom = query.select.from;

        if(query.join) joinResult = this.join(selectFrom, query.join);

        result = (joinResult) ? this.select(joinResult, toSelect) :
                                this.select(sql_db.getTable(selectFrom), toSelect);

        if(query.where) result = this.where(result, query.where);

        return result;
    };
    /**
     * Join added tables with, starting at first table after FROM section
     * @param initTable alias of first table in query , after FROM predicate
     * @param toJoin    array with join options
     */
    Engine.prototype.join = function(initTable, toJoin) {
        var result_t, r_table, l_predict, r_predict, tmp;

        _.forEach(toJoin, function(opt) {
            result_t = (result_t) ? result_t : sql_db.getTable(initTable);
            r_table = sql_db.getTable(opt.table);
            l_predict = opt.columns.left.column;
            r_predict = opt.columns.right.column;
            tmp = [];

            _.forEach(result_t, function(tLeft) {
                _.forEach(r_table, function(tRight) {
                    if(tLeft[l_predict] !== tRight[r_predict] ) return;
                    tmp.push( _.merge({}, tLeft, tRight) );
                });
            });
            result_t = tmp;
        });

        return result_t;
    };
    Engine.prototype.where = function(table, opt) {
        var t, lExp, rExp, comp = opt.comparator;

        t = _.filter(table, function(o) {
            lExp = (opt.left.column) ? o[opt.left.column] : opt.left;
            rExp = (opt.right.column) ? o[opt.right.column] : opt.right;

            // parse expressions and identify true/false , null, number and string

            return this.comparation[comp](
                this.parseExp(lExp),
                this.parseExp(rExp)
            );

        }.bind(this));

        return t;
    };
    /**
     * Make selection by columns from table
     * @param table
     * @param columns
     * @returns {*}
     */
    Engine.prototype.select = function(table, columns) {
        var ALL = "*", t;

        if(columns === ALL) return table;

        return _.map(table, function(n) {
            t = {};
            _.forEach(columns, function(o) {
                t[o.column] = n[o.column];
            });
            return t;
        });
    };

    /**
     * Describe SQL database
     * @constructor
     */
    var SQL_DB = function(){};

    /**
     * Get JSON and init database with this data
     * @param data
     * @returns {*}
     */
    SQL_DB.prototype.setDB = function(data){
        this.DB = data;
        return this.DB;
    };

    SQL_DB.prototype.getDB = function(){
        return this.DB;
    };

    SQL_DB.prototype.getTable = function(opt){
        if(this.DB[opt]) {
            return this.DB[opt];
        }
            return new Error('This table doesn\'t exist');
    };
    var engine = new Engine();
    var sql_db = new SQL_DB();

    return {
        Engine : engine,
        SQL_DB : sql_db
    };
});