const Chance = require('chance').Chance;
const Generator = require('./Generator');
const chance = new Chance();

/**
 * Generate a random gender male/female.
 * Take value in seconds to set delay for generator.
 */
class GenderGenerator extends Generator {
  constructor (delay) {
    super(delay);
    // Temporary storage for data saving.
    this.storage = [];
    this.intervalID = null;
  }

  /**
   * Method saves generated value
   * @param {String} value - generated value - random gender.
   * @private
   */
  _saveValue (value) { this.storage.push(value); }

  /**
   * Init data generation
   * @param {Number} delay - set the delay of value generation
   * @private
   */
  _initGenerator (delay) {
    this.intervalID = setInterval(() => { this._saveValue(chance.gender()); }, 1000 * delay);
  }

  /**
   * Return generated value
   * @returns {String} - values from storage
   */
  getValue () { return this.storage[this.storage.length - 1]; }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = GenderGenerator;
