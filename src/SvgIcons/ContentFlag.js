import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ContentFlag extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
      </SvgIcon>
    );
  }
}

export default ContentFlag;

