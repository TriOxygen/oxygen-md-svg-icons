import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class CommunicationClearAll extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/>
      </SvgIcon>
    );
  }
}

export default CommunicationClearAll;
