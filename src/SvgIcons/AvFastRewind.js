import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvFastRewind extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
      </SvgIcon>
    );
  }
}

export default AvFastRewind;

