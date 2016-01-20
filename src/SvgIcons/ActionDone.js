import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionDone extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
      </SvgIcon>
    );
  }
}

export default ActionDone;

