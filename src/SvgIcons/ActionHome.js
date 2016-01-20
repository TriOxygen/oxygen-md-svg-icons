import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionHome extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </SvgIcon>
    );
  }
}

export default ActionHome;

