import stub from '../stub/stub.js';

/**
 * Describe getter for layers sources.
 */
var LayersSource = {

  /**
   * Method that emulate loading of layers component sources.
   *
   * @returns {Promise}
   */
  load: function(url) {
    return new Promise(function(resolve, reject) {
      setTimeout(()=> resolve(stub), 1000);
    });
  }
};

export default LayersSource;