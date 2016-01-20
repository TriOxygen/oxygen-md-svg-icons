import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorPublish extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/>
      </SvgIcon>
    );
  }
}

export default EditorPublish;

