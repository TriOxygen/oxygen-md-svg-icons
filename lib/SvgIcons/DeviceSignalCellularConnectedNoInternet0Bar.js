'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceSignalCellularConnectedNoInternet0Bar = function (_Component) {
  _inherits(DeviceSignalCellularConnectedNoInternet0Bar, _Component);

  function DeviceSignalCellularConnectedNoInternet0Bar() {
    _classCallCheck(this, DeviceSignalCellularConnectedNoInternet0Bar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DeviceSignalCellularConnectedNoInternet0Bar).apply(this, arguments));
  }

  _createClass(DeviceSignalCellularConnectedNoInternet0Bar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SvgIcon2.default,
        this.props,
        _react2.default.createElement('path', { fillOpacity: '.3', d: 'M22 8V2L2 22h16V8z' }),
        _react2.default.createElement('path', { d: 'M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z' })
      );
    }
  }]);

  return DeviceSignalCellularConnectedNoInternet0Bar;
}(_react.Component);

exports.default = DeviceSignalCellularConnectedNoInternet0Bar;