import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvSkipNext extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
      </SvgIcon>
    );
  }
}

export default AvSkipNext;

