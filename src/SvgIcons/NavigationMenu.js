import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NavigationMenu extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </SvgIcon>
    );
  }
}

export default NavigationMenu;

