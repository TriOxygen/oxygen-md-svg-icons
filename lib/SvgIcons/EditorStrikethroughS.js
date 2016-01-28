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

var EditorStrikethroughS = function (_Component) {
  _inherits(EditorStrikethroughS, _Component);

  function EditorStrikethroughS() {
    _classCallCheck(this, EditorStrikethroughS);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EditorStrikethroughS).apply(this, arguments));
  }

  _createClass(EditorStrikethroughS, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SvgIcon2.default,
        this.props,
        _react2.default.createElement('path', { d: 'M5.9 10h6.3c-.8-.3-1.5-.6-2-.9-.7-.4-1-1-1-1.6 0-.3.1-.6.2-.9.1-.3.3-.5.6-.7.3-.2.6-.4 1-.5.4-.1.8-.2 1.4-.2.5 0 1 .1 1.4.2.4.1.7.3 1 .6.3.2.5.5.6.9.1.3.2.7.2 1.1h4c0-.9-.2-1.7-.5-2.4s-.8-1.4-1.4-1.9c-.6-.5-1.4-1-2.3-1.2-1-.4-2-.5-3.1-.5s-2 .1-2.9.4c-.9.3-1.6.6-2.3 1.1-.6.5-1.1 1-1.4 1.7-.4.7-.6 1.4-.6 2.2 0 .8.2 1.6.5 2.2.1.2.2.3.3.4zM23 12H1v2h11.9c.2.1.5.2.7.3.5.2.9.5 1.2.7.3.2.5.5.6.8.1.3.1.6.1.9 0 .3-.1.6-.2.9-.1.3-.3.5-.6.7-.2.2-.6.3-.9.5-.4.1-.8.2-1.4.2-.6 0-1.1-.1-1.6-.2s-.9-.3-1.2-.6c-.3-.3-.6-.6-.8-1-.2-.4-.3-1-.3-1.6h-4c0 .7.1 1.5.3 2.1.2.6.5 1.1.9 1.6s.8.9 1.3 1.2c.5.3 1 .6 1.6.9.6.2 1.2.4 1.8.5.6.1 1.3.2 1.9.2 1.1 0 2-.1 2.9-.4.9-.2 1.6-.6 2.2-1.1.6-.5 1.1-1 1.4-1.7.3-.7.5-1.4.5-2.3 0-.8-.1-1.5-.4-2.2-.1-.2-.1-.3-.2-.4H23v-2z' })
      );
    }
  }]);

  return EditorStrikethroughS;
}(_react.Component);

exports.default = EditorStrikethroughS;