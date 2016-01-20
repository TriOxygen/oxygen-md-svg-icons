import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class DeviceNetworkCell extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path fillOpacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>
      </SvgIcon>
    );
  }
}

export default DeviceNetworkCell;

