(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sourcesLayersSourceJs = require('../sources/LayersSource.js');

var _sourcesLayersSourceJs2 = _interopRequireDefault(_sourcesLayersSourceJs);

var alt = require('../alt');

/**
 * Describe layer components actions
 */

var LayersActions = (function () {
  function LayersActions() {
    _classCallCheck(this, LayersActions);
  }

  _createClass(LayersActions, [{
    key: 'updateSource',

    /**
     * Update store by recived data.
     *
     * @param {Object} content - data with sources for layer components.
     */
    value: function updateSource(content) {
      this.dispatch(content);
    }

    /**
     * Load external sources for url address.
     *
     * @param {String} url - url address to external source for layers components.
     */
  }, {
    key: 'loadSource',
    value: function loadSource(url) {
      var _this = this;

      _sourcesLayersSourceJs2['default'].load(url).then(function (data) {
        _this.actions.updateSource(data);
      });
    }
  }]);

  return LayersActions;
})();

exports['default'] = alt.createActions(LayersActions);
module.exports = exports['default'];

},{"../alt":2,"../sources/LayersSource.js":7}],2:[function(require,module,exports){
'use strict';

var Alt = require('alt');
var alt = new Alt();

module.exports = alt;

},{"alt":11}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsLayerListLayersComponentJsx = require('./components/LayerList/Layers.component.jsx');

var _componentsLayerListLayersComponentJsx2 = _interopRequireDefault(_componentsLayerListLayersComponentJsx);

/**
 * Render application components
 */
React.render(React.createElement(_componentsLayerListLayersComponentJsx2['default'], { URL: 'link to external content' }), document.getElementById('wrapper'));

},{"./components/LayerList/Layers.component.jsx":6}],4:[function(require,module,exports){
/**
 * Describe the layer component.
 *
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
   *
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

},{"classnames":22}],5:[function(require,module,exports){
/**
 * Describe the layer's marker component
 *
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
     *
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _storesLayersStoreJs = require('../../stores/LayersStore.js');

var _storesLayersStoreJs2 = _interopRequireDefault(_storesLayersStoreJs);

var _actionsLayersActionsJs = require('../../actions/LayersActions.js');

var _actionsLayersActionsJs2 = _interopRequireDefault(_actionsLayersActionsJs);

/**
 * Describe the list with layers.
 *
 * @name LayerList
 * @class
 * @description
 * Render content from attribute or load external content by URL from attribute.
 *
 */

var LayerList = (function (_React$Component) {
  _inherits(LayerList, _React$Component);

  function LayerList() {
    var _this = this;

    _classCallCheck(this, LayerList);

    _get(Object.getPrototypeOf(LayerList.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      source: null
    };

    this._onChange = function (data) {
      _this.setState({ source: data.layers });
    };
  }

  _createClass(LayerList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /**
       * Load external source by received URL
       */
      _actionsLayersActionsJs2['default'].loadSource(this.props.URL);

      // Subscribe to the Store change event
      _storesLayersStoreJs2['default'].listen(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
    // Unsubscribe when component remove from DOM
    //LayersStore.unlisten(this._onChange);

    /**
     * Render react component: LayerMarker.
     *
     * @param {Object} opt - Options to render.
     * @returns {ReactElement} LayerMarker component
     * @private
     */

  }, {
    key: '_getMarker',
    value: function _getMarker(opt) {
      return React.createElement(_LayerMarkerJsx2['default'], _extends({ imgSrc: opt.img }, opt));
    }

    /**
     * Render react component: Layer.
     *
     * @param {Object} opt - Options to render.
     * @param {Number} index - Layer order number.
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
     *
     * @param {Array} data - Array with data to render.
     * @param {Function} callback - Method that should  render component.
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
      var source = this.state.source;
      var layers = undefined;
      var markers = undefined;

      if (!source) {
        return React.createElement(
          'p',
          null,
          'Processing...'
        );
      }

      layers = this._getComponents(source.layers, this._getLayer);
      markers = this._getComponents(source.markers, this._getMarker);

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

exports['default'] = LayerList;
module.exports = exports['default'];

/**
 * Source to render that given from attribute.
 *
 * @type {Array}
 * @default
 * @description
 */

/**
 * Call when store has updated. And set updated source to component state.
 *
 * @param {Object} data - source for component
 * @private
 */

},{"../../actions/LayersActions.js":1,"../../stores/LayersStore.js":8,"./Layer.jsx":4,"./Layer.marker.jsx":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stubStubJs = require('../stub/stub.js');

var _stubStubJs2 = _interopRequireDefault(_stubStubJs);

/**
 * Describe getter for layers sources.
 */
var LayersSource = {

  /**
   * Method that emulate loading of layers component sources.
   *
   * @returns {Promise}
   */
  load: function load(url) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve(_stubStubJs2['default']);
      }, 1000);
    });
  }
};

exports['default'] = LayersSource;
module.exports = exports['default'];

},{"../stub/stub.js":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _actionsLayersActionsJs = require('../actions/LayersActions.js');

var _actionsLayersActionsJs2 = _interopRequireDefault(_actionsLayersActionsJs);

var alt = require('../alt');

/**
 * Describe store with source for layers components.
 */

var LayersStore = (function () {
  function LayersStore() {
    _classCallCheck(this, LayersStore);

    this.layers = [];

    this.bindListeners({
      handleLayersUpdate: _actionsLayersActionsJs2['default'].UPDATE_SOURCE
    });
  }

  _createClass(LayersStore, [{
    key: 'handleLayersUpdate',
    value: function handleLayersUpdate(layers) {
      this.layers = layers;
    }
  }]);

  return LayersStore;
})();

exports['default'] = alt.createStore(LayersStore, 'LayersStore');
module.exports = exports['default'];

},{"../actions/LayersActions.js":1,"../alt":2}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = makeAction;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsFunctions = require('../../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

var _utilsAltUtils = require('../utils/AltUtils');

var utils = _interopRequireWildcard(_utilsAltUtils);

var AltAction = (function () {
  function AltAction(alt, id, action, actions, actionDetails) {
    _classCallCheck(this, AltAction);

    this.id = id;
    this._dispatch = action.bind(this);
    this.actions = actions;
    this.actionDetails = actionDetails;
    this.alt = alt;
  }

  _createClass(AltAction, [{
    key: 'dispatch',
    value: function dispatch(data) {
      this.dispatched = true;
      this.alt.dispatch(this.id, data, this.actionDetails);
    }
  }]);

  return AltAction;
})();

function makeAction(alt, namespace, name, implementation, obj) {
  var id = utils.uid(alt._actionsRegistry, namespace + '.' + name);
  alt._actionsRegistry[id] = 1;

  var data = { id: id, namespace: namespace, name: name };

  // Wrap the action so we can provide a dispatch method
  var newAction = new AltAction(alt, id, implementation, obj, data);

  var dispatch = function dispatch(payload) {
    return alt.dispatch(id, payload, data);
  };

  // the action itself
  var action = function action() {
    newAction.dispatched = false;
    var result = newAction._dispatch.apply(newAction, arguments);
    // async functions that return promises should not be dispatched
    if (!newAction.dispatched && result !== undefined && !fn.isPromise(result)) {
      if (fn.isFunction(result)) {
        result(dispatch);
      } else {
        dispatch(result);
      }
    }
    return result;
  };
  action.defer = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    setTimeout(function () {
      newAction._dispatch.apply(null, args);
    });
  };
  action.id = id;
  action.data = data;

  // ensure each reference is unique in the namespace
  var container = alt.actions[namespace];
  var namespaceId = utils.uid(container, name);
  container[namespaceId] = action;

  return action;
}

module.exports = exports['default'];
},{"../../utils/functions":21,"../utils/AltUtils":15}],11:[function(require,module,exports){
/*global window*/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _flux = require('flux');

var _utilsStateFunctions = require('./utils/StateFunctions');

var StateFunctions = _interopRequireWildcard(_utilsStateFunctions);

var _utilsFunctions = require('../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

var _store = require('./store');

var store = _interopRequireWildcard(_store);

var _utilsAltUtils = require('./utils/AltUtils');

var utils = _interopRequireWildcard(_utilsAltUtils);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var Alt = (function () {
  function Alt() {
    var config = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Alt);

    this.config = config;
    this.serialize = config.serialize || JSON.stringify;
    this.deserialize = config.deserialize || JSON.parse;
    this.dispatcher = config.dispatcher || new _flux.Dispatcher();
    this.batchingFunction = config.batchingFunction || function (callback) {
      return callback();
    };
    this.actions = { global: {} };
    this.stores = {};
    this.storeTransforms = config.storeTransforms || [];
    this.trapAsync = false;
    this._actionsRegistry = {};
    this._initSnapshot = {};
    this._lastSnapshot = {};
  }

  _createClass(Alt, [{
    key: 'dispatch',
    value: function dispatch(action, data, details) {
      var _this = this;

      this.batchingFunction(function () {
        var id = Math.random().toString(18).substr(2, 16);
        return _this.dispatcher.dispatch({
          id: id,
          action: action,
          data: data,
          details: details
        });
      });
    }
  }, {
    key: 'createUnsavedStore',
    value: function createUnsavedStore(StoreModel) {
      var key = StoreModel.displayName || '';
      store.createStoreConfig(this.config, StoreModel);
      var Store = store.transformStore(this.storeTransforms, StoreModel);

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);
    }
  }, {
    key: 'createStore',
    value: function createStore(StoreModel, iden) {
      var key = iden || StoreModel.displayName || StoreModel.name || '';
      store.createStoreConfig(this.config, StoreModel);
      var Store = store.transformStore(this.storeTransforms, StoreModel);

      /*istanbul ignore next*/
      if (module.hot) delete this.stores[key];

      if (this.stores[key] || !key) {
        if (this.stores[key]) {
          utils.warn('A store named ' + key + ' already exists, double check your store ' + 'names or pass in your own custom identifier for each store');
        } else {
          utils.warn('Store name was not specified');
        }

        key = utils.uid(this.stores, key);
      }

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var storeInstance = fn.isFunction(Store) ? store.createStoreFromClass.apply(store, [this, Store, key].concat(args)) : store.createStoreFromObject(this, Store, key);

      this.stores[key] = storeInstance;
      StateFunctions.saveInitialSnapshot(this, key);

      return storeInstance;
    }
  }, {
    key: 'generateActions',
    value: function generateActions() {
      var actions = { name: 'global' };

      for (var _len3 = arguments.length, actionNames = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        actionNames[_key3] = arguments[_key3];
      }

      return this.createActions(actionNames.reduce(function (obj, action) {
        obj[action] = utils.dispatchIdentity;
        return obj;
      }, actions));
    }
  }, {
    key: 'createAction',
    value: function createAction(name, implementation, obj) {
      return (0, _actions2['default'])(this, 'global', name, implementation, obj);
    }
  }, {
    key: 'createActions',
    value: function createActions(ActionsClass) {
      var _arguments2 = arguments,
          _this2 = this;

      var exportObj = arguments[1] === undefined ? {} : arguments[1];

      var actions = {};
      var key = utils.uid(this._actionsRegistry, ActionsClass.displayName || ActionsClass.name || 'Unknown');

      if (fn.isFunction(ActionsClass)) {
        var _len4, argsForConstructor, _key4;

        (function () {
          fn.assign(actions, utils.getInternalMethods(ActionsClass, true));

          var ActionsGenerator = (function (_ActionsClass) {
            function ActionsGenerator() {
              _classCallCheck(this, ActionsGenerator);

              for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }

              _get(Object.getPrototypeOf(ActionsGenerator.prototype), 'constructor', this).apply(this, args);
            }

            _inherits(ActionsGenerator, _ActionsClass);

            _createClass(ActionsGenerator, [{
              key: 'generateActions',
              value: function generateActions() {
                for (var _len6 = arguments.length, actionNames = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                  actionNames[_key6] = arguments[_key6];
                }

                actionNames.forEach(function (actionName) {
                  actions[actionName] = utils.dispatchIdentity;
                });
              }
            }]);

            return ActionsGenerator;
          })(ActionsClass);

          for (_len4 = _arguments2.length, argsForConstructor = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            argsForConstructor[_key4 - 2] = _arguments2[_key4];
          }

          fn.assign(actions, new (_bind.apply(ActionsGenerator, [null].concat(_toConsumableArray(argsForConstructor))))());
        })();
      } else {
        fn.assign(actions, ActionsClass);
      }

      this.actions[key] = this.actions[key] || {};

      fn.eachObject(function (actionName, action) {
        if (!fn.isFunction(action)) {
          return;
        }

        // create the action
        exportObj[actionName] = (0, _actions2['default'])(_this2, key, actionName, action, exportObj);

        // generate a constant
        var constant = utils.formatAsConstant(actionName);
        exportObj[constant] = exportObj[actionName].id;
      }, [actions]);
      return exportObj;
    }
  }, {
    key: 'takeSnapshot',
    value: function takeSnapshot() {
      for (var _len7 = arguments.length, storeNames = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        storeNames[_key7] = arguments[_key7];
      }

      var state = StateFunctions.snapshot(this, storeNames);
      fn.assign(this._lastSnapshot, state);
      return this.serialize(state);
    }
  }, {
    key: 'rollback',
    value: function rollback() {
      StateFunctions.setAppState(this, this.serialize(this._lastSnapshot), function (storeInst) {
        storeInst.lifecycle('rollback');
        storeInst.emitChange();
      });
    }
  }, {
    key: 'recycle',
    value: function recycle() {
      for (var _len8 = arguments.length, storeNames = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        storeNames[_key8] = arguments[_key8];
      }

      var initialSnapshot = storeNames.length ? StateFunctions.filterSnapshots(this, this._initSnapshot, storeNames) : this._initSnapshot;

      StateFunctions.setAppState(this, this.serialize(initialSnapshot), function (storeInst) {
        storeInst.lifecycle('init');
        storeInst.emitChange();
      });
    }
  }, {
    key: 'flush',
    value: function flush() {
      var state = this.serialize(StateFunctions.snapshot(this));
      this.recycle();
      return state;
    }
  }, {
    key: 'bootstrap',
    value: function bootstrap(data) {
      StateFunctions.setAppState(this, data, function (storeInst) {
        storeInst.lifecycle('bootstrap');
        storeInst.emitChange();
      });
    }
  }, {
    key: 'prepare',
    value: function prepare(storeInst, payload) {
      var data = {};
      if (!storeInst.displayName) {
        throw new ReferenceError('Store provided does not have a name');
      }
      data[storeInst.displayName] = payload;
      return this.serialize(data);
    }
  }, {
    key: 'addActions',

    // Instance type methods for injecting alt into your application as context

    value: function addActions(name, ActionsClass) {
      for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
        args[_key9 - 2] = arguments[_key9];
      }

      this.actions[name] = Array.isArray(ActionsClass) ? this.generateActions.apply(this, ActionsClass) : this.createActions.apply(this, [ActionsClass].concat(args));
    }
  }, {
    key: 'addStore',
    value: function addStore(name, StoreModel) {
      for (var _len10 = arguments.length, args = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
        args[_key10 - 2] = arguments[_key10];
      }

      this.createStore.apply(this, [StoreModel, name].concat(args));
    }
  }, {
    key: 'getActions',
    value: function getActions(name) {
      return this.actions[name];
    }
  }, {
    key: 'getStore',
    value: function getStore(name) {
      return this.stores[name];
    }
  }], [{
    key: 'debug',
    value: function debug(name, alt) {
      var key = 'alt.js.org';
      if (typeof window !== 'undefined') {
        window[key] = window[key] || [];
        window[key].push({ name: name, alt: alt });
      }
      return alt;
    }
  }]);

  return Alt;
})();

