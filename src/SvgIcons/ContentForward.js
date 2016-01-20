import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ContentForward extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8V4l8 8-8 8v-4H4V8z"/>
      </SvgIcon>
    );
  }
}

export default ContentForward;

