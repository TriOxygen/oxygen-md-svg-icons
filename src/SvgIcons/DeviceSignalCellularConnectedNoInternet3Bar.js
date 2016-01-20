import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceSignalCellularConnectedNoInternet3Bar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/>
      </SvgIcon>
    );
  }
}

export default DeviceSignalCellularConnectedNoInternet3Bar;

