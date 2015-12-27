const Chance = require('chance').Chance;
const Generator = require('./_Generator');
const AgeValue = require('models/AgeValue');
const chance = new Chance();

/**
 * Generate a random age.
 * Take value in seconds to set delay for generator.
 */
class AgeGenerator extends Generator {
  constructor (delay) {
    super();
    this.intervalID = null;
    this._initGenerator(delay);
  }

  /**
   * Method saves generated value to the database.
   * @param {Number} value - generated value - age
   * @private
   */
  _saveValue (value) {
    AgeValue.create({ age: value, genDate: new Date });
  }

  /**
   * Init data generation
   * @param {Number} delay - set the delay of value generation
   * @private
   */
  _initGenerator (delay) {
    this.intervalID = setInterval(() => { this._saveValue(chance.age()); }, 1000 * delay);
  }

  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    timestamp = timestamp || new Date(0);

    return AgeValue.find().where('genDate').gt(timestamp).limit(count);
  }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = AgeGenerator;
