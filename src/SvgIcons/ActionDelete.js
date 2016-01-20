import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionDelete extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      </SvgIcon>
    );
  }
}

export default ActionDelete;

