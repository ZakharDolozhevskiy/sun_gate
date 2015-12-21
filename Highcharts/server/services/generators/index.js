const SecondsGenerator = require('./SecondsGenerator');
const CurrencyGenerator = require('./CurrencyGenerator');
const GenderGenerator = require('./GenderGenerator');
const AgeGenerator = require('./AgeGenerator');

const config = require('config');
const delay = config.get('generators:delay');

// Module exports generators instances
module.exports = {
  seconds: new SecondsGenerator(delay),
  currencies: new CurrencyGenerator(delay),
  genders: new GenderGenerator(delay),
  ages: new AgeGenerator(delay)
};
