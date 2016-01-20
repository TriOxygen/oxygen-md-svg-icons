import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvPause extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
      </SvgIcon>
    );
  }
}

export default AvPause;

