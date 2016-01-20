import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionViewColumn extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/>
      </SvgIcon>
    );
  }
}

export default ActionViewColumn;

