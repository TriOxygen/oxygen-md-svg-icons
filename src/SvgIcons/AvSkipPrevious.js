import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvSkipPrevious extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
      </SvgIcon>
    );
  }
}

export default AvSkipPrevious;

