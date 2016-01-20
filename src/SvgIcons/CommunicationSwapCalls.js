import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class CommunicationSwapCalls extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"/>
      </SvgIcon>
    );
  }
}

export default CommunicationSwapCalls;
