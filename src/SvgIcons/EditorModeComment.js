import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorModeComment extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>
      </SvgIcon>
    );
  }
}

export default EditorModeComment;

