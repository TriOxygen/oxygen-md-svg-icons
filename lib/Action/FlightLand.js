'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionFlightLand = function ActionFlightLand(props) {
  _react2.default.createElement(
    _SvgIcon2.default,
    props,
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
};

exports.default = ActionFlightLand;