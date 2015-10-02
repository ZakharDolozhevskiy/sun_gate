(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Describe the layer component.
 * @name Layer
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = (function (_React$Component) {
  _inherits(Layer, _React$Component);

  function Layer() {
    _classCallCheck(this, Layer);

    _get(Object.getPrototypeOf(Layer.prototype), 'constructor', this).call(this);
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

  _createClass(Layer, [{
    key: 'render',
    value: function render() {
      var cls = this.classNames('layer', {
        'hidden-layer': this.props.isHidden
      });

      return React.createElement(
        'div',
        { className: cls, style: { opacity: this.props.opacityValue, zIndex: this.props.orderNumber } },
        React.createElement('img', { src: this.props.src })
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      isHidden: false,
      opacityValue: 1
    },

    /**
     * React validation.
     * @private
     */
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      src: React.PropTypes.string.isRequired,
      isHidden: React.PropTypes.bool,
      orderNumber: React.PropTypes.number
    },
    enumerable: true
  }]);

  return Layer;
})(React.Component);

exports['default'] = Layer;
module.exports = exports['default'];

},{"classnames":5}],2:[function(require,module,exports){
/**
 * Describe the layer's marker component
 * @name LayerMarker
 * @class
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerMarker = (function (_React$Component) {
  _inherits(LayerMarker, _React$Component);

  function LayerMarker() {
    _classCallCheck(this, LayerMarker);

    _get(Object.getPrototypeOf(LayerMarker.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LayerMarker, [{
    key: 'render',
    value: function render() {
      var pos = this.props.position;

      return React.createElement(
        'div',
        { className: 'marker', style: { left: pos.left, top: pos.top } },
        React.createElement('img', { src: this.props.imgSrc, alt: 'marker image' })
      );
    }
  }], [{
    key: 'propTypes',

    /**
     * React validate that object with coordinates is required.
     * @name LayerMarker
     * @type {Object}
     * @private
     */
    value: {
      position: React.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  return LayerMarker;
})(React.Component);

exports['default'] = LayerMarker;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _LayerJsx = require('./Layer.jsx');

var _LayerJsx2 = _interopRequireDefault(_LayerJsx);

var _LayerMarkerJsx = require('./Layer.marker.jsx');

var _LayerMarkerJsx2 = _interopRequireDefault(_LayerMarkerJsx);

var _stubStubJs = require('../../stub/stub.js');

var _stubStubJs2 = _interopRequireDefault(_stubStubJs);

/**
 * Describe the list with layers.
 * @name LayerList
 * @class
 * @description
 * Render content from attribute or load external content by URL from attribute.
 *
 */

var LayerList = (function (_React$Component) {
  _inherits(LayerList, _React$Component);

  function LayerList(props) {
    _classCallCheck(this, LayerList);

    _get(Object.getPrototypeOf(LayerList.prototype), 'constructor', this).call(this, props);
    /**
     * Load and render external content if the URL address is given.
     */
    this.state = {
      content: this.props.content
    };
    if (this.props.contentURL) {
      this._loadExternalData();
    }
  }

  /**
   * Mock method. Emulation of asynchronous content loading.
   * @private
   */

  _createClass(LayerList, [{
    key: '_loadExternalData',
    value: function _loadExternalData() {
      var _this = this;

      setTimeout(function () {
        return _this.setState({ content: _stubStubJs2['default'] });
      }, 2000);
    }

    /**
     * Render react component: LayerMarker
     * @param opt {Object} - Options to render.
     * @returns {ReactElement} LayerMarker component
     * @private
     */
  }, {
    key: '_getMarker',
    value: function _getMarker(opt) {
      return React.createElement(_LayerMarkerJsx2['default'], _extends({ imgSrc: opt.img }, opt));
    }

    /**
     * Render react component: Layer
     * @param opt {Object} - Options to render.
     * @param index {Number} - Layer order number.
     * @returns {ReactElement} Layer component
     * @private
     */
  }, {
    key: '_getLayer',
    value: function _getLayer(opt, index) {
      return React.createElement(_LayerJsx2['default'], _extends({ orderNumber: index, opacityValue: opt.opacity }, opt));
    }

    /**
     * Method initiate React component rendering with appropriate content
     * @param data {Array} - Array with data to render.
     * @param callback {Function} - Method that should  render component.
     * @private
     */
  }, {
    key: '_getComponents',
    value: function _getComponents(data, callback) {
      if (data) {
        return data.map(function (opt, index) {
          return callback(opt, index);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.state.content;
      var layers = undefined;
      var markers = undefined;

      if (!content) {
        return React.createElement(
          'p',
          null,
          'Processing...'
        );
      }

      layers = this._getComponents(content.layers, this._getLayer);
      markers = this._getComponents(content.markers, this._getMarker);

      return React.createElement(
        'div',
        { className: 'layers-holder' },
        layers,
        markers
      );
    }
  }]);

  return LayerList;
})(React.Component);

React.render(React.createElement(LayerList, { contentURL: 'link to external content' }), document.getElementById('wrapper'));

/**
 * @type {Array}
 * @default
 * @description
 * Data to render that given from attribute.
 */

},{"../../stub/stub.js":4,"./Layer.jsx":1,"./Layer.marker.jsx":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  layers: [{
    src: 'images/skitch.jpg',
    opacity: 1,
    isHidden: false
  }, {
    src: 'images/layer-1.png',
    opacity: 0.55,
    isHidden: false
  }, {
    src: 'images/layer-2.png',
    opacity: 0.65,
    isHidden: false
  }, {
    src: 'images/layer-3.png',
    opacity: 0.35,
    isHidden: false
  }],
  markers: [{
    position: { left: 500, top: 260 },
    img: 'images/map-marker-icon.png'
  }, {
    position: { left: 724, top: 123 },
    img: 'images/map-marker-icon2.png'
  }]
};
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkOi9QZXJzb25hbCBHSVQgcmVwby9zdW5fZ2F0ZS9wYXRoIGZpbmRlci9yZWFjdC10ZXN0LXRhc2svYXNzZXRzL2NvbXBvbmVudHMvTGF5ZXJMaXN0L0xheWVyLmpzeCIsImQ6L1BlcnNvbmFsIEdJVCByZXBvL3N1bl9nYXRlL3BhdGggZmluZGVyL3JlYWN0LXRlc3QtdGFzay9hc3NldHMvY29tcG9uZW50cy9MYXllckxpc3QvTGF5ZXIubWFya2VyLmpzeCIsImQ6L1BlcnNvbmFsIEdJVCByZXBvL3N1bl9nYXRlL3BhdGggZmluZGVyL3JlYWN0LXRlc3QtdGFzay9hc3NldHMvY29tcG9uZW50cy9MYXllckxpc3QvTGF5ZXJzLmNvbXBvbmVudC5qc3giLCJkOi9QZXJzb25hbCBHSVQgcmVwby9zdW5fZ2F0ZS9wYXRoIGZpbmRlci9yZWFjdC10ZXN0LXRhc2svYXNzZXRzL3N0dWIvc3R1Yi5qcyIsIm5vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0txQixLQUFLO1lBQUwsS0FBSzs7QUFDYixXQURRLEtBQUssR0FDVjswQkFESyxLQUFLOztBQUV0QiwrQkFGaUIsS0FBSyw2Q0FFZDs7OztBQUlSLFFBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ3pDOzs7Ozs7OztlQVBrQixLQUFLOztXQTJCbEIsa0JBQUc7QUFDUCxVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUNqQyxzQkFBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtPQUNwQyxDQUFDLENBQUM7O0FBRUgsYUFDRTs7VUFBSyxTQUFTLEVBQUUsR0FBRyxBQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FB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R0FBRyxFQUFFLEdBQUcsRUFBQztBQUMvQixPQUFHLEVBQUUsNEJBQTRCO0dBQ2xDLEVBQ0Q7QUFDRSxZQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUM7QUFDL0IsT0FBRyxFQUFFLDZCQUE2QjtHQUNuQyxDQUNGO0NBQ0Y7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIERlc2NyaWJlIHRoZSBsYXllciBjb21wb25lbnQuXHJcbiAqIEBuYW1lIExheWVyXHJcbiAqIEBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkIG1ldGhvZCB0aGF0IHByb2Nlc3NpbmcgY2xhc3MgbmFtZXMgZ2VuZXJhdGlvblxyXG4gICAgICovXHJcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgdmFsdWVzIG9mIGxheWVyIGRpc3BsYXlpbmcgbW9kZSBjb25maWd1cmF0aW9uLlxyXG4gICAqIEBkZWZhdWx0XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgaXNIaWRkZW46IGZhbHNlLFxyXG4gICAgb3BhY2l0eVZhbHVlOiAxXHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlYWN0IHZhbGlkYXRpb24uXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpc0hpZGRlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvcmRlck51bWJlcjogIFJlYWN0LlByb3BUeXBlcy5udW1iZXJcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBjbHMgPSB0aGlzLmNsYXNzTmFtZXMoJ2xheWVyJywge1xyXG4gICAgICAnaGlkZGVuLWxheWVyJzogdGhpcy5wcm9wcy5pc0hpZGRlblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc30gc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnByb3BzLm9wYWNpdHlWYWx1ZSwgekluZGV4OiB0aGlzLnByb3BzLm9yZGVyTnVtYmVyfX0+XHJcbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuc3JjfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCIvKipcclxuICogRGVzY3JpYmUgdGhlIGxheWVyJ3MgbWFya2VyIGNvbXBvbmVudFxyXG4gKiBAbmFtZSBMYXllck1hcmtlclxyXG4gKiBAY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyTWFya2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBSZWFjdCB2YWxpZGF0ZSB0aGF0IG9iamVjdCB3aXRoIGNvb3JkaW5hdGVzIGlzIHJlcXVpcmVkLlxyXG4gICAqIEBuYW1lIExheWVyTWFya2VyXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgcG9zID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFya2VyJyBzdHlsZT17e2xlZnQ6IHBvcy5sZWZ0LCB0b3A6IHBvcy50b3B9fT5cclxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWdTcmN9IGFsdD0nbWFya2VyIGltYWdlJy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgTGF5ZXIgZnJvbSAnLi9MYXllci5qc3gnO1xyXG5pbXBvcnQgTGF5ZXJNYXJrZXIgZnJvbSAnLi9MYXllci5tYXJrZXIuanN4JztcclxuaW1wb3J0IHN0dWIgZnJvbSAnLi4vLi4vc3R1Yi9zdHViLmpzJztcclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZSB0aGUgbGlzdCB3aXRoIGxheWVycy5cclxuICogQG5hbWUgTGF5ZXJMaXN0XHJcbiAqIEBjbGFzc1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmVuZGVyIGNvbnRlbnQgZnJvbSBhdHRyaWJ1dGUgb3IgbG9hZCBleHRlcm5hbCBjb250ZW50IGJ5IFVSTCBmcm9tIGF0dHJpYnV0ZS5cclxuICpcclxuICovXHJcbmNsYXNzIExheWVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge0FycmF5fVxyXG4gICAqIEBkZWZhdWx0XHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRGF0YSB0byByZW5kZXIgdGhhdCBnaXZlbiBmcm9tIGF0dHJpYnV0ZS5cclxuICAgKi9cclxuICBzdGF0ZSA9IHtcclxuICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBhbmQgcmVuZGVyIGV4dGVybmFsIGNvbnRlbnQgaWYgdGhlIFVSTCBhZGRyZXNzIGlzIGdpdmVuLlxyXG4gICAgICovXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb250ZW50VVJMKSB7IHRoaXMuX2xvYWRFeHRlcm5hbERhdGEoKTsgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW9jayBtZXRob2QuIEVtdWxhdGlvbiBvZiBhc3luY2hyb25vdXMgY29udGVudCBsb2FkaW5nLlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgX2xvYWRFeHRlcm5hbERhdGEoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IHN0dWJ9KSwgMjAwMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXIgcmVhY3QgY29tcG9uZW50OiBMYXllck1hcmtlclxyXG4gICAqIEBwYXJhbSBvcHQge09iamVjdH0gLSBPcHRpb25zIHRvIHJlbmRlci5cclxuICAgKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fSBMYXllck1hcmtlciBjb21wb25lbnRcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIF9nZXRNYXJrZXIob3B0KSB7XHJcbiAgICByZXR1cm4gPExheWVyTWFya2VyIGltZ1NyYz17b3B0LmltZ30gey4uLm9wdH0gLz47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXIgcmVhY3QgY29tcG9uZW50OiBMYXllclxyXG4gICAqIEBwYXJhbSBvcHQge09iamVjdH0gLSBPcHRpb25zIHRvIHJlbmRlci5cclxuICAgKiBAcGFyYW0gaW5kZXgge051bWJlcn0gLSBMYXllciBvcmRlciBudW1iZXIuXHJcbiAgICogQHJldHVybnMge1JlYWN0RWxlbWVudH0gTGF5ZXIgY29tcG9uZW50XHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZ2V0TGF5ZXIob3B0LCBpbmRleCkge1xyXG4gICAgcmV0dXJuIDxMYXllciBvcmRlck51bWJlcj17aW5kZXh9IG9wYWNpdHlWYWx1ZT17b3B0Lm9wYWNpdHl9IHsuLi5vcHR9IC8+O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIGluaXRpYXRlIFJlYWN0IGNvbXBvbmVudCByZW5kZXJpbmcgd2l0aCBhcHByb3ByaWF0ZSBjb250ZW50XHJcbiAgICogQHBhcmFtIGRhdGEge0FycmF5fSAtIEFycmF5IHdpdGggZGF0YSB0byByZW5kZXIuXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gLSBNZXRob2QgdGhhdCBzaG91bGQgIHJlbmRlciBjb21wb25lbnQuXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBfZ2V0Q29tcG9uZW50cyhkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgcmV0dXJuIGRhdGEubWFwKChvcHQsIGluZGV4KSA9PiBjYWxsYmFjayhvcHQsIGluZGV4KSApXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnN0YXRlLmNvbnRlbnQ7XHJcbiAgICBsZXQgbGF5ZXJzO1xyXG4gICAgbGV0IG1hcmtlcnM7XHJcblxyXG4gICAgaWYgKCFjb250ZW50KSB7IHJldHVybiA8cD5Qcm9jZXNzaW5nLi4uPC9wPiB9XHJcblxyXG4gICAgbGF5ZXJzID0gdGhpcy5fZ2V0Q29tcG9uZW50cyhjb250ZW50LmxheWVycywgdGhpcy5fZ2V0TGF5ZXIpO1xyXG4gICAgbWFya2VycyA9IHRoaXMuX2dldENvbXBvbmVudHMoY29udGVudC5tYXJrZXJzLCB0aGlzLl9nZXRNYXJrZXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXllcnMtaG9sZGVyJz5cclxuICAgICAgICB7bGF5ZXJzfVxyXG4gICAgICAgIHttYXJrZXJzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5SZWFjdC5yZW5kZXIoXHJcbiAgPExheWVyTGlzdCBjb250ZW50VVJMPXsnbGluayB0byBleHRlcm5hbCBjb250ZW50J30vPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpXHJcbik7IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxheWVyczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6ICdpbWFnZXMvc2tpdGNoLmpwZycsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIGlzSGlkZGVuOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnaW1hZ2VzL2xheWVyLTEucG5nJyxcclxuICAgICAgb3BhY2l0eTogMC41NSxcclxuICAgICAgaXNIaWRkZW46IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICdpbWFnZXMvbGF5ZXItMi5wbmcnLFxyXG4gICAgICBvcGFjaXR5OiAwLjY1LFxyXG4gICAgICBpc0hpZGRlbjogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ2ltYWdlcy9sYXllci0zLnBuZycsXHJcbiAgICAgIG9wYWNpdHk6IDAuMzUsXHJcbiAgICAgIGlzSGlkZGVuOiBmYWxzZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgbWFya2VyczogW1xyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjoge2xlZnQ6IDUwMCwgdG9wOiAyNjB9LFxyXG4gICAgICBpbWc6ICdpbWFnZXMvbWFwLW1hcmtlci1pY29uLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiB7bGVmdDogNzI0LCB0b3A6IDEyM30sXHJcbiAgICAgIGltZzogJ2ltYWdlcy9tYXAtbWFya2VyLWljb24yLnBuZydcclxuICAgIH1cclxuICBdXHJcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSAnJztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGFyZztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsgY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuc3Vic3RyKDEpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIl19
