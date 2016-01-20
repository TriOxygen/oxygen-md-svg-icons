import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NavigationArrowDropDownCircle extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/>
      </SvgIcon>
    );
  }
}

export default NavigationArrowDropDownCircle;

