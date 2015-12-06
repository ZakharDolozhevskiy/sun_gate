/**
 * Basic class that describe generators
 * @type {Generator}
 * @abstract
 */
class Generator {
  /**
   * @description Init local storage for generated data and init data generation.
   * @param {Number} delay - frequency of data generation.
   */
  constructor (delay) {
    this._initGenerator(delay);
  }

  /**
   * Abstract method. Should be overridden on method that init data generation.
   * @param {Number} delay - delay for action of data generation.
   * @interface
   */
  _initGenerator (delay) { throw new Error('Abstract method should be overridden'); }
}

module.exports = Generator;
