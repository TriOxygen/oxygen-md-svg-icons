import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvFastForward extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
      </SvgIcon>
    );
  }
}

export default AvFastForward;

