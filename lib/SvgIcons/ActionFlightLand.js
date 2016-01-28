'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionFlightLand = function (_Component) {
  _inherits(ActionFlightLand, _Component);

  function ActionFlightLand() {
    _classCallCheck(this, ActionFlightLand);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActionFlightLand).apply(this, arguments));
  }

  _createClass(ActionFlightLand, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SvgIcon2.default,
        this.props,
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { id: 'a', d: 'M0 0h24v24H0V0z' })
        ),
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement('path', { id: 'c', d: 'M0 0h24v24H0V0z' })
        ),
        _react2.default.createElement(
          'clipPath',
          { id: 'b' },
          _react2.default.createElement('use', { overflow: 'visible' })
        ),
        _react2.default.createElement(
          'clipPath',
          { id: 'd', clipPath: 'url(#b)' },
          _react2.default.createElement('use', { overflow: 'visible' })
        ),
        _react2.default.createElement('path', { d: 'M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z', clipPath: 'url(#d)' })
      );
    }
  }]);

  return ActionFlightLand;
}(_react.Component);

exports.default = ActionFlightLand;