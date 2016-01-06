const Chance = require('chance').Chance;
const Promise = require('es6-promise').Promise;
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
    const reduce = function (key, val) { return val.length; };
    const map = function () {
      if (this.age < 20) emit('< 20', 1);
      else if (this.age >= 20 && this.age <= 40) emit('20-40', 1);
      else if (this.age >= 40 && this.age <= 60) emit('40-60', 1);
      else emit('60 >', 1);
    };
    const out = { replace: 'res' };

    return new Promise((resolve, reject) => {
      AgeValue.mapReduce({ reduce, map, out }, (err, model) => {
        if (err) reject();
        model.find().exec((err, data) => { if (!err) resolve(data); });
      });
    });
  }

  /**
   * Stop data generation
   */
  stopGenerator () { clearInterval(this.intervalID); }
}

module.exports = AgeGenerator;
