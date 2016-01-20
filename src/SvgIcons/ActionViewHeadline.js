import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionViewHeadline extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
      </SvgIcon>
    );
  }
}

export default ActionViewHeadline;

