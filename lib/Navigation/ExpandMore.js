'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandMore = function NavigationExpandMore(_ref) {
  var props = _ref.props;

  _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
  );
};

exports.default = NavigationExpandMore;