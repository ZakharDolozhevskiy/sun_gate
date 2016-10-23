const peg = require("pegjs");

const grammar = `
  start =
      comment? comma:comma comment?
        { return comma }

  comment =
      _? ";;" [A-Za-z0-9 ]+ _?

  comma =
      left:additive ',' right:comma
        { return {tag: ',', left:left, right:right } }
    / additive

  additive =
      left:multiplicative "+" right:additive
          { return {tag: "+", left:left, right:right}; }
    / multiplicative

  multiplicative =
      left:primary "*" right:multiplicative
          { return {tag: "*", left:left, right:right}; }
    / primary

  primary =
      _? integer:integer _?
        { return integer }
    / quotes

  quotes =
      _? "'" additive:additive
        { return additive }
    / _? "(" _? additive:additive _? ")" _?
        { return additive }

  integer =
      digits:[0-9]+
        { return parseInt(digits.join(""), 10); }

  _ =
      [ \\t\\n\\r]*
`;

const parse = peg.generate(grammar).parse;

console.log(
 parse(`
  ;; start line should be ignored
  '10 + (2 * (5 + 5)) + '10 + (2 * (5 + 5))
  ;; end line should be ignored
 `)
);