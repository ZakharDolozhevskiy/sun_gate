const Chance = require('chance').Chance;
const Generator = require('./Generator');
const CurrencyValue = require('models/CurrencyValue');
const chance = new Chance();

/**
 * Generate a random currency.
 * Take value in seconds to set delay for generator.
 */
class CurrencyGenerator extends Generator {
  constructor (delay) {
    super();
    this.intervalID = null;

    this._initGenerator(delay);
  }

  /**
   * Method saves generated value
   * @param {String} value - generated value - random currency.
   * @private
   */
  _saveValue (value) {
    CurrencyValue.create({ currency: value, genDate: new Date });
  }

  /**
   * Init data generation
   * @param {Number} delay - set the delay of value generation
   * @private
   */
  _initGenerator (delay) {
    this.intervalID = setInterval(() => {
      this._saveValue(chance.dollar());
    }, 1000 * delay);
  }

  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    timestamp = timestamp || new Date(0);

    return CurrencyValue.find().where('currency').exists().where('genDate').gt(timestamp).limit(count);
  }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = CurrencyGenerator;
