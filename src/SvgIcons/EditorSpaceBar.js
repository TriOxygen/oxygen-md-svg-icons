import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorSpaceBar extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M18 9v4H6V9H4v6h16V9z"/>
      </SvgIcon>
    );
  }
}

export default EditorSpaceBar;

