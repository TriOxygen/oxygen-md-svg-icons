'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleIndeterminateCheckBox = function ToggleIndeterminateCheckBox(_ref) {
  var props = _ref.props;

  _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('path', { id: 'a', d: 'M0 0h24v24H0z' })
    ),
    _react2.default.createElement(
      'clipPath',
      { id: 'b' },
      _react2.default.createElement('use', { overflow: 'visible' })
    ),
    _react2.default.createElement('path', { clipPath: 'url(#b)', d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z' })
  );
};

exports.default = ToggleIndeterminateCheckBox;