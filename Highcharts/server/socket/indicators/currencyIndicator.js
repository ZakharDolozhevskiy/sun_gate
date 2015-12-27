const generators = require('services/generators');
const Indicator = require('./_Indicator');
const GENERATOR_NAME = 'currencies';

const options = {
  generator_name : GENERATOR_NAME,
  generator : generators[GENERATOR_NAME]
};

module.exports = function (websocket) { new Indicator(websocket, options); };

