const Chance = require('chance').Chance;
const Generator = require('./_Generator');
const SecondsValue = require('models/SecondsValue');
const chance = new Chance();

/**
 * Generate a random seconds value
 * Take value in second to set delay for generator.
 */
class SecondsGenerator extends Generator {
  constructor (delay) {
    super();
    this.intervalID = null;
    this._initGenerator(delay);
  }

  /**
   * Method saves generated value
   * @param {Number} value - generated number - seconds
   * @private
   */
  _saveValue (value) {
    SecondsValue.create({ sec: value, genDate: new Date });
  }

  /**
   * Init data generation
   * @param {Number} delay - set the delay of value generation
   * @private
   */
  _initGenerator (delay) {
    this.intervalID = setInterval(() => { this._saveValue(chance.second()); }, 1000 * delay);
  }

  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    timestamp = timestamp || new Date(0);

    return SecondsValue.find().where('genDate').gt(timestamp).limit(count);
  }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = SecondsGenerator;
