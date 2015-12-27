/**
 * Basic class that describe generators
 * @type {Indicator}
 * @abstract
 */
class Generator {
  /**
   * Return part of generated values.
   * @param {Number} count - max count of getting values.
   * @param {Date} timestamp for searched data.
   * @returns {Array} - collection of values from database
   */
  getDataSlice (count, timestamp) {
    throw new Error('Abstract method should be overridden');
  }

  /**
   * Stop data generation
   */
  stopGenerator () {  throw new Error('Abstract method should be overridden'); }
}

module.exports = Generator;
