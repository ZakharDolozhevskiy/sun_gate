define(['./ParserPatterns','json!../../db.json'],function (SQL_Parser, DB) {

    /**
     * Take query string and convert it to object with key words
     * @constructor
     */
    var Engine = function(){};
    /**
     * Describe SQL database
     * @constructor
     */
    var SQL_DB = function(){};

    return {
        Engine : Engine,
        SQL_DB : SQL_DB,
        DB: DB
    }
});