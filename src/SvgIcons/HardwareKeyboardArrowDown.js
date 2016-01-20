import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class HardwareKeyboardArrowDown extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
      </SvgIcon>
    );
  }
}

export default HardwareKeyboardArrowDown;
