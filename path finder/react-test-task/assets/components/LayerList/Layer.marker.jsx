/**
 * Describe the layer's marker component
 *
 * @name LayerMarker
 * @class
 */
export default class LayerMarker extends React.Component {
  /**
   * React validate that object with coordinates is required.
   *
   * @name LayerMarker
   * @type {Object}
   * @private
   */
  static propTypes = {
    position: React.PropTypes.object.isRequired
  }

  render() {
    let pos = this.props.position;

    return (
      <div className='marker' style={{left: pos.left, top: pos.top}}>
        <img src={this.props.imgSrc} alt='marker image'/>
      </div>
    );
  }
}