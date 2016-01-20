import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class FileFileDownload extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </SvgIcon>
    );
  }
}

export default FileFileDownload;

