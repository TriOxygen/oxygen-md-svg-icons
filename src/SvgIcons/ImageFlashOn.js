import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ImageFlashOn extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
      </SvgIcon>
    );
  }
}

export default ImageFlashOn;

