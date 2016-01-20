import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvRepeat extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
      </SvgIcon>
    );
  }
}

export default AvRepeat;

