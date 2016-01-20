import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalCellularConnectedNoInternet0Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalCellularConnectedNoInternet0Bar;

