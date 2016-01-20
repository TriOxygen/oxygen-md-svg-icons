import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionViewStream extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/>
      </SvgIcon>
    );
  }
}

export default ActionViewStream;

