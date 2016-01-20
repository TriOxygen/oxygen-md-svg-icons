import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorFormatSize extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>
      </SvgIcon>
    );
  }
}

export default EditorFormatSize;

