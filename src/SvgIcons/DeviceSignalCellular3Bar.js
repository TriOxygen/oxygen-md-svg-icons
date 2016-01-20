import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalCellular3Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalCellular3Bar;

