const SecondsGenerator = require('./SecondsGenerator');
const CurrencyGenerator = require('./CurrencyGenerator');
const GenderGenerator = require('./GenderGenerator');
const AgeGenerator = require('./AgeGenerator');
const constants = require('../../constants/index');

// Module exports generators instances
module.exports = {
  g_seconds: new SecondsGenerator(constants.GENERATORS_DELAY),
  g_currency: new CurrencyGenerator(constants.GENERATORS_DELAY),
  g_gender: new GenderGenerator(constants.GENERATORS_DELAY),
  g_age: new AgeGenerator(constants.GENERATORS_DELAY)
};
