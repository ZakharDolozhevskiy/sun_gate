const Chance = require('chance').Chance;
const Generator = require('./_Generator');
const GenderValue = require('models/GenderValue');
const chance = new Chance();

/**
 * Generate a random gender male/female.
 * Take value in seconds to set delay for generator.
 */
class GenderGenerator extends Generator {
  constructor (delay) {
    super();
    this.intervalID = null;
    this._initGenerator(delay);
  }

  /**
   * Method saves generated value
   * @param {String} value - generated value - random gender.
   * @private
   */
  _saveValue (value) {
    GenderValue.create({ gender: value, genDate: new Date });
  }

  /**
   * Init data generation
   * @param {Number} delay - set the delay of value generation
   * @private
   */
  _initGenerator (delay) {
    this.intervalID = setInterval(() => { this._saveValue(chance.gender()); }, 1000 * delay);
  }

  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    const queries = [
      new Promise((resolve, reject) =>  this.getValuesCount(resolve, reject, 'Male')),
      new Promise((resolve, reject) =>  this.getValuesCount(resolve, reject, 'Female'))
    ];

    return Promise.all(queries);
  }

  getValuesCount (resolve, reject, key) {
    return GenderValue.find({ 'gender' : key }).count().exec((err, data) => err ? reject() : resolve([key, data]));
  }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = GenderGenerator;
