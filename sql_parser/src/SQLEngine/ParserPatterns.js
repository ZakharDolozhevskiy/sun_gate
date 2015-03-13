define(['./Parser', './ParserCore'],
    function(Parser, Core) {
        "use strict";
        var txt = Core.text;
        var rgx = Core.rgx;
        var opt = Core.opt;
        var exc = Core.exc;
        var any = Core.any;
        var seq = Core.seq;
        var rep = Core.rep.bind(Core);

        // key words
        var SELECT = txt('SELECT');
        var FROM = txt('FROM');
        var JOIN = txt('JOIN');
        var ON = txt('ON');
        var WHERE = txt('WHERE');

        var bool = rgx(/[true|flase]/);
        var num = rgx(/[1-9]+/);
        var nul = rgx(/null/i);
        var str = rgx(/\w+/);
        var ws = rgx(/\s+/);
        var wso = opt(ws);
        var table = rgx(/[a-z][a-z1-9_]+/i);
        var column = table;

        /**
         * Main parser's patterns
         */

        // table with column
        var tableColumn = seq(
            table, txt('.'), column
        ).then(function(res){
            return {
                table: res[0],
                column: res[2]
            };
        });

        // list of table.column
        var columnsList = rep(
            tableColumn, seq( txt(","), wso )
        );

        // SELECT section
        var selectSection = seq(
            SELECT, ws,
            any(txt("*"), columnsList),
            ws, FROM, ws, table
        ).then(function(res){
            return {
                select: {
                    columns: (res[2] === "*") ? "*" : res[2],
                    from: res[6]
                }
            };
        });

        // Join operator's expression
        var joinON = seq(
            tableColumn, wso,
            txt("="), wso,
            tableColumn
        ).then(function(res) {
            return {
                left: res[0],
                right: res[4]
            };
        });

        // JOIN section
        var joinSection = seq(
            JOIN, ws, table, ws, ON, ws, joinON
        ).then(function(res) {
            return {
                table: res[2],
                columns: res[6]
            };
        });

        // Comparison value
        var val = any(
            tableColumn,
            num,
            nul,
            str,
            bool
        );

        // WHERE
        var whereComprasion = seq(
            val, wso,
            any(
                txt('LIKE'),
                txt('>='),
                txt('<='),
                txt('!='),
                txt('<>'),
                txt('<'),
                txt('>'),
                txt('=')
            ),
            wso, val
        ).then(function (res) {
           return {
               left: res[0],
               right: res[4],
               comparator: res[2]
           }
        });

        // WHERE section
        var whereSection = seq(
            WHERE, ws, whereComprasion
        ).then(function(res) {
            return res[2];
        });

        // Resulted query's pattern
        var fullQuery = seq(
            opt(selectSection), wso,
            opt(
                rep(joinSection, ws)
            ), wso,
            opt(whereSection)
        ).then(function(res) {

            var r = {};

            if (res[0]) r.select = res[0].select;

            if (res[2] && res[2].length) r.join = res[2];

            if (res[4]) r.where = res[4];

            return r;
        });
        /**
         * SQL_parser
         * @constructor
         */
        function SQL_parser() {}

        /**
         * Transform string to SQL query
          * @param str
         */
        SQL_parser.prototype.parse = function(str){

            var result = fullQuery.exec(str, 0);

            return (result) ? result.res : 'Incorrect query\'s string, check and try again';
        };

        return SQL_parser;

    }
);
