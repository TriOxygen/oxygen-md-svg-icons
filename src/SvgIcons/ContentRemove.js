import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ContentRemove extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M19 13H5v-2h14v2z"/>
      </SvgIcon>
    );
  }
}

export default ContentRemove;

