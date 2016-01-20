import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionAccessibility extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
      </SvgIcon>
    );
  }
}

export default ActionAccessibility;

