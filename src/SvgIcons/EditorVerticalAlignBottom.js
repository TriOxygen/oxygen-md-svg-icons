import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class EditorVerticalAlignBottom extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
      </SvgIcon>
    );
  }
}

export default EditorVerticalAlignBottom;

