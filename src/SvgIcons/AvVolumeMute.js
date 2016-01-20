import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvVolumeMute extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
      </SvgIcon>
    );
  }
}

export default AvVolumeMute;