exports['default'] = Alt;
module.exports = exports['default'];
},{"../utils/functions":21,"./actions":10,"./store":14,"./utils/AltUtils":15,"./utils/StateFunctions":16,"flux":17}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsFunctions = require('../../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

var _transmitter = require('transmitter');

var _transmitter2 = _interopRequireDefault(_transmitter);

var AltStore = (function () {
  function AltStore(alt, model, state, StoreModel) {
    var _this = this;

    _classCallCheck(this, AltStore);

    var lifecycleEvents = model.lifecycleEvents;
    this.transmitter = (0, _transmitter2['default'])();
    this.lifecycle = function (event, x) {
      if (lifecycleEvents[event]) lifecycleEvents[event].push(x);
    };
    this.state = state;

    this.preventDefault = false;
    this.displayName = model.displayName;
    this.boundListeners = model.boundListeners;
    this.StoreModel = StoreModel;
    this.reduce = model.reduce || function (x) {
      return x;
    };

    var output = model.output || function (x) {
      return x;
    };

    this.emitChange = function () {
      return _this.transmitter.push(output(_this.state));
    };

    var handleDispatch = function handleDispatch(f, payload) {
      try {
        return f();
      } catch (e) {
        if (model.handlesOwnErrors) {
          _this.lifecycle('error', {
            error: e,
            payload: payload,
            state: _this.state
          });
          return false;
        } else {
          throw e;
        }
      }
    };

    fn.assign(this, model.publicMethods);

    // Register dispatcher
    this.dispatchToken = alt.dispatcher.register(function (payload) {
      _this.preventDefault = false;

      _this.lifecycle('beforeEach', {
        payload: payload,
        state: _this.state
      });

      var actionHandlers = model.actionListeners[payload.action];

      if (actionHandlers || model.otherwise) {
        var result = undefined;

        if (actionHandlers) {
          result = handleDispatch(function () {
            return actionHandlers.filter(Boolean).every(function (handler) {
              return handler.call(model, payload.data, payload.action) !== false;
            });
          }, payload);
        } else {
          result = handleDispatch(function () {
            return model.otherwise(payload.data, payload.action);
          }, payload);
        }

        if (result !== false && !_this.preventDefault) _this.emitChange();
      }

      if (model.reduce) {
        handleDispatch(function () {
          _this.state = model.reduce(_this.state, payload);
        }, payload);
        if (!_this.preventDefault) _this.emitChange();
      }

      _this.lifecycle('afterEach', {
        payload: payload,
        state: _this.state
      });
    });

    this.lifecycle('init');
  }

  _createClass(AltStore, [{
    key: 'listen',
    value: function listen(cb) {
      var _this2 = this;

      if (!fn.isFunction(cb)) throw new TypeError('listen expects a function');
      this.transmitter.subscribe(cb);
      return function () {
        return _this2.unlisten(cb);
      };
    }
  }, {
    key: 'unlisten',
    value: function unlisten(cb) {
      this.lifecycle('unlisten');
      this.transmitter.unsubscribe(cb);
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.StoreModel.config.getState.call(this, this.state);
    }
  }]);

  return AltStore;
})();

exports['default'] = AltStore;
module.exports = exports['default'];
},{"../../utils/functions":21,"transmitter":20}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _transmitter = require('transmitter');

var _transmitter2 = _interopRequireDefault(_transmitter);

var _utilsFunctions = require('../../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

var StoreMixin = {
  waitFor: function waitFor() {
    for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    if (!sources.length) {
      throw new ReferenceError('Dispatch tokens not provided');
    }

    var sourcesArray = sources;
    if (sources.length === 1) {
      sourcesArray = Array.isArray(sources[0]) ? sources[0] : sources;
    }

    var tokens = sourcesArray.map(function (source) {
      return source.dispatchToken || source;
    });

    this.dispatcher.waitFor(tokens);
  },

  exportAsync: function exportAsync(asyncMethods) {
    this.registerAsync(asyncMethods);
  },

  registerAsync: function registerAsync(asyncDef) {
    var _this = this;

    var loadCounter = 0;

    var asyncMethods = fn.isFunction(asyncDef) ? asyncDef(this.alt) : asyncDef;

    var toExport = Object.keys(asyncMethods).reduce(function (publicMethods, methodName) {
      var desc = asyncMethods[methodName];
      var spec = fn.isFunction(desc) ? desc(_this) : desc;

      var validHandlers = ['success', 'error', 'loading'];
      validHandlers.forEach(function (handler) {
        if (spec[handler] && !spec[handler].id) {
          throw new Error(handler + ' handler must be an action function');
        }
      });

      publicMethods[methodName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var state = _this.getInstance().getState();
        var value = spec.local && spec.local.apply(spec, [state].concat(args));
        var shouldFetch = spec.shouldFetch ? spec.shouldFetch.apply(spec, [state].concat(args)) : value == null;
        var intercept = spec.interceptResponse || function (x) {
          return x;
        };

        var makeActionHandler = function makeActionHandler(action, isError) {
          return function (x) {
            var fire = function fire() {
              loadCounter -= 1;
              action(intercept(x, action, args));
              if (isError) throw x;
            };
            return _this.alt.trapAsync ? function () {
              return fire();
            } : fire();
          };
        };

        // if we don't have it in cache then fetch it
        if (shouldFetch) {
          loadCounter += 1;
          /* istanbul ignore else */
          if (spec.loading) spec.loading(intercept(null, spec.loading, args));
          return spec.remote.apply(spec, [state].concat(args)).then(makeActionHandler(spec.success), makeActionHandler(spec.error, 1));
        } else {
          // otherwise emit the change now
          _this.emitChange();
          return value;
        }
      };

      return publicMethods;
    }, {});

    this.exportPublicMethods(toExport);
    this.exportPublicMethods({
      isLoading: function isLoading() {
        return loadCounter > 0;
      }
    });
  },

  exportPublicMethods: function exportPublicMethods(methods) {
    var _this2 = this;

    fn.eachObject(function (methodName, value) {
      if (!fn.isFunction(value)) {
        throw new TypeError('exportPublicMethods expects a function');
      }

      _this2.publicMethods[methodName] = value;
    }, [methods]);
  },

  emitChange: function emitChange() {
    this.getInstance().emitChange();
  },

  on: function on(lifecycleEvent, handler) {
    if (lifecycleEvent === 'error') this.handlesOwnErrors = true;
    var bus = this.lifecycleEvents[lifecycleEvent] || (0, _transmitter2['default'])();
    this.lifecycleEvents[lifecycleEvent] = bus;
    return bus.subscribe(handler.bind(this));
  },

  bindAction: function bindAction(symbol, handler) {
    if (!symbol) {
      throw new ReferenceError('Invalid action reference passed in');
    }
    if (!fn.isFunction(handler)) {
      throw new TypeError('bindAction expects a function');
    }

    if (handler.length > 1) {
      throw new TypeError('Action handler in store ' + this.displayName + ' for ' + ((symbol.id || symbol).toString() + ' was defined with ') + 'two parameters. Only a single parameter is passed through the ' + 'dispatcher, did you mean to pass in an Object instead?');
    }

    // You can pass in the constant or the function itself
    var key = symbol.id ? symbol.id : symbol;
    this.actionListeners[key] = this.actionListeners[key] || [];
    this.actionListeners[key].push(handler.bind(this));
    this.boundListeners.push(key);
  },

  bindActions: function bindActions(actions) {
    var _this3 = this;

    fn.eachObject(function (action, symbol) {
      var matchFirstCharacter = /./;
      var assumedEventHandler = action.replace(matchFirstCharacter, function (x) {
        return 'on' + x[0].toUpperCase();
      });
      var handler = null;

      if (_this3[action] && _this3[assumedEventHandler]) {
        // If you have both action and onAction
        throw new ReferenceError('You have multiple action handlers bound to an action: ' + (action + ' and ' + assumedEventHandler));
      } else if (_this3[action]) {
        // action
        handler = _this3[action];
      } else if (_this3[assumedEventHandler]) {
        // onAction
        handler = _this3[assumedEventHandler];
      }

      if (handler) {
        _this3.bindAction(symbol, handler);
      }
    }, [actions]);
  },

  bindListeners: function bindListeners(obj) {
    var _this4 = this;

    fn.eachObject(function (methodName, symbol) {
      var listener = _this4[methodName];

      if (!listener) {
        throw new ReferenceError(methodName + ' defined but does not exist in ' + _this4.displayName);
      }

      if (Array.isArray(symbol)) {
        symbol.forEach(function (action) {
          _this4.bindAction(action, listener);
        });
      } else {
        _this4.bindAction(symbol, listener);
      }
    }, [obj]);
  }
};

exports['default'] = StoreMixin;
module.exports = exports['default'];
},{"../../utils/functions":21,"transmitter":20}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _bind = Function.prototype.bind;

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.createStoreConfig = createStoreConfig;
exports.transformStore = transformStore;
exports.createStoreFromObject = createStoreFromObject;
exports.createStoreFromClass = createStoreFromClass;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _utilsAltUtils = require('../utils/AltUtils');

var utils = _interopRequireWildcard(_utilsAltUtils);

var _utilsFunctions = require('../../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

var _AltStore = require('./AltStore');

var _AltStore2 = _interopRequireDefault(_AltStore);

var _StoreMixin = require('./StoreMixin');

var _StoreMixin2 = _interopRequireDefault(_StoreMixin);

function doSetState(store, storeInstance, state) {
  if (!state) {
    return;
  }

  var config = storeInstance.StoreModel.config;

  var nextState = fn.isFunction(state) ? state(storeInstance.state) : state;

  storeInstance.state = config.setState.call(store, storeInstance.state, nextState);

  if (!store.alt.dispatcher.isDispatching()) {
    store.emitChange();
  }
}

function createPrototype(proto, alt, key, extras) {
  proto.boundListeners = [];
  proto.lifecycleEvents = {};
  proto.actionListeners = {};
  proto.publicMethods = {};
  proto.handlesOwnErrors = false;

  return fn.assign(proto, _StoreMixin2['default'], {
    displayName: key,
    alt: alt,
    dispatcher: alt.dispatcher,
    preventDefault: function preventDefault() {
      this.getInstance().preventDefault = true;
    }
  }, extras);
}

function createStoreConfig(globalConfig, StoreModel) {
  StoreModel.config = fn.assign({
    getState: function getState(state) {
      if (Array.isArray(state)) {
        return state.slice();
      } else if (Object.prototype.toString.call(state) === '[object Object]') {
        return fn.assign({}, state);
      } else {
        return state;
      }
    },
    setState: fn.assign
  }, globalConfig, StoreModel.config);
}

function transformStore(transforms, StoreModel) {
  return transforms.reduce(function (Store, transform) {
    return transform(Store);
  }, StoreModel);
}

function createStoreFromObject(alt, StoreModel, key) {
  var storeInstance = undefined;

  var StoreProto = createPrototype({}, alt, key, fn.assign({
    getInstance: function getInstance() {
      return storeInstance;
    },
    setState: function setState(nextState) {
      doSetState(this, storeInstance, nextState);
    }
  }, StoreModel));

  // bind the store listeners
  /* istanbul ignore else */
  if (StoreProto.bindListeners) {
    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.bindListeners);
  }
  /* istanbul ignore else */
  if (StoreProto.observe) {
    _StoreMixin2['default'].bindListeners.call(StoreProto, StoreProto.observe(alt));
  }

  // bind the lifecycle events
  /* istanbul ignore else */
  if (StoreProto.lifecycle) {
    fn.eachObject(function (eventName, event) {
      _StoreMixin2['default'].on.call(StoreProto, eventName, event);
    }, [StoreProto.lifecycle]);
  }

  // create the instance and fn.assign the public methods to the instance
  storeInstance = fn.assign(new _AltStore2['default'](alt, StoreProto, StoreProto.state !== undefined ? StoreProto.state : {}, StoreModel), StoreProto.publicMethods, { displayName: key });

  return storeInstance;
}

