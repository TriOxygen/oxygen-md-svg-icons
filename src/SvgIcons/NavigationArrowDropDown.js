import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NavigationArrowDropDown extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 10l5 5 5-5z"/>
      </SvgIcon>
    );
  }
}

export default NavigationArrowDropDown;

