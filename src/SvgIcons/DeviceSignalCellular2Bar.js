import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalCellular2Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalCellular2Bar;

