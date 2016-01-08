const Chance = require('chance').Chance;
const Promise = require('es6-promise').Promise;
const Generator = require('./_Generator');
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
      this._saveValue(chance.dollar({ max: 10000 }));
    }, 1000 * delay);
  }

  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    const queries = [
      new Promise(this.getMaxValue),
      new Promise(this.getAvgValue),
      new Promise(this.getMinValue)
    ];

    return Promise.all(queries);
  }

  getMaxValue (resolve, reject) {
    CurrencyValue
      .find().sort({ currency: -1 }).select('currency')
      .exec((err, data) => err ? reject() : resolve(['MAX', +data[0].currency.slice(1)]));
  }

  getMinValue (resolve, reject) {
    CurrencyValue
      .find().sort({ currency: 1 }).select('currency')
      .exec((err, data) => err ? reject() : resolve(['MIN', +data[0].currency.slice(1)]));
  }

  getAvgValue (resolve, reject) {
    function calcAverage (data) {
      return +(data.reduce((res, el) => res + +el.currency.slice(1), 0) / data.length).toFixed(2);
    }

    CurrencyValue.find('currency').select('currency')
      .exec((err, data) => err ? reject() : resolve(['AVG', calcAverage(data)]));
  }
  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = CurrencyGenerator;
