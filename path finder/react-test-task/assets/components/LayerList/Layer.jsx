/**
 * Describe the layer component.
 * @name Layer
 * @class
 */
export default class Layer extends React.Component {
  constructor() {
    super();
    /**
     * Add method that processing class names generation
     */
    this.classNames = require('classnames');
  }
  /**
   * Default values of layer displaying mode configuration.
   * @default
   * @private
   */
  static defaultProps = {
    isHidden: false,
    opacityValue: 1
  }
  /**
   * React validation.
   * @private
   */
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    isHidden: React.PropTypes.bool,
    orderNumber:  React.PropTypes.number
  }

  render() {
    let cls = this.classNames('layer', {
      'hidden-layer': this.props.isHidden
    });

    return (
      <div className={cls} style={{opacity: this.props.opacityValue, zIndex: this.props.orderNumber}}>
        <img src={this.props.src}/>
      </div>
    );
  }
}