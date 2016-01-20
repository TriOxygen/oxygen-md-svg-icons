import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class HardwarePowerInput extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>
      </SvgIcon>
    );
  }
}

export default HardwarePowerInput;

