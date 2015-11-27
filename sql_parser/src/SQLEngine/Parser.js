define(function () {
    "use strict";
    /**
     * Class that describe patterns
     * @param exec
     * function that takes pattern
     * @constructor
     */
    var Pattern = function (exec) {
        this.exec = exec;

        this.then = function(transform) {

            return new Pattern(function(str, pos) {
                var r = exec(str, pos);

                return r && {res: transform(r.res), end: r.end};
            });
        };
    };

    return Pattern;
});