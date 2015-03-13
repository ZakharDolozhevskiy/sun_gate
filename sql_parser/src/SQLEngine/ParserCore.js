define(function (require) {
    "use strict";

    var Pattern = require('./Pattern');

    return {
        /**
         * Parser that parse digit in the passed string
         * @returns {Pattern}
         */
        digit: function () {
            return new Pattern(function (str, pos) {
                var char = str.charAt(pos);

                if (char >= "0" && char <= "9") {
                    return {res: +char, end: pos + 1};
                }
            });
        },
        /**
         * Parser parse string from passed text
         * @param text
         * @returns {Pattern}
         */
        text: function (text) {
            return new Pattern(function (str, pos) {

                if (str.substr(pos, text.length) == text) {
                    return {res: text, end: pos + text.length};
                }
            });
        },
        /**
         * Parser that parse string by passed regular expressions
         * @param regexp
         * @returns {Pattern}
         */
        rgx: function (regexp) {
            return new Pattern(function (str, pos) {
                var exp = regexp.exec(str.slice(pos));

                if (exp && exp.index === 0) {
                    return {res: exp[0], end: pos + exp[0].length};
                }
            });
        },
        /**
         * Parser apply passed pattern and return parsed result and
         * if this pattern match nothing return empty result
         * @param pattern
         * @returns {Pattern}
         */
        opt: function (pattern) {
            return new Pattern(function (str, pos) {
                return pattern.exec(str, pos) || {res: '', end: pos};
            });
        },
        /**
         * Take pattern that parse string if the except pattern couldn't parse it
         * @param pattern
         * @param except
         * @returns {Pattern}
         */
        exc: function(pattern, except) {
            return new Pattern(function(str, pos) {
                return !except.exec(str, pos) && pattern.exec(str, pos);
            });
        },
        /**
         * Return parsed result of the first matching pattern
         * @param patterns
         * @returns {Pattern}
         */
        any: function() {
            var patterns = [].slice.call(arguments);

            return new Pattern(function(str, pos) {
                var i, ln = patterns.length, res;

                for (i = 0; i < ln; i++) {

                    if( res = patterns[i].exec(str, pos) ){
                        return res;
                    }
                }
            });
        },
        /**
         * Apply all passed pattern and return array with parsed result of each patterns
         * @param patterns
         * @returns {Pattern}
         */
        seq: function() {
            var patterns = [].slice.call(arguments);

            return new Pattern(function(str, pos){
                var i, r, end = pos, ln = patterns.length, res = [];

                for (i = 0; i < ln; i++) {
                    r = patterns[i].exec(str, end);
                    if(!r) return;
                    res.push(r.res);
                    end = r.end;
                }

                return {res: res, end: end};
            });
        },
        /**
         * Repeat passed patterns and exclude separator pattern result
         * @param pattern
         * @param separator
         * @returns {Pattern}
         */
        rep: function(pattern, separator) {
            var separated = !separator ? pattern :
                this.seq(separator, pattern).then( function(r){ return r[1]; } );

            return new Pattern(function(str, pos){
                var res = [], end = pos, r = pattern.exec(str, end);

                while (r && r.end > end) {
                    res.push(r.res);
                    end = r.end;
                    r = separated.exec(str, end);
                }
                return { res: res, end: end };
            });
        }
    };

});