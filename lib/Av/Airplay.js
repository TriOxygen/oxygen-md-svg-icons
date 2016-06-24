'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvAirplay = function AvAirplay(_ref) {
  var props = _ref.props;

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
    _react2.default.createElement('path', { d: 'M6 22h12l-6-6zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V5h18v12h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z', clipPath: 'url(#d)' })
  );
};

exports.default = AvAirplay;