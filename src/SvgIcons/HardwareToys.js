import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class HardwareToys extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"/>
      </SvgIcon>
    );
  }
}

export default HardwareToys;

