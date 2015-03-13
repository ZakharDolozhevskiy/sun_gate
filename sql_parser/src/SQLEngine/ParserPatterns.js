define(['./Pattern', './ParserCore'],
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

        var ws = rgx(/\s+/);
        var wso = opt(ws);
        var table = rgx(/[a-z][a-z1-9_]+/i);
        var column = table;

        // patterns
        var tableColumn = seq(
            table, txt('.'), column
        ).then(function(res){
            return {
                table: res[0],
                columns: res[2]
            };
        });

        var columnsList = rep(
            tableColumn, seq( txt(","), wso )
        );

        var selectSection = seq(
            SELECT, ws,
            any(txt("*") , columnsList ),
            ws, FROM, ws, table
        ).then(function(res){
            return {
                select: {
                    columns: (res[2] === "*") ? "*" : res[2],
                    from: res[6]
                }
            };
        });

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

        var joinSection = seq(
            JOIN, ws, table, ws, ON, ws, joinON
        ).then(function(res) {
            return {
                join:{
                    table: res[2],
                    columns: res[6]
                }
            };
        });

        var fullQuery = seq(
            opt(selectSection),
            opt(joinSection)
        ).then(function(res) {
            var r = {};

            if(res[0]) r.select = res[0].select;

            if(res[1]) r.select = res[1].join;

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
            debugger;
            var result = fullQuery.exec(str, 0);

            return (result) ? result.res : 'Incorrect query\'s string, check and try again';
        };

        return SQL_parser;

    }
);
