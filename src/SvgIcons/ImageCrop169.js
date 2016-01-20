import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ImageCrop169 extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
      </SvgIcon>
    );
  }
}

export default ImageCrop169;

