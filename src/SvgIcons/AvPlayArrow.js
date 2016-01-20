import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class AvPlayArrow extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M8 5v14l11-7z"/>
      </SvgIcon>
    );
  }
}

export default AvPlayArrow;

