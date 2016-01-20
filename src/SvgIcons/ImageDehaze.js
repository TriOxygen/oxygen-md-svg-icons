import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ImageDehaze extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>
      </SvgIcon>
    );
  }
}

export default ImageDehaze;

