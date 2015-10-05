import LayersSource from '../sources/LayersSource.js';

var alt = require('../alt');

/**
 * Describe layer components actions
 */
class LayersActions {

  /**
   * Update store by recived data.
   *
   * @param {Object} content - data with sources for layer components.
   */
  updateSource(content) {
    this.dispatch(content);
  }

  /**
   * Load external sources for url address.
   *
   * @param {String} url - url address to external source for layers components.
   */
  loadSource(url) {
    LayersSource.load(url).then((data) => {
      this.actions.updateSource(data);
    });
  }
}

export default alt.createActions(LayersActions);