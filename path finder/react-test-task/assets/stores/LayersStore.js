import LocationActions from '../actions/LayersActions.js';

var alt = require('../alt');

/**
 * Describe store with source for layers components.
 */
class LayersStore {
  constructor() {
    this.layers = [];

    this.bindListeners({
      handleLayersUpdate: LocationActions.UPDATE_SOURCE
    });
  }

  handleLayersUpdate(layers) {
    this.layers = layers;
  }
}

export default alt.createStore(LayersStore, 'LayersStore');