function createStoreFromClass(alt, StoreModel, key) {
  var storeInstance = undefined;
  var config = StoreModel.config;

  // Creating a class here so we don't overload the provided store's
  // prototype with the mixin behaviour and I'm extending from StoreModel
  // so we can inherit any extensions from the provided store.

  var Store = (function (_StoreModel) {
    function Store() {
      _classCallCheck(this, Store);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _get(Object.getPrototypeOf(Store.prototype), 'constructor', this).apply(this, args);
    }

    _inherits(Store, _StoreModel);

    return Store;
  })(StoreModel);

  createPrototype(Store.prototype, alt, key, {
    getInstance: function getInstance() {
      return storeInstance;
    },
    setState: function setState(nextState) {
      doSetState(this, storeInstance, nextState);
    }
  });

  for (var _len = arguments.length, argsForClass = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    argsForClass[_key - 3] = arguments[_key];
  }

  var store = new (_bind.apply(Store, [null].concat(argsForClass)))();

  if (config.bindListeners) store.bindListeners(config.bindListeners);
  if (config.datasource) store.registerAsync(config.datasource);

  storeInstance = fn.assign(new _AltStore2['default'](alt, store, store.state !== undefined ? store.state : store, StoreModel), utils.getInternalMethods(StoreModel), config.publicMethods, { displayName: key });

  return storeInstance;
}
},{"../../utils/functions":21,"../utils/AltUtils":15,"./AltStore":12,"./StoreMixin":13}],15:[function(require,module,exports){
/*eslint-disable*/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getInternalMethods = getInternalMethods;
exports.warn = warn;
exports.uid = uid;
exports.formatAsConstant = formatAsConstant;
exports.dispatchIdentity = dispatchIdentity;
var builtIns = Object.getOwnPropertyNames(NoopClass);
var builtInProto = Object.getOwnPropertyNames(NoopClass.prototype);
/*eslint-enable*/

function getInternalMethods(Obj, isProto) {
  var excluded = isProto ? builtInProto : builtIns;
  var obj = isProto ? Obj.prototype : Obj;
  return Object.getOwnPropertyNames(obj).reduce(function (value, m) {
    if (excluded.indexOf(m) !== -1) {
      return value;
    }

    value[m] = obj[m];
    return value;
  }, {});
}

function warn(msg) {
  /* istanbul ignore else */
  if (typeof console !== 'undefined') {
    console.warn(new ReferenceError(msg));
  }
}

function uid(container, name) {
  var count = 0;
  var key = name;
  while (Object.hasOwnProperty.call(container, key)) {
    key = name + String(++count);
  }
  return key;
}

function formatAsConstant(name) {
  return name.replace(/[a-z]([A-Z])/g, function (i) {
    return i[0] + '_' + i[1].toLowerCase();
  }).toUpperCase();
}

function dispatchIdentity(x) {
  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    a[_key - 1] = arguments[_key];
  }

  this.dispatch(a.length ? [x].concat(a) : x);
}

/* istanbul ignore next */
function NoopClass() {}
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.setAppState = setAppState;
exports.snapshot = snapshot;
exports.saveInitialSnapshot = saveInitialSnapshot;
exports.filterSnapshots = filterSnapshots;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utilsFunctions = require('../../utils/functions');

var fn = _interopRequireWildcard(_utilsFunctions);

function setAppState(instance, data, onStore) {
  var obj = instance.deserialize(data);
  fn.eachObject(function (key, value) {
    var store = instance.stores[key];
    if (store) {
      (function () {
        var config = store.StoreModel.config;

        var state = store.state;
        if (config.onDeserialize) obj[key] = config.onDeserialize(value) || value;
        if (Object.prototype.toString.call(state) === '[object Object]') {
          fn.eachObject(function (k) {
            return delete state[k];
          }, [state]);
          fn.assign(state, obj[key]);
        } else {
          store.state = obj[key];
        }
        onStore(store);
      })();
    }
  }, [obj]);
}

function snapshot(instance) {
  var storeNames = arguments[1] === undefined ? [] : arguments[1];

  var stores = storeNames.length ? storeNames : Object.keys(instance.stores);
  return stores.reduce(function (obj, storeHandle) {
    var storeName = storeHandle.displayName || storeHandle;
    var store = instance.stores[storeName];
    var config = store.StoreModel.config;

    store.lifecycle('snapshot');
    var customSnapshot = config.onSerialize && config.onSerialize(store.state);
    obj[storeName] = customSnapshot ? customSnapshot : store.getState();
    return obj;
  }, {});
}

function saveInitialSnapshot(instance, key) {
  var state = instance.deserialize(instance.serialize(instance.stores[key].state));
  instance._initSnapshot[key] = state;
  instance._lastSnapshot[key] = state;
}

function filterSnapshots(instance, state, stores) {
  return stores.reduce(function (obj, store) {
    var storeName = store.displayName || store;
    if (!state[storeName]) {
      throw new ReferenceError(storeName + ' is not a valid store');
    }
    obj[storeName] = state[storeName];
    return obj;
  }, {});
}
},{"../../utils/functions":21}],17:[function(require,module,exports){
/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher')

},{"./lib/Dispatcher":18}],18:[function(require,module,exports){
/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */

"use strict";

var invariant = require('./invariant');

var _lastID = 1;
var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   *
   * @param {function} callback
   * @return {string}
   */
  Dispatcher.prototype.register=function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   *
   * @param {string} id
   */
  Dispatcher.prototype.unregister=function(id) {
    invariant(
      this.$Dispatcher_callbacks[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.$Dispatcher_callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   *
   * @param {array<string>} ids
   */
  Dispatcher.prototype.waitFor=function(ids) {
    invariant(
      this.$Dispatcher_isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(
          this.$Dispatcher_isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.$Dispatcher_callbacks[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.$Dispatcher_invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   *
   * @param {object} payload
   */
  Dispatcher.prototype.dispatch=function(payload) {
    invariant(
      !this.$Dispatcher_isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   *
   * @return {boolean}
   */
  Dispatcher.prototype.isDispatching=function() {
    return this.$Dispatcher_isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };


module.exports = Dispatcher;

},{"./invariant":19}],19:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],20:[function(require,module,exports){
"use strict";

function transmitter() {
  var subscriptions = [];

  var unsubscribe = function unsubscribe(onChange) {
    var id = subscriptions.indexOf(onChange);
    if (id >= 0) subscriptions.splice(id, 1);
  };

  var subscribe = function subscribe(onChange) {
    subscriptions.push(onChange);
    var dispose = function dispose() {
      return unsubscribe(onChange);
    };
    return { dispose: dispose };
  };

  var push = function push(value) {
    subscriptions.forEach(function (subscription) {
      return subscription(value);
    });
  };

  return { subscribe: subscribe, push: push, unsubscribe: unsubscribe };
}

module.exports = transmitter;
},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isPromise = isPromise;
exports.eachObject = eachObject;
exports.assign = assign;
var isFunction = function isFunction(x) {
  return typeof x === 'function';
};

exports.isFunction = isFunction;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function eachObject(f, o) {
  o.forEach(function (from) {
    Object.keys(Object(from)).forEach(function (key) {
      f(key, from[key]);
    });
  });
}

function assign(target) {
  for (var _len = arguments.length, source = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    source[_key - 1] = arguments[_key];
  }

  eachObject(function (key, value) {
    return target[key] = value;
  }, source);
  return target;
}
},{}],22:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9hY3Rpb25zL0xheWVyc0FjdGlvbnMuanMiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9hbHQuanMiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9hcHAuanMiLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9jb21wb25lbnRzL0xheWVyTGlzdC9MYXllci5qc3giLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9jb21wb25lbnRzL0xheWVyTGlzdC9MYXllci5tYXJrZXIuanN4IiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy9Qcm9qZWN0cy9zdW5nYXRlL3BhdGggZmluZGVyL3JlYWN0LXRlc3QtdGFzay9hc3NldHMvY29tcG9uZW50cy9MYXllckxpc3QvTGF5ZXJzLmNvbXBvbmVudC5qc3giLCIvVXNlcnMvQWRtaW4vRG9jdW1lbnRzL1Byb2plY3RzL3N1bmdhdGUvcGF0aCBmaW5kZXIvcmVhY3QtdGVzdC10YXNrL2Fzc2V0cy9zb3VyY2VzL0xheWVyc1NvdXJjZS5qcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvc3VuZ2F0ZS9wYXRoIGZpbmRlci9yZWFjdC10ZXN0LXRhc2svYXNzZXRzL3N0b3Jlcy9MYXllcnNTdG9yZS5qcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvc3VuZ2F0ZS9wYXRoIGZpbmRlci9yZWFjdC10ZXN0LXRhc2svYXNzZXRzL3N0dWIvc3R1Yi5qcyIsIm5vZGVfbW9kdWxlcy9hbHQvbGliL2FjdGlvbnMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYWx0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9hbHQvbGliL3N0b3JlL0FsdFN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2FsdC9saWIvc3RvcmUvU3RvcmVNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9hbHQvbGliL3N0b3JlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FsdC9saWIvdXRpbHMvQWx0VXRpbHMuanMiLCJub2RlX21vZHVsZXMvYWx0L2xpYi91dGlscy9TdGF0ZUZ1bmN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9hbHQvbm9kZV9tb2R1bGVzL2ZsdXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYWx0L25vZGVfbW9kdWxlcy9mbHV4L2xpYi9EaXNwYXRjaGVyLmpzIiwibm9kZV9tb2R1bGVzL2FsdC9ub2RlX21vZHVsZXMvZmx1eC9saWIvaW52YXJpYW50LmpzIiwibm9kZV9tb2R1bGVzL2FsdC9ub2RlX21vZHVsZXMvdHJhbnNtaXR0ZXIvZGlzdC90cmFuc21pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9hbHQvdXRpbHMvZnVuY3Rpb25zLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUNDQXlCLDRCQUE0Qjs7OztBQUVyRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OztJQUt0QixhQUFhO1dBQWIsYUFBYTswQkFBYixhQUFhOzs7ZUFBYixhQUFhOzs7Ozs7OztXQU9MLHNCQUFDLE9BQU8sRUFBRTtBQUNwQixVQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hCOzs7Ozs7Ozs7V0FPUyxvQkFBQyxHQUFHLEVBQUU7OztBQUNkLHlDQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDcEMsY0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ2pDLENBQUMsQ0FBQztLQUNKOzs7U0FwQkcsYUFBYTs7O3FCQXVCSixHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7Ozs7O0FDOUIvQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7Ozs7cURDSEMsNkNBQTZDOzs7Ozs7O0FBS25FLEtBQUssQ0FBQyxNQUFNLENBQ1YsMEVBQVcsR0FBRyxFQUFFLDBCQUEwQixBQUFDLEdBQUUsRUFDN0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGbUIsS0FBSztZQUFMLEtBQUs7O0FBQ2IsV0FEUSxLQUFLLEdBQ1Y7MEJBREssS0FBSzs7QUFFdEIsK0JBRmlCLEtBQUssNkNBRWQ7Ozs7QUFJUixRQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN6Qzs7Ozs7Ozs7O2VBUGtCLEtBQUs7O1dBNEJsQixrQkFBRztBQUNQLFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0FBQ2pDLHNCQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO09BQ3BDLENBQUMsQ0FBQzs7QUFFSCxhQUNFOztVQUFLLFNBQVMsRUFBRSxHQUFHLEFBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDLEFBQUM7UUFDN0YsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxBQUFDLEdBQUU7T0FDdkIsQ0FDTjtLQUNIOzs7V0F4QnFCO0FBQ3BCLGNBQVEsRUFBRSxLQUFLO0FBQ2Ysa0JBQVksRUFBRSxDQUFDO0tBQ2hCOzs7Ozs7Ozs7V0FLa0I7QUFDakIsU0FBRyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDdEMsY0FBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtBQUM5QixpQkFBVyxFQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtLQUNyQzs7OztTQTFCa0IsS0FBSztHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBN0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUwsV0FBVztZQUFYLFdBQVc7O1dBQVgsV0FBVzswQkFBWCxXQUFXOzsrQkFBWCxXQUFXOzs7ZUFBWCxXQUFXOztXQVl4QixrQkFBRztBQUNQLFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztBQUU5QixhQUNFOztVQUFLLFNBQVMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQUFBQztRQUM1RCw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEFBQUMsRUFBQyxHQUFHLEVBQUMsY0FBYyxHQUFFO09BQzdDLENBQ047S0FDSDs7Ozs7Ozs7Ozs7V0Faa0I7QUFDakIsY0FBUSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7S0FDNUM7Ozs7U0FWa0IsV0FBVztHQUFTLEtBQUssQ0FBQyxTQUFTOztxQkFBbkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNOZCxhQUFhOzs7OzhCQUNQLG9CQUFvQjs7OzttQ0FDcEIsNkJBQTZCOzs7O3NDQUMzQixnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7O0lBV3JDLFNBQVM7WUFBVCxTQUFTOztXQUFULFNBQVM7OzswQkFBVCxTQUFTOzsrQkFBVCxTQUFTOztTQVE1QixLQUFLLEdBQUc7QUFDTixZQUFNLEVBQUUsSUFBSTtLQUNiOztTQTJERCxTQUFTLEdBQUcsVUFBQyxJQUFJLEVBQUs7QUFDcEIsWUFBSyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7S0FDdEM7OztlQXZFa0IsU0FBUzs7V0FZWCw2QkFBRzs7OztBQUlsQiwwQ0FBYyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0FBR3pDLHVDQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEM7OztXQUVtQixnQ0FBRyxFQUd0Qjs7Ozs7Ozs7Ozs7QUFBQTs7O1dBU1Msb0JBQUMsR0FBRyxFQUFFO0FBQ2QsYUFBTyw0REFBYSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQUFBQyxJQUFLLEdBQUcsRUFBSSxDQUFDO0tBQ2xEOzs7Ozs7Ozs7Ozs7V0FVUSxtQkFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLGFBQU8sc0RBQU8sV0FBVyxFQUFFLEtBQUssQUFBQyxFQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsT0FBTyxBQUFDLElBQUssR0FBRyxFQUFJLENBQUM7S0FDMUU7Ozs7Ozs7Ozs7O1dBU2Esd0JBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUM3QixVQUFJLElBQUksRUFBRTtBQUNSLGVBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO2lCQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQ3ZEO0tBQ0Y7OztXQVlLLGtCQUFHO0FBQ1AsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDL0IsVUFBSSxNQUFNLFlBQUEsQ0FBQztBQUNYLFVBQUksT0FBTyxZQUFBLENBQUM7O0FBRVosVUFBSSxDQUFDLE1BQU0sRUFBRTtBQUFFLGVBQU87Ozs7U0FBb0IsQ0FBQztPQUFFOztBQUU3QyxZQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1RCxhQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFL0QsYUFDRTs7VUFBSyxTQUFTLEVBQUMsZUFBZTtRQUMzQixNQUFNO1FBQ04sT0FBTztPQUNKLENBQ047S0FDSDs7O1NBekZrQixTQUFTO0dBQVMsS0FBSyxDQUFDLFNBQVM7O3FCQUFqQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDZGIsaUJBQWlCOzs7Ozs7O0FBS2xDLElBQUksWUFBWSxHQUFHOzs7Ozs7O0FBT2pCLE1BQUksRUFBRSxjQUFTLEdBQUcsRUFBRTtBQUNsQixXQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMzQyxnQkFBVSxDQUFDO2VBQUssT0FBTyx5QkFBTTtPQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdEMsQ0FBQyxDQUFDO0dBQ0o7Q0FDRixDQUFDOztxQkFFYSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O3NDQ25CQyw2QkFBNkI7Ozs7QUFFekQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7SUFLdEIsV0FBVztBQUNKLFdBRFAsV0FBVyxHQUNEOzBCQURWLFdBQVc7O0FBRWIsUUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWpCLFFBQUksQ0FBQyxhQUFhLENBQUM7QUFDakIsd0JBQWtCLEVBQUUsb0NBQWdCLGFBQWE7S0FDbEQsQ0FBQyxDQUFDO0dBQ0o7O2VBUEcsV0FBVzs7V0FTRyw0QkFBQyxNQUFNLEVBQUU7QUFDekIsVUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7OztTQVhHLFdBQVc7OztxQkFjRixHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Ozs7Ozs7OztxQkNyQjNDO0FBQ2IsUUFBTSxFQUFFLENBQ047QUFDRSxPQUFHLEVBQUUsbUJBQW1CO0FBQ3hCLFdBQU8sRUFBRSxDQUFDO0FBQ1YsWUFBUSxFQUFFLEtBQUs7R0FDaEIsRUFDRDtBQUNFLE9BQUcsRUFBRSxvQkFBb0I7QUFDekIsV0FBTyxFQUFFLElBQUk7QUFDYixZQUFRLEVBQUUsS0FBSztHQUNoQixFQUNEO0FBQ0UsT0FBRyxFQUFFLG9CQUFvQjtBQUN6QixXQUFPLEVBQUUsSUFBSTtBQUNiLFlBQVEsRUFBRSxLQUFLO0dBQ2hCLEVBQ0Q7QUFDRSxPQUFHLEVBQUUsb0JBQW9CO0FBQ3pCLFdBQU8sRUFBRSxJQUFJO0FBQ2IsWUFBUSxFQUFFLEtBQUs7R0FDaEIsQ0FDRjtBQUNELFNBQU8sRUFBRSxDQUNQO0FBQ0UsWUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDO0FBQy9CLE9BQUcsRUFBRSw0QkFBNEI7R0FDbEMsRUFDRDtBQUNFLFlBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQztBQUMvQixPQUFHLEVBQUUsNkJBQTZCO0dBQ25DLENBQ0Y7Q0FDRjs7OztBQ2pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IExheWVyc1NvdXJjZSBmcm9tICcuLi9zb3VyY2VzL0xheWVyc1NvdXJjZS5qcyc7XG5cbnZhciBhbHQgPSByZXF1aXJlKCcuLi9hbHQnKTtcblxuLyoqXG4gKiBEZXNjcmliZSBsYXllciBjb21wb25lbnRzIGFjdGlvbnNcbiAqL1xuY2xhc3MgTGF5ZXJzQWN0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdG9yZSBieSByZWNpdmVkIGRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50IC0gZGF0YSB3aXRoIHNvdXJjZXMgZm9yIGxheWVyIGNvbXBvbmVudHMuXG4gICAqL1xuICB1cGRhdGVTb3VyY2UoY29udGVudCkge1xuICAgIHRoaXMuZGlzcGF0Y2goY29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBleHRlcm5hbCBzb3VyY2VzIGZvciB1cmwgYWRkcmVzcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIHVybCBhZGRyZXNzIHRvIGV4dGVybmFsIHNvdXJjZSBmb3IgbGF5ZXJzIGNvbXBvbmVudHMuXG4gICAqL1xuICBsb2FkU291cmNlKHVybCkge1xuICAgIExheWVyc1NvdXJjZS5sb2FkKHVybCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5hY3Rpb25zLnVwZGF0ZVNvdXJjZShkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhMYXllcnNBY3Rpb25zKTsiLCJ2YXIgQWx0ID0gcmVxdWlyZSgnYWx0Jyk7XG52YXIgYWx0ID0gbmV3IEFsdCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsdDsiLCJpbXBvcnQgTGF5ZXJMaXN0IGZyb20gJy4vY29tcG9uZW50cy9MYXllckxpc3QvTGF5ZXJzLmNvbXBvbmVudC5qc3gnO1xuXG4vKipcbiAqIFJlbmRlciBhcHBsaWNhdGlvbiBjb21wb25lbnRzXG4gKi9cblJlYWN0LnJlbmRlcihcbiAgPExheWVyTGlzdCBVUkw9eydsaW5rIHRvIGV4dGVybmFsIGNvbnRlbnQnfS8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpXG4pOyIsIi8qKlxuICogRGVzY3JpYmUgdGhlIGxheWVyIGNvbXBvbmVudC5cbiAqXG4gKiBAbmFtZSBMYXllclxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBBZGQgbWV0aG9kIHRoYXQgcHJvY2Vzc2luZyBjbGFzcyBuYW1lcyBnZW5lcmF0aW9uXG4gICAgICovXG4gICAgdGhpcy5jbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuICB9XG4gIC8qKlxuICAgKiBEZWZhdWx0IHZhbHVlcyBvZiBsYXllciBkaXNwbGF5aW5nIG1vZGUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQGRlZmF1bHRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNIaWRkZW46IGZhbHNlLFxuICAgIG9wYWNpdHlWYWx1ZTogMVxuICB9XG4gIC8qKlxuICAgKiBSZWFjdCB2YWxpZGF0aW9uLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc0hpZGRlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb3JkZXJOdW1iZXI6ICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNscyA9IHRoaXMuY2xhc3NOYW1lcygnbGF5ZXInLCB7XG4gICAgICAnaGlkZGVuLWxheWVyJzogdGhpcy5wcm9wcy5pc0hpZGRlblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN9IHN0eWxlPXt7b3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5VmFsdWUsIHpJbmRleDogdGhpcy5wcm9wcy5vcmRlck51bWJlcn19PlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zcmN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iLCIvKipcbiAqIERlc2NyaWJlIHRoZSBsYXllcidzIG1hcmtlciBjb21wb25lbnRcbiAqXG4gKiBAbmFtZSBMYXllck1hcmtlclxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyTWFya2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFJlYWN0IHZhbGlkYXRlIHRoYXQgb2JqZWN0IHdpdGggY29vcmRpbmF0ZXMgaXMgcmVxdWlyZWQuXG4gICAqXG4gICAqIEBuYW1lIExheWVyTWFya2VyXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHBvc2l0aW9uOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcG9zID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFya2VyJyBzdHlsZT17e2xlZnQ6IHBvcy5sZWZ0LCB0b3A6IHBvcy50b3B9fT5cbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaW1nU3JjfSBhbHQ9J21hcmtlciBpbWFnZScvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBMYXllciBmcm9tICcuL0xheWVyLmpzeCc7XG5pbXBvcnQgTGF5ZXJNYXJrZXIgZnJvbSAnLi9MYXllci5tYXJrZXIuanN4JztcbmltcG9ydCBMYXllcnNTdG9yZSBmcm9tICcuLi8uLi9zdG9yZXMvTGF5ZXJzU3RvcmUuanMnO1xuaW1wb3J0IExheWVyc0FjdGlvbnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9MYXllcnNBY3Rpb25zLmpzJztcblxuLyoqXG4gKiBEZXNjcmliZSB0aGUgbGlzdCB3aXRoIGxheWVycy5cbiAqXG4gKiBAbmFtZSBMYXllckxpc3RcbiAqIEBjbGFzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBSZW5kZXIgY29udGVudCBmcm9tIGF0dHJpYnV0ZSBvciBsb2FkIGV4dGVybmFsIGNvbnRlbnQgYnkgVVJMIGZyb20gYXR0cmlidXRlLlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFNvdXJjZSB0byByZW5kZXIgdGhhdCBnaXZlbiBmcm9tIGF0dHJpYnV0ZS5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKiBAZGVmYXVsdFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHN0YXRlID0ge1xuICAgIHNvdXJjZTogbnVsbFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLyoqXG4gICAgICogTG9hZCBleHRlcm5hbCBzb3VyY2UgYnkgcmVjZWl2ZWQgVVJMXG4gICAgICovXG4gICAgTGF5ZXJzQWN0aW9ucy5sb2FkU291cmNlKHRoaXMucHJvcHMuVVJMKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byB0aGUgU3RvcmUgY2hhbmdlIGV2ZW50XG4gICAgTGF5ZXJzU3RvcmUubGlzdGVuKHRoaXMuX29uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFVuc3Vic2NyaWJlIHdoZW4gY29tcG9uZW50IHJlbW92ZSBmcm9tIERPTVxuICAgIC8vTGF5ZXJzU3RvcmUudW5saXN0ZW4odGhpcy5fb25DaGFuZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciByZWFjdCBjb21wb25lbnQ6IExheWVyTWFya2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0IC0gT3B0aW9ucyB0byByZW5kZXIuXG4gICAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9IExheWVyTWFya2VyIGNvbXBvbmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldE1hcmtlcihvcHQpIHtcbiAgICByZXR1cm4gPExheWVyTWFya2VyIGltZ1NyYz17b3B0LmltZ30gey4uLm9wdH0gLz47XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIHJlYWN0IGNvbXBvbmVudDogTGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHQgLSBPcHRpb25zIHRvIHJlbmRlci5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gTGF5ZXIgb3JkZXIgbnVtYmVyLlxuICAgKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fSBMYXllciBjb21wb25lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRMYXllcihvcHQsIGluZGV4KSB7XG4gICAgcmV0dXJuIDxMYXllciBvcmRlck51bWJlcj17aW5kZXh9IG9wYWNpdHlWYWx1ZT17b3B0Lm9wYWNpdHl9IHsuLi5vcHR9IC8+O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBpbml0aWF0ZSBSZWFjdCBjb21wb25lbnQgcmVuZGVyaW5nIHdpdGggYXBwcm9wcmlhdGUgY29udGVudFxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gQXJyYXkgd2l0aCBkYXRhIHRvIHJlbmRlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBNZXRob2QgdGhhdCBzaG91bGQgIHJlbmRlciBjb21wb25lbnQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Q29tcG9uZW50cyhkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKG9wdCwgaW5kZXgpID0+IGNhbGxiYWNrKG9wdCwgaW5kZXgpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgd2hlbiBzdG9yZSBoYXMgdXBkYXRlZC4gQW5kIHNldCB1cGRhdGVkIHNvdXJjZSB0byBjb21wb25lbnQgc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gc291cmNlIGZvciBjb21wb25lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c291cmNlOiBkYXRhLmxheWVyc30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzb3VyY2UgPSB0aGlzLnN0YXRlLnNvdXJjZTtcbiAgICBsZXQgbGF5ZXJzO1xuICAgIGxldCBtYXJrZXJzO1xuXG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuIDxwPlByb2Nlc3NpbmcuLi48L3A+OyB9XG5cbiAgICBsYXllcnMgPSB0aGlzLl9nZXRDb21wb25lbnRzKHNvdXJjZS5sYXllcnMsIHRoaXMuX2dldExheWVyKTtcbiAgICBtYXJrZXJzID0gdGhpcy5fZ2V0Q29tcG9uZW50cyhzb3VyY2UubWFya2VycywgdGhpcy5fZ2V0TWFya2VyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5ZXJzLWhvbGRlcic+XG4gICAgICAgIHtsYXllcnN9XG4gICAgICAgIHttYXJrZXJzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBzdHViIGZyb20gJy4uL3N0dWIvc3R1Yi5qcyc7XG5cbi8qKlxuICogRGVzY3JpYmUgZ2V0dGVyIGZvciBsYXllcnMgc291cmNlcy5cbiAqL1xudmFyIExheWVyc1NvdXJjZSA9IHtcblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgZW11bGF0ZSBsb2FkaW5nIG9mIGxheWVycyBjb21wb25lbnQgc291cmNlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBsb2FkOiBmdW5jdGlvbih1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4gcmVzb2x2ZShzdHViKSwgMTAwMCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyc1NvdXJjZTsiLCJpbXBvcnQgTG9jYXRpb25BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvTGF5ZXJzQWN0aW9ucy5qcyc7XG5cbnZhciBhbHQgPSByZXF1aXJlKCcuLi9hbHQnKTtcblxuLyoqXG4gKiBEZXNjcmliZSBzdG9yZSB3aXRoIHNvdXJjZSBmb3IgbGF5ZXJzIGNvbXBvbmVudHMuXG4gKi9cbmNsYXNzIExheWVyc1N0b3JlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sYXllcnMgPSBbXTtcblxuICAgIHRoaXMuYmluZExpc3RlbmVycyh7XG4gICAgICBoYW5kbGVMYXllcnNVcGRhdGU6IExvY2F0aW9uQWN0aW9ucy5VUERBVEVfU09VUkNFXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVMYXllcnNVcGRhdGUobGF5ZXJzKSB7XG4gICAgdGhpcy5sYXllcnMgPSBsYXllcnM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKExheWVyc1N0b3JlLCAnTGF5ZXJzU3RvcmUnKTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxheWVyczogW1xuICAgIHtcbiAgICAgIHNyYzogJ2ltYWdlcy9za2l0Y2guanBnJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBpc0hpZGRlbjogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogJ2ltYWdlcy9sYXllci0xLnBuZycsXG4gICAgICBvcGFjaXR5OiAwLjU1LFxuICAgICAgaXNIaWRkZW46IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6ICdpbWFnZXMvbGF5ZXItMi5wbmcnLFxuICAgICAgb3BhY2l0eTogMC42NSxcbiAgICAgIGlzSGlkZGVuOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiAnaW1hZ2VzL2xheWVyLTMucG5nJyxcbiAgICAgIG9wYWNpdHk6IDAuMzUsXG4gICAgICBpc0hpZGRlbjogZmFsc2VcbiAgICB9XG4gIF0sXG4gIG1hcmtlcnM6IFtcbiAgICB7XG4gICAgICBwb3NpdGlvbjoge2xlZnQ6IDUwMCwgdG9wOiAyNjB9LFxuICAgICAgaW1nOiAnaW1hZ2VzL21hcC1tYXJrZXItaWNvbi5wbmcnXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3NpdGlvbjoge2xlZnQ6IDcyNCwgdG9wOiAxMjN9LFxuICAgICAgaW1nOiAnaW1hZ2VzL21hcC1tYXJrZXItaWNvbjIucG5nJ1xuICAgIH1cbiAgXVxufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1ha2VBY3Rpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX3V0aWxzRnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZnVuY3Rpb25zJyk7XG5cbnZhciBmbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0Z1bmN0aW9ucyk7XG5cbnZhciBfdXRpbHNBbHRVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL0FsdFV0aWxzJyk7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0FsdFV0aWxzKTtcblxudmFyIEFsdEFjdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFsdEFjdGlvbihhbHQsIGlkLCBhY3Rpb24sIGFjdGlvbnMsIGFjdGlvbkRldGFpbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWx0QWN0aW9uKTtcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLl9kaXNwYXRjaCA9IGFjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgdGhpcy5hY3Rpb25EZXRhaWxzID0gYWN0aW9uRGV0YWlscztcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbHRBY3Rpb24sIFt7XG4gICAga2V5OiAnZGlzcGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaChkYXRhKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoZWQgPSB0cnVlO1xuICAgICAgdGhpcy5hbHQuZGlzcGF0Y2godGhpcy5pZCwgZGF0YSwgdGhpcy5hY3Rpb25EZXRhaWxzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWx0QWN0aW9uO1xufSkoKTtcblxuZnVuY3Rpb24gbWFrZUFjdGlvbihhbHQsIG5hbWVzcGFjZSwgbmFtZSwgaW1wbGVtZW50YXRpb24sIG9iaikge1xuICB2YXIgaWQgPSB1dGlscy51aWQoYWx0Ll9hY3Rpb25zUmVnaXN0cnksIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuICBhbHQuX2FjdGlvbnNSZWdpc3RyeVtpZF0gPSAxO1xuXG4gIHZhciBkYXRhID0geyBpZDogaWQsIG5hbWVzcGFjZTogbmFtZXNwYWNlLCBuYW1lOiBuYW1lIH07XG5cbiAgLy8gV3JhcCB0aGUgYWN0aW9uIHNvIHdlIGNhbiBwcm92aWRlIGEgZGlzcGF0Y2ggbWV0aG9kXG4gIHZhciBuZXdBY3Rpb24gPSBuZXcgQWx0QWN0aW9uKGFsdCwgaWQsIGltcGxlbWVudGF0aW9uLCBvYmosIGRhdGEpO1xuXG4gIHZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gYWx0LmRpc3BhdGNoKGlkLCBwYXlsb2FkLCBkYXRhKTtcbiAgfTtcblxuICAvLyB0aGUgYWN0aW9uIGl0c2VsZlxuICB2YXIgYWN0aW9uID0gZnVuY3Rpb24gYWN0aW9uKCkge1xuICAgIG5ld0FjdGlvbi5kaXNwYXRjaGVkID0gZmFsc2U7XG4gICAgdmFyIHJlc3VsdCA9IG5ld0FjdGlvbi5fZGlzcGF0Y2guYXBwbHkobmV3QWN0aW9uLCBhcmd1bWVudHMpO1xuICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBwcm9taXNlcyBzaG91bGQgbm90IGJlIGRpc3BhdGNoZWRcbiAgICBpZiAoIW5ld0FjdGlvbi5kaXNwYXRjaGVkICYmIHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmICFmbi5pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgaWYgKGZuLmlzRnVuY3Rpb24ocmVzdWx0KSkge1xuICAgICAgICByZXN1bHQoZGlzcGF0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgYWN0aW9uLmRlZmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbmV3QWN0aW9uLl9kaXNwYXRjaC5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcbiAgfTtcbiAgYWN0aW9uLmlkID0gaWQ7XG4gIGFjdGlvbi5kYXRhID0gZGF0YTtcblxuICAvLyBlbnN1cmUgZWFjaCByZWZlcmVuY2UgaXMgdW5pcXVlIGluIHRoZSBuYW1lc3BhY2VcbiAgdmFyIGNvbnRhaW5lciA9IGFsdC5hY3Rpb25zW25hbWVzcGFjZV07XG4gIHZhciBuYW1lc3BhY2VJZCA9IHV0aWxzLnVpZChjb250YWluZXIsIG5hbWUpO1xuICBjb250YWluZXJbbmFtZXNwYWNlSWRdID0gYWN0aW9uO1xuXG4gIHJldHVybiBhY3Rpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qZ2xvYmFsIHdpbmRvdyovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94MywgX3g0LCBfeDUpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gzLCBwcm9wZXJ0eSA9IF94NCwgcmVjZWl2ZXIgPSBfeDU7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3gzID0gcGFyZW50OyBfeDQgPSBwcm9wZXJ0eTsgX3g1ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTsgcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgX2ZsdXggPSByZXF1aXJlKCdmbHV4Jyk7XG5cbnZhciBfdXRpbHNTdGF0ZUZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vdXRpbHMvU3RhdGVGdW5jdGlvbnMnKTtcblxudmFyIFN0YXRlRnVuY3Rpb25zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzU3RhdGVGdW5jdGlvbnMpO1xuXG52YXIgX3V0aWxzRnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvZnVuY3Rpb25zJyk7XG5cbnZhciBmbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0Z1bmN0aW9ucyk7XG5cbnZhciBfc3RvcmUgPSByZXF1aXJlKCcuL3N0b3JlJyk7XG5cbnZhciBzdG9yZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zdG9yZSk7XG5cbnZhciBfdXRpbHNBbHRVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvQWx0VXRpbHMnKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzQWx0VXRpbHMpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgQWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWx0KCkge1xuICAgIHZhciBjb25maWcgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFsdCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnNlcmlhbGl6ZSA9IGNvbmZpZy5zZXJpYWxpemUgfHwgSlNPTi5zdHJpbmdpZnk7XG4gICAgdGhpcy5kZXNlcmlhbGl6ZSA9IGNvbmZpZy5kZXNlcmlhbGl6ZSB8fCBKU09OLnBhcnNlO1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGNvbmZpZy5kaXNwYXRjaGVyIHx8IG5ldyBfZmx1eC5EaXNwYXRjaGVyKCk7XG4gICAgdGhpcy5iYXRjaGluZ0Z1bmN0aW9uID0gY29uZmlnLmJhdGNoaW5nRnVuY3Rpb24gfHwgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9O1xuICAgIHRoaXMuYWN0aW9ucyA9IHsgZ2xvYmFsOiB7fSB9O1xuICAgIHRoaXMuc3RvcmVzID0ge307XG4gICAgdGhpcy5zdG9yZVRyYW5zZm9ybXMgPSBjb25maWcuc3RvcmVUcmFuc2Zvcm1zIHx8IFtdO1xuICAgIHRoaXMudHJhcEFzeW5jID0gZmFsc2U7XG4gICAgdGhpcy5fYWN0aW9uc1JlZ2lzdHJ5ID0ge307XG4gICAgdGhpcy5faW5pdFNuYXBzaG90ID0ge307XG4gICAgdGhpcy5fbGFzdFNuYXBzaG90ID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWx0LCBbe1xuICAgIGtleTogJ2Rpc3BhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uLCBkYXRhLCBkZXRhaWxzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmJhdGNoaW5nRnVuY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE4KS5zdWJzdHIoMiwgMTYpO1xuICAgICAgICByZXR1cm4gX3RoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgZGV0YWlsczogZGV0YWlsc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVVuc2F2ZWRTdG9yZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVVuc2F2ZWRTdG9yZShTdG9yZU1vZGVsKSB7XG4gICAgICB2YXIga2V5ID0gU3RvcmVNb2RlbC5kaXNwbGF5TmFtZSB8fCAnJztcbiAgICAgIHN0b3JlLmNyZWF0ZVN0b3JlQ29uZmlnKHRoaXMuY29uZmlnLCBTdG9yZU1vZGVsKTtcbiAgICAgIHZhciBTdG9yZSA9IHN0b3JlLnRyYW5zZm9ybVN0b3JlKHRoaXMuc3RvcmVUcmFuc2Zvcm1zLCBTdG9yZU1vZGVsKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4uaXNGdW5jdGlvbihTdG9yZSkgPyBzdG9yZS5jcmVhdGVTdG9yZUZyb21DbGFzcy5hcHBseShzdG9yZSwgW3RoaXMsIFN0b3JlLCBrZXldLmNvbmNhdChhcmdzKSkgOiBzdG9yZS5jcmVhdGVTdG9yZUZyb21PYmplY3QodGhpcywgU3RvcmUsIGtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlU3RvcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdG9yZShTdG9yZU1vZGVsLCBpZGVuKSB7XG4gICAgICB2YXIga2V5ID0gaWRlbiB8fCBTdG9yZU1vZGVsLmRpc3BsYXlOYW1lIHx8IFN0b3JlTW9kZWwubmFtZSB8fCAnJztcbiAgICAgIHN0b3JlLmNyZWF0ZVN0b3JlQ29uZmlnKHRoaXMuY29uZmlnLCBTdG9yZU1vZGVsKTtcbiAgICAgIHZhciBTdG9yZSA9IHN0b3JlLnRyYW5zZm9ybVN0b3JlKHRoaXMuc3RvcmVUcmFuc2Zvcm1zLCBTdG9yZU1vZGVsKTtcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dCovXG4gICAgICBpZiAobW9kdWxlLmhvdCkgZGVsZXRlIHRoaXMuc3RvcmVzW2tleV07XG5cbiAgICAgIGlmICh0aGlzLnN0b3Jlc1trZXldIHx8ICFrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmVzW2tleV0pIHtcbiAgICAgICAgICB1dGlscy53YXJuKCdBIHN0b3JlIG5hbWVkICcgKyBrZXkgKyAnIGFscmVhZHkgZXhpc3RzLCBkb3VibGUgY2hlY2sgeW91ciBzdG9yZSAnICsgJ25hbWVzIG9yIHBhc3MgaW4geW91ciBvd24gY3VzdG9tIGlkZW50aWZpZXIgZm9yIGVhY2ggc3RvcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1dGlscy53YXJuKCdTdG9yZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSB1dGlscy51aWQodGhpcy5zdG9yZXMsIGtleSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlSW5zdGFuY2UgPSBmbi5pc0Z1bmN0aW9uKFN0b3JlKSA/IHN0b3JlLmNyZWF0ZVN0b3JlRnJvbUNsYXNzLmFwcGx5KHN0b3JlLCBbdGhpcywgU3RvcmUsIGtleV0uY29uY2F0KGFyZ3MpKSA6IHN0b3JlLmNyZWF0ZVN0b3JlRnJvbU9iamVjdCh0aGlzLCBTdG9yZSwga2V5KTtcblxuICAgICAgdGhpcy5zdG9yZXNba2V5XSA9IHN0b3JlSW5zdGFuY2U7XG4gICAgICBTdGF0ZUZ1bmN0aW9ucy5zYXZlSW5pdGlhbFNuYXBzaG90KHRoaXMsIGtleSk7XG5cbiAgICAgIHJldHVybiBzdG9yZUluc3RhbmNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dlbmVyYXRlQWN0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9ucygpIHtcbiAgICAgIHZhciBhY3Rpb25zID0geyBuYW1lOiAnZ2xvYmFsJyB9O1xuXG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFjdGlvbk5hbWVzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYWN0aW9uTmFtZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWN0aW9ucyhhY3Rpb25OYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgYWN0aW9uKSB7XG4gICAgICAgIG9ialthY3Rpb25dID0gdXRpbHMuZGlzcGF0Y2hJZGVudGl0eTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIGFjdGlvbnMpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVBY3Rpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBY3Rpb24obmFtZSwgaW1wbGVtZW50YXRpb24sIG9iaikge1xuICAgICAgcmV0dXJuICgwLCBfYWN0aW9uczJbJ2RlZmF1bHQnXSkodGhpcywgJ2dsb2JhbCcsIG5hbWUsIGltcGxlbWVudGF0aW9uLCBvYmopO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZUFjdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBY3Rpb25zKEFjdGlvbnNDbGFzcykge1xuICAgICAgdmFyIF9hcmd1bWVudHMyID0gYXJndW1lbnRzLFxuICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBleHBvcnRPYmogPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgICB2YXIgYWN0aW9ucyA9IHt9O1xuICAgICAgdmFyIGtleSA9IHV0aWxzLnVpZCh0aGlzLl9hY3Rpb25zUmVnaXN0cnksIEFjdGlvbnNDbGFzcy5kaXNwbGF5TmFtZSB8fCBBY3Rpb25zQ2xhc3MubmFtZSB8fCAnVW5rbm93bicpO1xuXG4gICAgICBpZiAoZm4uaXNGdW5jdGlvbihBY3Rpb25zQ2xhc3MpKSB7XG4gICAgICAgIHZhciBfbGVuNCwgYXJnc0ZvckNvbnN0cnVjdG9yLCBfa2V5NDtcblxuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFzc2lnbihhY3Rpb25zLCB1dGlscy5nZXRJbnRlcm5hbE1ldGhvZHMoQWN0aW9uc0NsYXNzLCB0cnVlKSk7XG5cbiAgICAgICAgICB2YXIgQWN0aW9uc0dlbmVyYXRvciA9IChmdW5jdGlvbiAoX0FjdGlvbnNDbGFzcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gQWN0aW9uc0dlbmVyYXRvcigpIHtcbiAgICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbnNHZW5lcmF0b3IpO1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWN0aW9uc0dlbmVyYXRvci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2luaGVyaXRzKEFjdGlvbnNHZW5lcmF0b3IsIF9BY3Rpb25zQ2xhc3MpO1xuXG4gICAgICAgICAgICBfY3JlYXRlQ2xhc3MoQWN0aW9uc0dlbmVyYXRvciwgW3tcbiAgICAgICAgICAgICAga2V5OiAnZ2VuZXJhdGVBY3Rpb25zJyxcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlQWN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFjdGlvbk5hbWVzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWVzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uTmFtZSkge1xuICAgICAgICAgICAgICAgICAgYWN0aW9uc1thY3Rpb25OYW1lXSA9IHV0aWxzLmRpc3BhdGNoSWRlbnRpdHk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcblxuICAgICAgICAgICAgcmV0dXJuIEFjdGlvbnNHZW5lcmF0b3I7XG4gICAgICAgICAgfSkoQWN0aW9uc0NsYXNzKTtcblxuICAgICAgICAgIGZvciAoX2xlbjQgPSBfYXJndW1lbnRzMi5sZW5ndGgsIGFyZ3NGb3JDb25zdHJ1Y3RvciA9IEFycmF5KF9sZW40ID4gMiA/IF9sZW40IC0gMiA6IDApLCBfa2V5NCA9IDI7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgICAgIGFyZ3NGb3JDb25zdHJ1Y3Rvcltfa2V5NCAtIDJdID0gX2FyZ3VtZW50czJbX2tleTRdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZuLmFzc2lnbihhY3Rpb25zLCBuZXcgKF9iaW5kLmFwcGx5KEFjdGlvbnNHZW5lcmF0b3IsIFtudWxsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3NGb3JDb25zdHJ1Y3RvcikpKSkoKSk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5hc3NpZ24oYWN0aW9ucywgQWN0aW9uc0NsYXNzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hY3Rpb25zW2tleV0gPSB0aGlzLmFjdGlvbnNba2V5XSB8fCB7fTtcblxuICAgICAgZm4uZWFjaE9iamVjdChmdW5jdGlvbiAoYWN0aW9uTmFtZSwgYWN0aW9uKSB7XG4gICAgICAgIGlmICghZm4uaXNGdW5jdGlvbihhY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBhY3Rpb25cbiAgICAgICAgZXhwb3J0T2JqW2FjdGlvbk5hbWVdID0gKDAsIF9hY3Rpb25zMlsnZGVmYXVsdCddKShfdGhpczIsIGtleSwgYWN0aW9uTmFtZSwgYWN0aW9uLCBleHBvcnRPYmopO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIGEgY29uc3RhbnRcbiAgICAgICAgdmFyIGNvbnN0YW50ID0gdXRpbHMuZm9ybWF0QXNDb25zdGFudChhY3Rpb25OYW1lKTtcbiAgICAgICAgZXhwb3J0T2JqW2NvbnN0YW50XSA9IGV4cG9ydE9ialthY3Rpb25OYW1lXS5pZDtcbiAgICAgIH0sIFthY3Rpb25zXSk7XG4gICAgICByZXR1cm4gZXhwb3J0T2JqO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Rha2VTbmFwc2hvdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRha2VTbmFwc2hvdCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIHN0b3JlTmFtZXNbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gU3RhdGVGdW5jdGlvbnMuc25hcHNob3QodGhpcywgc3RvcmVOYW1lcyk7XG4gICAgICBmbi5hc3NpZ24odGhpcy5fbGFzdFNuYXBzaG90LCBzdGF0ZSk7XG4gICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoc3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JvbGxiYWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm9sbGJhY2soKSB7XG4gICAgICBTdGF0ZUZ1bmN0aW9ucy5zZXRBcHBTdGF0ZSh0aGlzLCB0aGlzLnNlcmlhbGl6ZSh0aGlzLl9sYXN0U25hcHNob3QpLCBmdW5jdGlvbiAoc3RvcmVJbnN0KSB7XG4gICAgICAgIHN0b3JlSW5zdC5saWZlY3ljbGUoJ3JvbGxiYWNrJyk7XG4gICAgICAgIHN0b3JlSW5zdC5lbWl0Q2hhbmdlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZWN5Y2xlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVjeWNsZSgpIHtcbiAgICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgc3RvcmVOYW1lcyA9IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICAgIHN0b3JlTmFtZXNbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWxTbmFwc2hvdCA9IHN0b3JlTmFtZXMubGVuZ3RoID8gU3RhdGVGdW5jdGlvbnMuZmlsdGVyU25hcHNob3RzKHRoaXMsIHRoaXMuX2luaXRTbmFwc2hvdCwgc3RvcmVOYW1lcykgOiB0aGlzLl9pbml0U25hcHNob3Q7XG5cbiAgICAgIFN0YXRlRnVuY3Rpb25zLnNldEFwcFN0YXRlKHRoaXMsIHRoaXMuc2VyaWFsaXplKGluaXRpYWxTbmFwc2hvdCksIGZ1bmN0aW9uIChzdG9yZUluc3QpIHtcbiAgICAgICAgc3RvcmVJbnN0LmxpZmVjeWNsZSgnaW5pdCcpO1xuICAgICAgICBzdG9yZUluc3QuZW1pdENoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmx1c2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc2VyaWFsaXplKFN0YXRlRnVuY3Rpb25zLnNuYXBzaG90KHRoaXMpKTtcbiAgICAgIHRoaXMucmVjeWNsZSgpO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Jvb3RzdHJhcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJvb3RzdHJhcChkYXRhKSB7XG4gICAgICBTdGF0ZUZ1bmN0aW9ucy5zZXRBcHBTdGF0ZSh0aGlzLCBkYXRhLCBmdW5jdGlvbiAoc3RvcmVJbnN0KSB7XG4gICAgICAgIHN0b3JlSW5zdC5saWZlY3ljbGUoJ2Jvb3RzdHJhcCcpO1xuICAgICAgICBzdG9yZUluc3QuZW1pdENoYW5nZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJlcGFyZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmUoc3RvcmVJbnN0LCBwYXlsb2FkKSB7XG4gICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgaWYgKCFzdG9yZUluc3QuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdTdG9yZSBwcm92aWRlZCBkb2VzIG5vdCBoYXZlIGEgbmFtZScpO1xuICAgICAgfVxuICAgICAgZGF0YVtzdG9yZUluc3QuZGlzcGxheU5hbWVdID0gcGF5bG9hZDtcbiAgICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZShkYXRhKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRBY3Rpb25zJyxcblxuICAgIC8vIEluc3RhbmNlIHR5cGUgbWV0aG9kcyBmb3IgaW5qZWN0aW5nIGFsdCBpbnRvIHlvdXIgYXBwbGljYXRpb24gYXMgY29udGV4dFxuXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFjdGlvbnMobmFtZSwgQWN0aW9uc0NsYXNzKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOSA+IDIgPyBfbGVuOSAtIDIgOiAwKSwgX2tleTkgPSAyOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWN0aW9uc1tuYW1lXSA9IEFycmF5LmlzQXJyYXkoQWN0aW9uc0NsYXNzKSA/IHRoaXMuZ2VuZXJhdGVBY3Rpb25zLmFwcGx5KHRoaXMsIEFjdGlvbnNDbGFzcykgOiB0aGlzLmNyZWF0ZUFjdGlvbnMuYXBwbHkodGhpcywgW0FjdGlvbnNDbGFzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGRTdG9yZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFN0b3JlKG5hbWUsIFN0b3JlTW9kZWwpIHtcbiAgICAgIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMTAgPiAyID8gX2xlbjEwIC0gMiA6IDApLCBfa2V5MTAgPSAyOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTEwIC0gMl0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jcmVhdGVTdG9yZS5hcHBseSh0aGlzLCBbU3RvcmVNb2RlbCwgbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBY3Rpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWN0aW9ucyhuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3Rpb25zW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFN0b3JlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmUobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVzW25hbWVdO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZGVidWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1ZyhuYW1lLCBhbHQpIHtcbiAgICAgIHZhciBrZXkgPSAnYWx0LmpzLm9yZyc7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93W2tleV0gPSB3aW5kb3dba2V5XSB8fCBbXTtcbiAgICAgICAgd2luZG93W2tleV0ucHVzaCh7IG5hbWU6IG5hbWUsIGFsdDogYWx0IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFsdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWx0O1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF91dGlsc0Z1bmN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucycpO1xuXG52YXIgZm4gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHNGdW5jdGlvbnMpO1xuXG52YXIgX3RyYW5zbWl0dGVyID0gcmVxdWlyZSgndHJhbnNtaXR0ZXInKTtcblxudmFyIF90cmFuc21pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc21pdHRlcik7XG5cbnZhciBBbHRTdG9yZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFsdFN0b3JlKGFsdCwgbW9kZWwsIHN0YXRlLCBTdG9yZU1vZGVsKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbHRTdG9yZSk7XG5cbiAgICB2YXIgbGlmZWN5Y2xlRXZlbnRzID0gbW9kZWwubGlmZWN5Y2xlRXZlbnRzO1xuICAgIHRoaXMudHJhbnNtaXR0ZXIgPSAoMCwgX3RyYW5zbWl0dGVyMlsnZGVmYXVsdCddKSgpO1xuICAgIHRoaXMubGlmZWN5Y2xlID0gZnVuY3Rpb24gKGV2ZW50LCB4KSB7XG4gICAgICBpZiAobGlmZWN5Y2xlRXZlbnRzW2V2ZW50XSkgbGlmZWN5Y2xlRXZlbnRzW2V2ZW50XS5wdXNoKHgpO1xuICAgIH07XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBtb2RlbC5kaXNwbGF5TmFtZTtcbiAgICB0aGlzLmJvdW5kTGlzdGVuZXJzID0gbW9kZWwuYm91bmRMaXN0ZW5lcnM7XG4gICAgdGhpcy5TdG9yZU1vZGVsID0gU3RvcmVNb2RlbDtcbiAgICB0aGlzLnJlZHVjZSA9IG1vZGVsLnJlZHVjZSB8fCBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfTtcblxuICAgIHZhciBvdXRwdXQgPSBtb2RlbC5vdXRwdXQgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG5cbiAgICB0aGlzLmVtaXRDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMudHJhbnNtaXR0ZXIucHVzaChvdXRwdXQoX3RoaXMuc3RhdGUpKTtcbiAgICB9O1xuXG4gICAgdmFyIGhhbmRsZURpc3BhdGNoID0gZnVuY3Rpb24gaGFuZGxlRGlzcGF0Y2goZiwgcGF5bG9hZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGYoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKG1vZGVsLmhhbmRsZXNPd25FcnJvcnMpIHtcbiAgICAgICAgICBfdGhpcy5saWZlY3ljbGUoJ2Vycm9yJywge1xuICAgICAgICAgICAgZXJyb3I6IGUsXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgc3RhdGU6IF90aGlzLnN0YXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm4uYXNzaWduKHRoaXMsIG1vZGVsLnB1YmxpY01ldGhvZHMpO1xuXG4gICAgLy8gUmVnaXN0ZXIgZGlzcGF0Y2hlclxuICAgIHRoaXMuZGlzcGF0Y2hUb2tlbiA9IGFsdC5kaXNwYXRjaGVyLnJlZ2lzdGVyKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICBfdGhpcy5wcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gICAgICBfdGhpcy5saWZlY3ljbGUoJ2JlZm9yZUVhY2gnLCB7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIHN0YXRlOiBfdGhpcy5zdGF0ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBhY3Rpb25IYW5kbGVycyA9IG1vZGVsLmFjdGlvbkxpc3RlbmVyc1twYXlsb2FkLmFjdGlvbl07XG5cbiAgICAgIGlmIChhY3Rpb25IYW5kbGVycyB8fCBtb2RlbC5vdGhlcndpc2UpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoYWN0aW9uSGFuZGxlcnMpIHtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVEaXNwYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSGFuZGxlcnMuZmlsdGVyKEJvb2xlYW4pLmV2ZXJ5KGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwobW9kZWwsIHBheWxvYWQuZGF0YSwgcGF5bG9hZC5hY3Rpb24pICE9PSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIHBheWxvYWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZURpc3BhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5vdGhlcndpc2UocGF5bG9hZC5kYXRhLCBwYXlsb2FkLmFjdGlvbik7XG4gICAgICAgICAgfSwgcGF5bG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0ICE9PSBmYWxzZSAmJiAhX3RoaXMucHJldmVudERlZmF1bHQpIF90aGlzLmVtaXRDaGFuZ2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZGVsLnJlZHVjZSkge1xuICAgICAgICBoYW5kbGVEaXNwYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc3RhdGUgPSBtb2RlbC5yZWR1Y2UoX3RoaXMuc3RhdGUsIHBheWxvYWQpO1xuICAgICAgICB9LCBwYXlsb2FkKTtcbiAgICAgICAgaWYgKCFfdGhpcy5wcmV2ZW50RGVmYXVsdCkgX3RoaXMuZW1pdENoYW5nZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5saWZlY3ljbGUoJ2FmdGVyRWFjaCcsIHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgc3RhdGU6IF90aGlzLnN0YXRlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubGlmZWN5Y2xlKCdpbml0Jyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWx0U3RvcmUsIFt7XG4gICAga2V5OiAnbGlzdGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGNiKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCFmbi5pc0Z1bmN0aW9uKGNiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbGlzdGVuIGV4cGVjdHMgYSBmdW5jdGlvbicpO1xuICAgICAgdGhpcy50cmFuc21pdHRlci5zdWJzY3JpYmUoY2IpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi51bmxpc3RlbihjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VubGlzdGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5saXN0ZW4oY2IpIHtcbiAgICAgIHRoaXMubGlmZWN5Y2xlKCd1bmxpc3RlbicpO1xuICAgICAgdGhpcy50cmFuc21pdHRlci51bnN1YnNjcmliZShjYik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLlN0b3JlTW9kZWwuY29uZmlnLmdldFN0YXRlLmNhbGwodGhpcywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFsdFN0b3JlO1xufSkoKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gQWx0U3RvcmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdHJhbnNtaXR0ZXIgPSByZXF1aXJlKCd0cmFuc21pdHRlcicpO1xuXG52YXIgX3RyYW5zbWl0dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zbWl0dGVyKTtcblxudmFyIF91dGlsc0Z1bmN0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucycpO1xuXG52YXIgZm4gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHNGdW5jdGlvbnMpO1xuXG52YXIgU3RvcmVNaXhpbiA9IHtcbiAgd2FpdEZvcjogZnVuY3Rpb24gd2FpdEZvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgc291cmNlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ0Rpc3BhdGNoIHRva2VucyBub3QgcHJvdmlkZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlc0FycmF5ID0gc291cmNlcztcbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNvdXJjZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlc1swXSkgPyBzb3VyY2VzWzBdIDogc291cmNlcztcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gc291cmNlc0FycmF5Lm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gc291cmNlLmRpc3BhdGNoVG9rZW4gfHwgc291cmNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXNwYXRjaGVyLndhaXRGb3IodG9rZW5zKTtcbiAgfSxcblxuICBleHBvcnRBc3luYzogZnVuY3Rpb24gZXhwb3J0QXN5bmMoYXN5bmNNZXRob2RzKSB7XG4gICAgdGhpcy5yZWdpc3RlckFzeW5jKGFzeW5jTWV0aG9kcyk7XG4gIH0sXG5cbiAgcmVnaXN0ZXJBc3luYzogZnVuY3Rpb24gcmVnaXN0ZXJBc3luYyhhc3luY0RlZikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbG9hZENvdW50ZXIgPSAwO1xuXG4gICAgdmFyIGFzeW5jTWV0aG9kcyA9IGZuLmlzRnVuY3Rpb24oYXN5bmNEZWYpID8gYXN5bmNEZWYodGhpcy5hbHQpIDogYXN5bmNEZWY7XG5cbiAgICB2YXIgdG9FeHBvcnQgPSBPYmplY3Qua2V5cyhhc3luY01ldGhvZHMpLnJlZHVjZShmdW5jdGlvbiAocHVibGljTWV0aG9kcywgbWV0aG9kTmFtZSkge1xuICAgICAgdmFyIGRlc2MgPSBhc3luY01ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICB2YXIgc3BlYyA9IGZuLmlzRnVuY3Rpb24oZGVzYykgPyBkZXNjKF90aGlzKSA6IGRlc2M7XG5cbiAgICAgIHZhciB2YWxpZEhhbmRsZXJzID0gWydzdWNjZXNzJywgJ2Vycm9yJywgJ2xvYWRpbmcnXTtcbiAgICAgIHZhbGlkSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBpZiAoc3BlY1toYW5kbGVyXSAmJiAhc3BlY1toYW5kbGVyXS5pZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihoYW5kbGVyICsgJyBoYW5kbGVyIG11c3QgYmUgYW4gYWN0aW9uIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwdWJsaWNNZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGF0ZSA9IF90aGlzLmdldEluc3RhbmNlKCkuZ2V0U3RhdGUoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gc3BlYy5sb2NhbCAmJiBzcGVjLmxvY2FsLmFwcGx5KHNwZWMsIFtzdGF0ZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgdmFyIHNob3VsZEZldGNoID0gc3BlYy5zaG91bGRGZXRjaCA/IHNwZWMuc2hvdWxkRmV0Y2guYXBwbHkoc3BlYywgW3N0YXRlXS5jb25jYXQoYXJncykpIDogdmFsdWUgPT0gbnVsbDtcbiAgICAgICAgdmFyIGludGVyY2VwdCA9IHNwZWMuaW50ZXJjZXB0UmVzcG9uc2UgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbWFrZUFjdGlvbkhhbmRsZXIgPSBmdW5jdGlvbiBtYWtlQWN0aW9uSGFuZGxlcihhY3Rpb24sIGlzRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBmaXJlID0gZnVuY3Rpb24gZmlyZSgpIHtcbiAgICAgICAgICAgICAgbG9hZENvdW50ZXIgLT0gMTtcbiAgICAgICAgICAgICAgYWN0aW9uKGludGVyY2VwdCh4LCBhY3Rpb24sIGFyZ3MpKTtcbiAgICAgICAgICAgICAgaWYgKGlzRXJyb3IpIHRocm93IHg7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFsdC50cmFwQXN5bmMgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaXJlKCk7XG4gICAgICAgICAgICB9IDogZmlyZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiBjYWNoZSB0aGVuIGZldGNoIGl0XG4gICAgICAgIGlmIChzaG91bGRGZXRjaCkge1xuICAgICAgICAgIGxvYWRDb3VudGVyICs9IDE7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICBpZiAoc3BlYy5sb2FkaW5nKSBzcGVjLmxvYWRpbmcoaW50ZXJjZXB0KG51bGwsIHNwZWMubG9hZGluZywgYXJncykpO1xuICAgICAgICAgIHJldHVybiBzcGVjLnJlbW90ZS5hcHBseShzcGVjLCBbc3RhdGVdLmNvbmNhdChhcmdzKSkudGhlbihtYWtlQWN0aW9uSGFuZGxlcihzcGVjLnN1Y2Nlc3MpLCBtYWtlQWN0aW9uSGFuZGxlcihzcGVjLmVycm9yLCAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGVtaXQgdGhlIGNoYW5nZSBub3dcbiAgICAgICAgICBfdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcHVibGljTWV0aG9kcztcbiAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmV4cG9ydFB1YmxpY01ldGhvZHModG9FeHBvcnQpO1xuICAgIHRoaXMuZXhwb3J0UHVibGljTWV0aG9kcyh7XG4gICAgICBpc0xvYWRpbmc6IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRDb3VudGVyID4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBleHBvcnRQdWJsaWNNZXRob2RzOiBmdW5jdGlvbiBleHBvcnRQdWJsaWNNZXRob2RzKG1ldGhvZHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGZuLmVhY2hPYmplY3QoZnVuY3Rpb24gKG1ldGhvZE5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAoIWZuLmlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cG9ydFB1YmxpY01ldGhvZHMgZXhwZWN0cyBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5wdWJsaWNNZXRob2RzW21ldGhvZE5hbWVdID0gdmFsdWU7XG4gICAgfSwgW21ldGhvZHNdKTtcbiAgfSxcblxuICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5lbWl0Q2hhbmdlKCk7XG4gIH0sXG5cbiAgb246IGZ1bmN0aW9uIG9uKGxpZmVjeWNsZUV2ZW50LCBoYW5kbGVyKSB7XG4gICAgaWYgKGxpZmVjeWNsZUV2ZW50ID09PSAnZXJyb3InKSB0aGlzLmhhbmRsZXNPd25FcnJvcnMgPSB0cnVlO1xuICAgIHZhciBidXMgPSB0aGlzLmxpZmVjeWNsZUV2ZW50c1tsaWZlY3ljbGVFdmVudF0gfHwgKDAsIF90cmFuc21pdHRlcjJbJ2RlZmF1bHQnXSkoKTtcbiAgICB0aGlzLmxpZmVjeWNsZUV2ZW50c1tsaWZlY3ljbGVFdmVudF0gPSBidXM7XG4gICAgcmV0dXJuIGJ1cy5zdWJzY3JpYmUoaGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBiaW5kQWN0aW9uOiBmdW5jdGlvbiBiaW5kQWN0aW9uKHN5bWJvbCwgaGFuZGxlcikge1xuICAgIGlmICghc3ltYm9sKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ0ludmFsaWQgYWN0aW9uIHJlZmVyZW5jZSBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgaWYgKCFmbi5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiaW5kQWN0aW9uIGV4cGVjdHMgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmIChoYW5kbGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FjdGlvbiBoYW5kbGVyIGluIHN0b3JlICcgKyB0aGlzLmRpc3BsYXlOYW1lICsgJyBmb3IgJyArICgoc3ltYm9sLmlkIHx8IHN5bWJvbCkudG9TdHJpbmcoKSArICcgd2FzIGRlZmluZWQgd2l0aCAnKSArICd0d28gcGFyYW1ldGVycy4gT25seSBhIHNpbmdsZSBwYXJhbWV0ZXIgaXMgcGFzc2VkIHRocm91Z2ggdGhlICcgKyAnZGlzcGF0Y2hlciwgZGlkIHlvdSBtZWFuIHRvIHBhc3MgaW4gYW4gT2JqZWN0IGluc3RlYWQ/Jyk7XG4gICAgfVxuXG4gICAgLy8gWW91IGNhbiBwYXNzIGluIHRoZSBjb25zdGFudCBvciB0aGUgZnVuY3Rpb24gaXRzZWxmXG4gICAgdmFyIGtleSA9IHN5bWJvbC5pZCA/IHN5bWJvbC5pZCA6IHN5bWJvbDtcbiAgICB0aGlzLmFjdGlvbkxpc3RlbmVyc1trZXldID0gdGhpcy5hY3Rpb25MaXN0ZW5lcnNba2V5XSB8fCBbXTtcbiAgICB0aGlzLmFjdGlvbkxpc3RlbmVyc1trZXldLnB1c2goaGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmJvdW5kTGlzdGVuZXJzLnB1c2goa2V5KTtcbiAgfSxcblxuICBiaW5kQWN0aW9uczogZnVuY3Rpb24gYmluZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgZm4uZWFjaE9iamVjdChmdW5jdGlvbiAoYWN0aW9uLCBzeW1ib2wpIHtcbiAgICAgIHZhciBtYXRjaEZpcnN0Q2hhcmFjdGVyID0gLy4vO1xuICAgICAgdmFyIGFzc3VtZWRFdmVudEhhbmRsZXIgPSBhY3Rpb24ucmVwbGFjZShtYXRjaEZpcnN0Q2hhcmFjdGVyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gJ29uJyArIHhbMF0udG9VcHBlckNhc2UoKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGhhbmRsZXIgPSBudWxsO1xuXG4gICAgICBpZiAoX3RoaXMzW2FjdGlvbl0gJiYgX3RoaXMzW2Fzc3VtZWRFdmVudEhhbmRsZXJdKSB7XG4gICAgICAgIC8vIElmIHlvdSBoYXZlIGJvdGggYWN0aW9uIGFuZCBvbkFjdGlvblxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoJ1lvdSBoYXZlIG11bHRpcGxlIGFjdGlvbiBoYW5kbGVycyBib3VuZCB0byBhbiBhY3Rpb246ICcgKyAoYWN0aW9uICsgJyBhbmQgJyArIGFzc3VtZWRFdmVudEhhbmRsZXIpKTtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMzW2FjdGlvbl0pIHtcbiAgICAgICAgLy8gYWN0aW9uXG4gICAgICAgIGhhbmRsZXIgPSBfdGhpczNbYWN0aW9uXTtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMzW2Fzc3VtZWRFdmVudEhhbmRsZXJdKSB7XG4gICAgICAgIC8vIG9uQWN0aW9uXG4gICAgICAgIGhhbmRsZXIgPSBfdGhpczNbYXNzdW1lZEV2ZW50SGFuZGxlcl07XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIF90aGlzMy5iaW5kQWN0aW9uKHN5bWJvbCwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgfSwgW2FjdGlvbnNdKTtcbiAgfSxcblxuICBiaW5kTGlzdGVuZXJzOiBmdW5jdGlvbiBiaW5kTGlzdGVuZXJzKG9iaikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgZm4uZWFjaE9iamVjdChmdW5jdGlvbiAobWV0aG9kTmFtZSwgc3ltYm9sKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBfdGhpczRbbWV0aG9kTmFtZV07XG5cbiAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG1ldGhvZE5hbWUgKyAnIGRlZmluZWQgYnV0IGRvZXMgbm90IGV4aXN0IGluICcgKyBfdGhpczQuZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgIHN5bWJvbC5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICBfdGhpczQuYmluZEFjdGlvbihhY3Rpb24sIGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczQuYmluZEFjdGlvbihzeW1ib2wsIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LCBbb2JqXSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFN0b3JlTWl4aW47XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF9iaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZXhwb3J0cy5jcmVhdGVTdG9yZUNvbmZpZyA9IGNyZWF0ZVN0b3JlQ29uZmlnO1xuZXhwb3J0cy50cmFuc2Zvcm1TdG9yZSA9IHRyYW5zZm9ybVN0b3JlO1xuZXhwb3J0cy5jcmVhdGVTdG9yZUZyb21PYmplY3QgPSBjcmVhdGVTdG9yZUZyb21PYmplY3Q7XG5leHBvcnRzLmNyZWF0ZVN0b3JlRnJvbUNsYXNzID0gY3JlYXRlU3RvcmVGcm9tQ2xhc3M7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF91dGlsc0FsdFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvQWx0VXRpbHMnKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzQWx0VXRpbHMpO1xuXG52YXIgX3V0aWxzRnVuY3Rpb25zID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZnVuY3Rpb25zJyk7XG5cbnZhciBmbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsc0Z1bmN0aW9ucyk7XG5cbnZhciBfQWx0U3RvcmUgPSByZXF1aXJlKCcuL0FsdFN0b3JlJyk7XG5cbnZhciBfQWx0U3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWx0U3RvcmUpO1xuXG52YXIgX1N0b3JlTWl4aW4gPSByZXF1aXJlKCcuL1N0b3JlTWl4aW4nKTtcblxudmFyIF9TdG9yZU1peGluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0b3JlTWl4aW4pO1xuXG5mdW5jdGlvbiBkb1NldFN0YXRlKHN0b3JlLCBzdG9yZUluc3RhbmNlLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNvbmZpZyA9IHN0b3JlSW5zdGFuY2UuU3RvcmVNb2RlbC5jb25maWc7XG5cbiAgdmFyIG5leHRTdGF0ZSA9IGZuLmlzRnVuY3Rpb24oc3RhdGUpID8gc3RhdGUoc3RvcmVJbnN0YW5jZS5zdGF0ZSkgOiBzdGF0ZTtcblxuICBzdG9yZUluc3RhbmNlLnN0YXRlID0gY29uZmlnLnNldFN0YXRlLmNhbGwoc3RvcmUsIHN0b3JlSW5zdGFuY2Uuc3RhdGUsIG5leHRTdGF0ZSk7XG5cbiAgaWYgKCFzdG9yZS5hbHQuZGlzcGF0Y2hlci5pc0Rpc3BhdGNoaW5nKCkpIHtcbiAgICBzdG9yZS5lbWl0Q2hhbmdlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvdG90eXBlKHByb3RvLCBhbHQsIGtleSwgZXh0cmFzKSB7XG4gIHByb3RvLmJvdW5kTGlzdGVuZXJzID0gW107XG4gIHByb3RvLmxpZmVjeWNsZUV2ZW50cyA9IHt9O1xuICBwcm90by5hY3Rpb25MaXN0ZW5lcnMgPSB7fTtcbiAgcHJvdG8ucHVibGljTWV0aG9kcyA9IHt9O1xuICBwcm90by5oYW5kbGVzT3duRXJyb3JzID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZuLmFzc2lnbihwcm90bywgX1N0b3JlTWl4aW4yWydkZWZhdWx0J10sIHtcbiAgICBkaXNwbGF5TmFtZToga2V5LFxuICAgIGFsdDogYWx0LFxuICAgIGRpc3BhdGNoZXI6IGFsdC5kaXNwYXRjaGVyLFxuICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgfVxuICB9LCBleHRyYXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZUNvbmZpZyhnbG9iYWxDb25maWcsIFN0b3JlTW9kZWwpIHtcbiAgU3RvcmVNb2RlbC5jb25maWcgPSBmbi5hc3NpZ24oe1xuICAgIGdldFN0YXRlOiBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RhdGUpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zbGljZSgpO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RhdGUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICByZXR1cm4gZm4uYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRTdGF0ZTogZm4uYXNzaWduXG4gIH0sIGdsb2JhbENvbmZpZywgU3RvcmVNb2RlbC5jb25maWcpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TdG9yZSh0cmFuc2Zvcm1zLCBTdG9yZU1vZGVsKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1zLnJlZHVjZShmdW5jdGlvbiAoU3RvcmUsIHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0oU3RvcmUpO1xuICB9LCBTdG9yZU1vZGVsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmVGcm9tT2JqZWN0KGFsdCwgU3RvcmVNb2RlbCwga2V5KSB7XG4gIHZhciBzdG9yZUluc3RhbmNlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBTdG9yZVByb3RvID0gY3JlYXRlUHJvdG90eXBlKHt9LCBhbHQsIGtleSwgZm4uYXNzaWduKHtcbiAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgICByZXR1cm4gc3RvcmVJbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldFN0YXRlOiBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICAgIGRvU2V0U3RhdGUodGhpcywgc3RvcmVJbnN0YW5jZSwgbmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIFN0b3JlTW9kZWwpKTtcblxuICAvLyBiaW5kIHRoZSBzdG9yZSBsaXN0ZW5lcnNcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKFN0b3JlUHJvdG8uYmluZExpc3RlbmVycykge1xuICAgIF9TdG9yZU1peGluMlsnZGVmYXVsdCddLmJpbmRMaXN0ZW5lcnMuY2FsbChTdG9yZVByb3RvLCBTdG9yZVByb3RvLmJpbmRMaXN0ZW5lcnMpO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChTdG9yZVByb3RvLm9ic2VydmUpIHtcbiAgICBfU3RvcmVNaXhpbjJbJ2RlZmF1bHQnXS5iaW5kTGlzdGVuZXJzLmNhbGwoU3RvcmVQcm90bywgU3RvcmVQcm90by5vYnNlcnZlKGFsdCkpO1xuICB9XG5cbiAgLy8gYmluZCB0aGUgbGlmZWN5Y2xlIGV2ZW50c1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoU3RvcmVQcm90by5saWZlY3ljbGUpIHtcbiAgICBmbi5lYWNoT2JqZWN0KGZ1bmN0aW9uIChldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICBfU3RvcmVNaXhpbjJbJ2RlZmF1bHQnXS5vbi5jYWxsKFN0b3JlUHJvdG8sIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0sIFtTdG9yZVByb3RvLmxpZmVjeWNsZV0pO1xuICB9XG5cbiAgLy8gY3JlYXRlIHRoZSBpbnN0YW5jZSBhbmQgZm4uYXNzaWduIHRoZSBwdWJsaWMgbWV0aG9kcyB0byB0aGUgaW5zdGFuY2VcbiAgc3RvcmVJbnN0YW5jZSA9IGZuLmFzc2lnbihuZXcgX0FsdFN0b3JlMlsnZGVmYXVsdCddKGFsdCwgU3RvcmVQcm90bywgU3RvcmVQcm90by5zdGF0ZSAhPT0gdW5kZWZpbmVkID8gU3RvcmVQcm90by5zdGF0ZSA6IHt9LCBTdG9yZU1vZGVsKSwgU3RvcmVQcm90by5wdWJsaWNNZXRob2RzLCB7IGRpc3BsYXlOYW1lOiBrZXkgfSk7XG5cbiAgcmV0dXJuIHN0b3JlSW5zdGFuY2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlRnJvbUNsYXNzKGFsdCwgU3RvcmVNb2RlbCwga2V5KSB7XG4gIHZhciBzdG9yZUluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB2YXIgY29uZmlnID0gU3RvcmVNb2RlbC5jb25maWc7XG5cbiAgLy8gQ3JlYXRpbmcgYSBjbGFzcyBoZXJlIHNvIHdlIGRvbid0IG92ZXJsb2FkIHRoZSBwcm92aWRlZCBzdG9yZSdzXG4gIC8vIHByb3RvdHlwZSB3aXRoIHRoZSBtaXhpbiBiZWhhdmlvdXIgYW5kIEknbSBleHRlbmRpbmcgZnJvbSBTdG9yZU1vZGVsXG4gIC8vIHNvIHdlIGNhbiBpbmhlcml0IGFueSBleHRlbnNpb25zIGZyb20gdGhlIHByb3ZpZGVkIHN0b3JlLlxuXG4gIHZhciBTdG9yZSA9IChmdW5jdGlvbiAoX1N0b3JlTW9kZWwpIHtcbiAgICBmdW5jdGlvbiBTdG9yZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdG9yZSk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RvcmUucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgX2luaGVyaXRzKFN0b3JlLCBfU3RvcmVNb2RlbCk7XG5cbiAgICByZXR1cm4gU3RvcmU7XG4gIH0pKFN0b3JlTW9kZWwpO1xuXG4gIGNyZWF0ZVByb3RvdHlwZShTdG9yZS5wcm90b3R5cGUsIGFsdCwga2V5LCB7XG4gICAgZ2V0SW5zdGFuY2U6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgcmV0dXJuIHN0b3JlSW5zdGFuY2U7XG4gICAgfSxcbiAgICBzZXRTdGF0ZTogZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgICBkb1NldFN0YXRlKHRoaXMsIHN0b3JlSW5zdGFuY2UsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9KTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJnc0ZvckNsYXNzID0gQXJyYXkoX2xlbiA+IDMgPyBfbGVuIC0gMyA6IDApLCBfa2V5ID0gMzsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NGb3JDbGFzc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgc3RvcmUgPSBuZXcgKF9iaW5kLmFwcGx5KFN0b3JlLCBbbnVsbF0uY29uY2F0KGFyZ3NGb3JDbGFzcykpKSgpO1xuXG4gIGlmIChjb25maWcuYmluZExpc3RlbmVycykgc3RvcmUuYmluZExpc3RlbmVycyhjb25maWcuYmluZExpc3RlbmVycyk7XG4gIGlmIChjb25maWcuZGF0YXNvdXJjZSkgc3RvcmUucmVnaXN0ZXJBc3luYyhjb25maWcuZGF0YXNvdXJjZSk7XG5cbiAgc3RvcmVJbnN0YW5jZSA9IGZuLmFzc2lnbihuZXcgX0FsdFN0b3JlMlsnZGVmYXVsdCddKGFsdCwgc3RvcmUsIHN0b3JlLnN0YXRlICE9PSB1bmRlZmluZWQgPyBzdG9yZS5zdGF0ZSA6IHN0b3JlLCBTdG9yZU1vZGVsKSwgdXRpbHMuZ2V0SW50ZXJuYWxNZXRob2RzKFN0b3JlTW9kZWwpLCBjb25maWcucHVibGljTWV0aG9kcywgeyBkaXNwbGF5TmFtZToga2V5IH0pO1xuXG4gIHJldHVybiBzdG9yZUluc3RhbmNlO1xufSIsIi8qZXNsaW50LWRpc2FibGUqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0SW50ZXJuYWxNZXRob2RzID0gZ2V0SW50ZXJuYWxNZXRob2RzO1xuZXhwb3J0cy53YXJuID0gd2FybjtcbmV4cG9ydHMudWlkID0gdWlkO1xuZXhwb3J0cy5mb3JtYXRBc0NvbnN0YW50ID0gZm9ybWF0QXNDb25zdGFudDtcbmV4cG9ydHMuZGlzcGF0Y2hJZGVudGl0eSA9IGRpc3BhdGNoSWRlbnRpdHk7XG52YXIgYnVpbHRJbnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhOb29wQ2xhc3MpO1xudmFyIGJ1aWx0SW5Qcm90byA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE5vb3BDbGFzcy5wcm90b3R5cGUpO1xuLyplc2xpbnQtZW5hYmxlKi9cblxuZnVuY3Rpb24gZ2V0SW50ZXJuYWxNZXRob2RzKE9iaiwgaXNQcm90bykge1xuICB2YXIgZXhjbHVkZWQgPSBpc1Byb3RvID8gYnVpbHRJblByb3RvIDogYnVpbHRJbnM7XG4gIHZhciBvYmogPSBpc1Byb3RvID8gT2JqLnByb3RvdHlwZSA6IE9iajtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikucmVkdWNlKGZ1bmN0aW9uICh2YWx1ZSwgbSkge1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKG0pICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhbHVlW21dID0gb2JqW21dO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKG5ldyBSZWZlcmVuY2VFcnJvcihtc2cpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1aWQoY29udGFpbmVyLCBuYW1lKSB7XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBrZXkgPSBuYW1lO1xuICB3aGlsZSAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoY29udGFpbmVyLCBrZXkpKSB7XG4gICAga2V5ID0gbmFtZSArIFN0cmluZygrK2NvdW50KTtcbiAgfVxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBc0NvbnN0YW50KG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW2Etel0oW0EtWl0pL2csIGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGlbMF0gKyAnXycgKyBpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH0pLnRvVXBwZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoSWRlbnRpdHkoeCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2goYS5sZW5ndGggPyBbeF0uY29uY2F0KGEpIDogeCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBOb29wQ2xhc3MoKSB7fSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldEFwcFN0YXRlID0gc2V0QXBwU3RhdGU7XG5leHBvcnRzLnNuYXBzaG90ID0gc25hcHNob3Q7XG5leHBvcnRzLnNhdmVJbml0aWFsU25hcHNob3QgPSBzYXZlSW5pdGlhbFNuYXBzaG90O1xuZXhwb3J0cy5maWx0ZXJTbmFwc2hvdHMgPSBmaWx0ZXJTbmFwc2hvdHM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdXRpbHNGdW5jdGlvbnMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9mdW5jdGlvbnMnKTtcblxudmFyIGZuID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzRnVuY3Rpb25zKTtcblxuZnVuY3Rpb24gc2V0QXBwU3RhdGUoaW5zdGFuY2UsIGRhdGEsIG9uU3RvcmUpIHtcbiAgdmFyIG9iaiA9IGluc3RhbmNlLmRlc2VyaWFsaXplKGRhdGEpO1xuICBmbi5lYWNoT2JqZWN0KGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgdmFyIHN0b3JlID0gaW5zdGFuY2Uuc3RvcmVzW2tleV07XG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29uZmlnID0gc3RvcmUuU3RvcmVNb2RlbC5jb25maWc7XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGU7XG4gICAgICAgIGlmIChjb25maWcub25EZXNlcmlhbGl6ZSkgb2JqW2tleV0gPSBjb25maWcub25EZXNlcmlhbGl6ZSh2YWx1ZSkgfHwgdmFsdWU7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RhdGUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgIGZuLmVhY2hPYmplY3QoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgc3RhdGVba107XG4gICAgICAgICAgfSwgW3N0YXRlXSk7XG4gICAgICAgICAgZm4uYXNzaWduKHN0YXRlLCBvYmpba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcmUuc3RhdGUgPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBvblN0b3JlKHN0b3JlKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9LCBbb2JqXSk7XG59XG5cbmZ1bmN0aW9uIHNuYXBzaG90KGluc3RhbmNlKSB7XG4gIHZhciBzdG9yZU5hbWVzID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgc3RvcmVzID0gc3RvcmVOYW1lcy5sZW5ndGggPyBzdG9yZU5hbWVzIDogT2JqZWN0LmtleXMoaW5zdGFuY2Uuc3RvcmVzKTtcbiAgcmV0dXJuIHN0b3Jlcy5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgc3RvcmVIYW5kbGUpIHtcbiAgICB2YXIgc3RvcmVOYW1lID0gc3RvcmVIYW5kbGUuZGlzcGxheU5hbWUgfHwgc3RvcmVIYW5kbGU7XG4gICAgdmFyIHN0b3JlID0gaW5zdGFuY2Uuc3RvcmVzW3N0b3JlTmFtZV07XG4gICAgdmFyIGNvbmZpZyA9IHN0b3JlLlN0b3JlTW9kZWwuY29uZmlnO1xuXG4gICAgc3RvcmUubGlmZWN5Y2xlKCdzbmFwc2hvdCcpO1xuICAgIHZhciBjdXN0b21TbmFwc2hvdCA9IGNvbmZpZy5vblNlcmlhbGl6ZSAmJiBjb25maWcub25TZXJpYWxpemUoc3RvcmUuc3RhdGUpO1xuICAgIG9ialtzdG9yZU5hbWVdID0gY3VzdG9tU25hcHNob3QgPyBjdXN0b21TbmFwc2hvdCA6IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBzYXZlSW5pdGlhbFNuYXBzaG90KGluc3RhbmNlLCBrZXkpIHtcbiAgdmFyIHN0YXRlID0gaW5zdGFuY2UuZGVzZXJpYWxpemUoaW5zdGFuY2Uuc2VyaWFsaXplKGluc3RhbmNlLnN0b3Jlc1trZXldLnN0YXRlKSk7XG4gIGluc3RhbmNlLl9pbml0U25hcHNob3Rba2V5XSA9IHN0YXRlO1xuICBpbnN0YW5jZS5fbGFzdFNuYXBzaG90W2tleV0gPSBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyU25hcHNob3RzKGluc3RhbmNlLCBzdGF0ZSwgc3RvcmVzKSB7XG4gIHJldHVybiBzdG9yZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIHN0b3JlKSB7XG4gICAgdmFyIHN0b3JlTmFtZSA9IHN0b3JlLmRpc3BsYXlOYW1lIHx8IHN0b3JlO1xuICAgIGlmICghc3RhdGVbc3RvcmVOYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKHN0b3JlTmFtZSArICcgaXMgbm90IGEgdmFsaWQgc3RvcmUnKTtcbiAgICB9XG4gICAgb2JqW3N0b3JlTmFtZV0gPSBzdGF0ZVtzdG9yZU5hbWVdO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMuRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4vbGliL0Rpc3BhdGNoZXInKVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBEaXNwYXRjaGVyXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnLi9pbnZhcmlhbnQnKTtcblxudmFyIF9sYXN0SUQgPSAxO1xudmFyIF9wcmVmaXggPSAnSURfJztcblxuLyoqXG4gKiBEaXNwYXRjaGVyIGlzIHVzZWQgdG8gYnJvYWRjYXN0IHBheWxvYWRzIHRvIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLiBUaGlzIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSBnZW5lcmljIHB1Yi1zdWIgc3lzdGVtcyBpbiB0d28gd2F5czpcbiAqXG4gKiAgIDEpIENhbGxiYWNrcyBhcmUgbm90IHN1YnNjcmliZWQgdG8gcGFydGljdWxhciBldmVudHMuIEV2ZXJ5IHBheWxvYWQgaXNcbiAqICAgICAgZGlzcGF0Y2hlZCB0byBldmVyeSByZWdpc3RlcmVkIGNhbGxiYWNrLlxuICogICAyKSBDYWxsYmFja3MgY2FuIGJlIGRlZmVycmVkIGluIHdob2xlIG9yIHBhcnQgdW50aWwgb3RoZXIgY2FsbGJhY2tzIGhhdmVcbiAqICAgICAgYmVlbiBleGVjdXRlZC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhpcyBoeXBvdGhldGljYWwgZmxpZ2h0IGRlc3RpbmF0aW9uIGZvcm0sIHdoaWNoXG4gKiBzZWxlY3RzIGEgZGVmYXVsdCBjaXR5IHdoZW4gYSBjb3VudHJ5IGlzIHNlbGVjdGVkOlxuICpcbiAqICAgdmFyIGZsaWdodERpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcigpO1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY291bnRyeSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ291bnRyeVN0b3JlID0ge2NvdW50cnk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hpY2ggY2l0eSBpcyBzZWxlY3RlZFxuICogICB2YXIgQ2l0eVN0b3JlID0ge2NpdHk6IG51bGx9O1xuICpcbiAqICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGJhc2UgZmxpZ2h0IHByaWNlIG9mIHRoZSBzZWxlY3RlZCBjaXR5XG4gKiAgIHZhciBGbGlnaHRQcmljZVN0b3JlID0ge3ByaWNlOiBudWxsfVxuICpcbiAqIFdoZW4gYSB1c2VyIGNoYW5nZXMgdGhlIHNlbGVjdGVkIGNpdHksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NpdHktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENpdHk6ICdwYXJpcydcbiAqICAgfSk7XG4gKlxuICogVGhpcyBwYXlsb2FkIGlzIGRpZ2VzdGVkIGJ5IGBDaXR5U3RvcmVgOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5yZWdpc3RlcihmdW5jdGlvbihwYXlsb2FkKSB7XG4gKiAgICAgaWYgKHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ2NpdHktdXBkYXRlJykge1xuICogICAgICAgQ2l0eVN0b3JlLmNpdHkgPSBwYXlsb2FkLnNlbGVjdGVkQ2l0eTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGNvdW50cnksIHdlIGRpc3BhdGNoIHRoZSBwYXlsb2FkOlxuICpcbiAqICAgZmxpZ2h0RGlzcGF0Y2hlci5kaXNwYXRjaCh7XG4gKiAgICAgYWN0aW9uVHlwZTogJ2NvdW50cnktdXBkYXRlJyxcbiAqICAgICBzZWxlY3RlZENvdW50cnk6ICdhdXN0cmFsaWEnXG4gKiAgIH0pO1xuICpcbiAqIFRoaXMgcGF5bG9hZCBpcyBkaWdlc3RlZCBieSBib3RoIHN0b3JlczpcbiAqXG4gKiAgICBDb3VudHJ5U3RvcmUuZGlzcGF0Y2hUb2tlbiA9IGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjb3VudHJ5LXVwZGF0ZScpIHtcbiAqICAgICAgIENvdW50cnlTdG9yZS5jb3VudHJ5ID0gcGF5bG9hZC5zZWxlY3RlZENvdW50cnk7XG4gKiAgICAgfVxuICogICB9KTtcbiAqXG4gKiBXaGVuIHRoZSBjYWxsYmFjayB0byB1cGRhdGUgYENvdW50cnlTdG9yZWAgaXMgcmVnaXN0ZXJlZCwgd2Ugc2F2ZSBhIHJlZmVyZW5jZVxuICogdG8gdGhlIHJldHVybmVkIHRva2VuLiBVc2luZyB0aGlzIHRva2VuIHdpdGggYHdhaXRGb3IoKWAsIHdlIGNhbiBndWFyYW50ZWVcbiAqIHRoYXQgYENvdW50cnlTdG9yZWAgaXMgdXBkYXRlZCBiZWZvcmUgdGhlIGNhbGxiYWNrIHRoYXQgdXBkYXRlcyBgQ2l0eVN0b3JlYFxuICogbmVlZHMgdG8gcXVlcnkgaXRzIGRhdGEuXG4gKlxuICogICBDaXR5U3RvcmUuZGlzcGF0Y2hUb2tlbiA9IGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgIGlmIChwYXlsb2FkLmFjdGlvblR5cGUgPT09ICdjb3VudHJ5LXVwZGF0ZScpIHtcbiAqICAgICAgIC8vIGBDb3VudHJ5U3RvcmUuY291bnRyeWAgbWF5IG5vdCBiZSB1cGRhdGVkLlxuICogICAgICAgZmxpZ2h0RGlzcGF0Y2hlci53YWl0Rm9yKFtDb3VudHJ5U3RvcmUuZGlzcGF0Y2hUb2tlbl0pO1xuICogICAgICAgLy8gYENvdW50cnlTdG9yZS5jb3VudHJ5YCBpcyBub3cgZ3VhcmFudGVlZCB0byBiZSB1cGRhdGVkLlxuICpcbiAqICAgICAgIC8vIFNlbGVjdCB0aGUgZGVmYXVsdCBjaXR5IGZvciB0aGUgbmV3IGNvdW50cnlcbiAqICAgICAgIENpdHlTdG9yZS5jaXR5ID0gZ2V0RGVmYXVsdENpdHlGb3JDb3VudHJ5KENvdW50cnlTdG9yZS5jb3VudHJ5KTtcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFRoZSB1c2FnZSBvZiBgd2FpdEZvcigpYCBjYW4gYmUgY2hhaW5lZCwgZm9yIGV4YW1wbGU6XG4gKlxuICogICBGbGlnaHRQcmljZVN0b3JlLmRpc3BhdGNoVG9rZW4gPVxuICogICAgIGZsaWdodERpc3BhdGNoZXIucmVnaXN0ZXIoZnVuY3Rpb24ocGF5bG9hZCkge1xuICogICAgICAgc3dpdGNoIChwYXlsb2FkLmFjdGlvblR5cGUpIHtcbiAqICAgICAgICAgY2FzZSAnY291bnRyeS11cGRhdGUnOlxuICogICAgICAgICAgIGZsaWdodERpc3BhdGNoZXIud2FpdEZvcihbQ2l0eVN0b3JlLmRpc3BhdGNoVG9rZW5dKTtcbiAqICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlLnByaWNlID1cbiAqICAgICAgICAgICAgIGdldEZsaWdodFByaWNlU3RvcmUoQ291bnRyeVN0b3JlLmNvdW50cnksIENpdHlTdG9yZS5jaXR5KTtcbiAqICAgICAgICAgICBicmVhaztcbiAqXG4gKiAgICAgICAgIGNhc2UgJ2NpdHktdXBkYXRlJzpcbiAqICAgICAgICAgICBGbGlnaHRQcmljZVN0b3JlLnByaWNlID1cbiAqICAgICAgICAgICAgIEZsaWdodFByaWNlU3RvcmUoQ291bnRyeVN0b3JlLmNvdW50cnksIENpdHlTdG9yZS5jaXR5KTtcbiAqICAgICAgICAgICBicmVhaztcbiAqICAgICB9XG4gKiAgIH0pO1xuICpcbiAqIFRoZSBgY291bnRyeS11cGRhdGVgIHBheWxvYWQgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGludm9rZSB0aGUgc3RvcmVzJ1xuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gb3JkZXI6IGBDb3VudHJ5U3RvcmVgLCBgQ2l0eVN0b3JlYCwgdGhlblxuICogYEZsaWdodFByaWNlU3RvcmVgLlxuICovXG5cbiAgZnVuY3Rpb24gRGlzcGF0Y2hlcigpIHtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcyA9IHt9O1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nID0ge307XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0hhbmRsZWQgPSB7fTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3BlbmRpbmdQYXlsb2FkID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIHdpdGggZXZlcnkgZGlzcGF0Y2hlZCBwYXlsb2FkLiBSZXR1cm5zXG4gICAqIGEgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGB3YWl0Rm9yKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5yZWdpc3Rlcj1mdW5jdGlvbihjYWxsYmFjaykge1xuICAgIHZhciBpZCA9IF9wcmVmaXggKyBfbGFzdElEKys7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2FsbGJhY2sgYmFzZWQgb24gaXRzIHRva2VuLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICovXG4gIERpc3BhdGNoZXIucHJvdG90eXBlLnVucmVnaXN0ZXI9ZnVuY3Rpb24oaWQpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF0sXG4gICAgICAnRGlzcGF0Y2hlci51bnJlZ2lzdGVyKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLFxuICAgICAgaWRcbiAgICApO1xuICAgIGRlbGV0ZSB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrc1tpZF07XG4gIH07XG5cbiAgLyoqXG4gICAqIFdhaXRzIGZvciB0aGUgY2FsbGJhY2tzIHNwZWNpZmllZCB0byBiZSBpbnZva2VkIGJlZm9yZSBjb250aW51aW5nIGV4ZWN1dGlvblxuICAgKiBvZiB0aGUgY3VycmVudCBjYWxsYmFjay4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBhIGNhbGxiYWNrIGluXG4gICAqIHJlc3BvbnNlIHRvIGEgZGlzcGF0Y2hlZCBwYXlsb2FkLlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5PHN0cmluZz59IGlkc1xuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUud2FpdEZvcj1mdW5jdGlvbihpZHMpIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcsXG4gICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IE11c3QgYmUgaW52b2tlZCB3aGlsZSBkaXNwYXRjaGluZy4nXG4gICAgKTtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgaWRzLmxlbmd0aDsgaWkrKykge1xuICAgICAgdmFyIGlkID0gaWRzW2lpXTtcbiAgICAgIGlmICh0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSxcbiAgICAgICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IENpcmN1bGFyIGRlcGVuZGVuY3kgZGV0ZWN0ZWQgd2hpbGUgJyArXG4gICAgICAgICAgJ3dhaXRpbmcgZm9yIGAlc2AuJyxcbiAgICAgICAgICBpZFxuICAgICAgICApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGludmFyaWFudChcbiAgICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdLFxuICAgICAgICAnRGlzcGF0Y2hlci53YWl0Rm9yKC4uLik6IGAlc2AgZG9lcyBub3QgbWFwIHRvIGEgcmVnaXN0ZXJlZCBjYWxsYmFjay4nLFxuICAgICAgICBpZFxuICAgICAgKTtcbiAgICAgIHRoaXMuJERpc3BhdGNoZXJfaW52b2tlQ2FsbGJhY2soaWQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIHBheWxvYWQgdG8gYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2g9ZnVuY3Rpb24ocGF5bG9hZCkge1xuICAgIGludmFyaWFudChcbiAgICAgICF0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmcsXG4gICAgICAnRGlzcGF0Y2guZGlzcGF0Y2goLi4uKTogQ2Fubm90IGRpc3BhdGNoIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC4nXG4gICAgKTtcbiAgICB0aGlzLiREaXNwYXRjaGVyX3N0YXJ0RGlzcGF0Y2hpbmcocGF5bG9hZCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGlkIGluIHRoaXMuJERpc3BhdGNoZXJfY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICh0aGlzLiREaXNwYXRjaGVyX2lzUGVuZGluZ1tpZF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiREaXNwYXRjaGVyX2ludm9rZUNhbGxiYWNrKGlkKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9zdG9wRGlzcGF0Y2hpbmcoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHRoaXMgRGlzcGF0Y2hlciBjdXJyZW50bHkgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS5pc0Rpc3BhdGNoaW5nPWZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiREaXNwYXRjaGVyX2lzRGlzcGF0Y2hpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGwgdGhlIGNhbGxiYWNrIHN0b3JlZCB3aXRoIHRoZSBnaXZlbiBpZC4gQWxzbyBkbyBzb21lIGludGVybmFsXG4gICAqIGJvb2trZWVwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9pbnZva2VDYWxsYmFjaz1mdW5jdGlvbihpZCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNQZW5kaW5nW2lkXSA9IHRydWU7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9jYWxsYmFja3NbaWRdKHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQpO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNIYW5kbGVkW2lkXSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB1cCBib29ra2VlcGluZyBuZWVkZWQgd2hlbiBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBheWxvYWRcbiAgICogQGludGVybmFsXG4gICAqL1xuICBEaXNwYXRjaGVyLnByb3RvdHlwZS4kRGlzcGF0Y2hlcl9zdGFydERpc3BhdGNoaW5nPWZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgICBmb3IgKHZhciBpZCBpbiB0aGlzLiREaXNwYXRjaGVyX2NhbGxiYWNrcykge1xuICAgICAgdGhpcy4kRGlzcGF0Y2hlcl9pc1BlbmRpbmdbaWRdID0gZmFsc2U7XG4gICAgICB0aGlzLiREaXNwYXRjaGVyX2lzSGFuZGxlZFtpZF0gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9wZW5kaW5nUGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgdGhpcy4kRGlzcGF0Y2hlcl9pc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ2xlYXIgYm9va2tlZXBpbmcgdXNlZCBmb3IgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgRGlzcGF0Y2hlci5wcm90b3R5cGUuJERpc3BhdGNoZXJfc3RvcERpc3BhdGNoaW5nPWZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJERpc3BhdGNoZXJfcGVuZGluZ1BheWxvYWQgPSBudWxsO1xuICAgIHRoaXMuJERpc3BhdGNoZXJfaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICB9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGF0Y2hlcjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKGZhbHNlKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHRyYW5zbWl0dGVyKCkge1xuICB2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIHZhciB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKG9uQ2hhbmdlKSB7XG4gICAgdmFyIGlkID0gc3Vic2NyaXB0aW9ucy5pbmRleE9mKG9uQ2hhbmdlKTtcbiAgICBpZiAoaWQgPj0gMCkgc3Vic2NyaXB0aW9ucy5zcGxpY2UoaWQsIDEpO1xuICB9O1xuXG4gIHZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUob25DaGFuZ2UpIHtcbiAgICBzdWJzY3JpcHRpb25zLnB1c2gob25DaGFuZ2UpO1xuICAgIHZhciBkaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIHJldHVybiB1bnN1YnNjcmliZShvbkNoYW5nZSk7XG4gICAgfTtcbiAgICByZXR1cm4geyBkaXNwb3NlOiBkaXNwb3NlIH07XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHZhbHVlKSB7XG4gICAgc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb24odmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IHN1YnNjcmliZTogc3Vic2NyaWJlLCBwdXNoOiBwdXNoLCB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc21pdHRlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5leHBvcnRzLmVhY2hPYmplY3QgPSBlYWNoT2JqZWN0O1xuZXhwb3J0cy5hc3NpZ24gPSBhc3NpZ247XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59O1xuXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqKSB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBlYWNoT2JqZWN0KGYsIG8pIHtcbiAgby5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tKSB7XG4gICAgT2JqZWN0LmtleXMoT2JqZWN0KGZyb20pKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGYoa2V5LCBmcm9tW2tleV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHNvdXJjZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBlYWNoT2JqZWN0KGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRhcmdldFtrZXldID0gdmFsdWU7XG4gIH0sIHNvdXJjZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNSBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3NlcyArPSAnICcgKyBhcmc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzICs9ICcgJyArIGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMgKz0gJyAnICsga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLnN1YnN0cigxKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdfQ==
