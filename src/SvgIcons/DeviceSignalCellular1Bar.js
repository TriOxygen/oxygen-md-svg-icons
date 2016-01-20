import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalCellular1Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalCellular1Bar;

