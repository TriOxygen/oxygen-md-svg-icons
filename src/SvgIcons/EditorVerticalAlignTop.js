import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorVerticalAlignTop extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>
      </SvgIcon>
    );
  }
}

export default EditorVerticalAlignTop;

