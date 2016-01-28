'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  icon: 'oi_1'
};

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SvgIcon)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      mouseOver: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SvgIcon, [{
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      this.setState({ mouseOver: false });
      this.props.onMouseLeave(event);
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      this.setState({ mouseOver: true });
      this.props.onMouseEnter(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var color = _props.color;
      var hoverColor = _props.hoverColor;
      var onMouseEnter = _props.onMouseEnter;
      var onMouseLeave = _props.onMouseLeave;
      var style = _props.style;
      var viewBox = _props.viewBox;

      var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

      var offColor = undefined;
      offColor = style && style.fill ? style.fill : color;
      var onColor = hoverColor ? hoverColor : offColor;

      var iconStyle = Object.assign({}, style, {
        // Make sure our fill color overrides fill provided in props.style
        fill: this.state.mouseOver ? onColor : offColor
      });

      var events = hoverColor ? {
        onMouseEnter: this._handleMouseEnter.bind(this),
        onMouseLeave: this._handleMouseLeave.bind(this)
      } : {};

      return _react2.default.createElement(
        'svg',
        _extends({}, other, events, {
          className: styles.icon,
          style: iconStyle,
          viewBox: viewBox }),
        children
      );
    }
  }]);

  return SvgIcon;
}(_react.Component);

SvgIcon.displayName = 'SvgIcon';
SvgIcon.propTypes = {
  color: _react.PropTypes.string,
  hoverColor: _react.PropTypes.string,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  viewBox: _react.PropTypes.string
};
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24',
  color: 'rgba(30, 30, 30, 1)',
  offColor: 'rgba(128, 128, 128, 0.8)'
};
exports.default = SvgIcon;