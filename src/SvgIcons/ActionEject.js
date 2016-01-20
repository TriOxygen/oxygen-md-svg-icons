import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionEject extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>
      </SvgIcon>
    );
  }
}

export default ActionEject;

