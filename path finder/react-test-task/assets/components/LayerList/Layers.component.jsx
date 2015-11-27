import Layer from './Layer.jsx';
import LayerMarker from './Layer.marker.jsx';
import LayersStore from '../../stores/LayersStore.js';
import LayersActions from '../../actions/LayersActions.js';

/**
 * Describe the list with layers.
 *
 * @name LayerList
 * @class
 * @description
 * Render content from attribute or load external content by URL from attribute.
 *
 */
export default class LayerList extends React.Component {
  /**
   * Source to render that given from attribute.
   *
   * @type {Array}
   * @default
   * @description
   */
  state = {
    source: null
  }

  componentDidMount() {
    /**
     * Load external source by received URL
     */
    LayersActions.loadSource(this.props.URL);

    // Subscribe to the Store change event
    LayersStore.listen(this._onChange);
  }

  componentWillUnmount() {
    // Unsubscribe when component remove from DOM
    //LayersStore.unlisten(this._onChange);
  }

  /**
   * Render react component: LayerMarker.
   *
   * @param {Object} opt - Options to render.
   * @returns {ReactElement} LayerMarker component
   * @private
   */
  _getMarker(opt) {
    return <LayerMarker imgSrc={opt.img} {...opt} />;
  }

  /**
   * Render react component: Layer.
   *
   * @param {Object} opt - Options to render.
   * @param {Number} index - Layer order number.
   * @returns {ReactElement} Layer component
   * @private
   */
  _getLayer(opt, index) {
    return <Layer orderNumber={index} opacityValue={opt.opacity} {...opt} />;
  }

  /**
   * Method initiate React component rendering with appropriate content
   *
   * @param {Array} data - Array with data to render.
   * @param {Function} callback - Method that should  render component.
   * @private
   */
  _getComponents(data, callback) {
    if (data) {
      return data.map((opt, index) => callback(opt, index));
    }
  };

  /**
   * Call when store has updated. And set updated source to component state.
   *
   * @param {Object} data - source for component
   * @private
   */
  _onChange = (data) => {
    this.setState({source: data.layers});
  }

  render() {
    let source = this.state.source;
    let layers;
    let markers;

    if (!source) { return <p>Processing...</p>; }

    layers = this._getComponents(source.layers, this._getLayer);
    markers = this._getComponents(source.markers, this._getMarker);

    return (
      <div className='layers-holder'>
        {layers}
        {markers}
      </div>
    );
  }
}