import Layer from './Layer.jsx';
import LayerMarker from './Layer.marker.jsx';
import stub from '../../stub/stub.js';

/**
 * Describe the list with layers.
 * @name LayerList
 * @class
 * @description
 * Render content from attribute or load external content by URL from attribute.
 *
 */
class LayerList extends React.Component {
  /**
   * @type {Array}
   * @default
   * @description
   * Data to render that given from attribute.
   */
  state = {
    content: this.props.content
  }

  constructor(props) {
    super(props);
    /**
     * Load and render external content if the URL address is given.
     */
    if (this.props.contentURL) { this._loadExternalData(); }
  }

  /**
   * Mock method. Emulation of asynchronous content loading.
   * @private
   */
  _loadExternalData() {
    setTimeout(() => this.setState({content: stub}), 2000);
  }

  /**
   * Render react component: LayerMarker
   * @param opt {Object} - Options to render.
   * @returns {ReactElement} LayerMarker component
   * @private
   */
  _getMarker(opt) {
    return <LayerMarker imgSrc={opt.img} {...opt} />;
  }

  /**
   * Render react component: Layer
   * @param opt {Object} - Options to render.
   * @param index {Number} - Layer order number.
   * @returns {ReactElement} Layer component
   * @private
   */
  _getLayer(opt, index) {
    return <Layer orderNumber={index} opacityValue={opt.opacity} {...opt} />;
  }

  /**
   * Method initiate React component rendering with appropriate content
   * @param data {Array} - Array with data to render.
   * @param callback {Function} - Method that should  render component.
   * @private
   */
  _getComponents(data, callback) {
    if (data) {
      return data.map((opt, index) => callback(opt, index) )
    }
  };

  render() {
    let content = this.state.content;
    let layers;
    let markers;

    if (!content) { return <p>Processing...</p> }

    layers = this._getComponents(content.layers, this._getLayer);
    markers = this._getComponents(content.markers, this._getMarker);

    return (
      <div className='layers-holder'>
        {layers}
        {markers}
      </div>
    );
  }
}

React.render(
  <LayerList contentURL={'link to external content'}/>,
  document.getElementById('wrapper')
);