import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ContentSort extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
      </SvgIcon>
    );
  }
}

export default ContentSort;

