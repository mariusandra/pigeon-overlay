'use strict';

exports.__esModule = true;

var _infact = require('./infact');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var createVNode = _infact.Inferno.createVNode;

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  // render

  Overlay.prototype.render = function () {
    var _props = this.props,
        left = _props.left,
        top = _props.top,
        className = _props.className;

    return createVNode(2, 'div', {
      'style': { position: 'absolute', transform: 'translate(' + left + 'px, ' + top + 'px)' },
      'className': className || ''
    }, this.props.children);
  };

  return Overlay;
}(_infact.Component);

Overlay.propTypes = {};
exports.default = Overlay;