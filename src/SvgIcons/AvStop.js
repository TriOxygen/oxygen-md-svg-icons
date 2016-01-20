import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvStop extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 6h12v12H6z"/>
      </SvgIcon>
    );
  }
}

export default AvStop;

