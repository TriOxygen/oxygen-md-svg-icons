import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorFormatAlignRight extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
      </SvgIcon>
    );
  }
}

export default EditorFormatAlignRight;

