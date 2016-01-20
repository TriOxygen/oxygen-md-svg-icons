import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class HardwareKeyboardBackspace extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>
      </SvgIcon>
    );
  }
}

export default HardwareKeyboardBackspace;

