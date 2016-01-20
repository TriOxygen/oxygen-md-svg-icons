import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class FileFileUpload extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
      </SvgIcon>
    );
  }
}

export default FileFileUpload;

