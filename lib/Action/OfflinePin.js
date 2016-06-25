'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionOfflinePin = function ActionOfflinePin(props) {
  _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { id: 'a', d: 'M0 0h24v24H0V0z' })
    ),
    _react2.default.createElement(
      'clipPath',
      { id: 'b' },
      _react2.default.createElement('use', { overflow: 'visible' })
    ),
    _react2.default.createElement('path', { clipPath: 'url(#b)', d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z' })
  );
};

exports.default = ActionOfflinePin;