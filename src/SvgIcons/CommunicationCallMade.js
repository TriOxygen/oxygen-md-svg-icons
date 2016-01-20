import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class CommunicationCallMade extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
      </SvgIcon>
    );
  }
}

export default CommunicationCallMade;

