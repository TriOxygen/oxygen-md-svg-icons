import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ContentFilterList extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
      </SvgIcon>
    );
  }
}

export default ContentFilterList;

