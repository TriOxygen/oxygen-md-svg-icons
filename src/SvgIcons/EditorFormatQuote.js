import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorFormatQuote extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
      </SvgIcon>
    );
  }
}

export default EditorFormatQuote;

