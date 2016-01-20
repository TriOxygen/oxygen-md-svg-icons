import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NavigationArrowDropUp extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 14l5-5 5 5z"/>
      </SvgIcon>
    );
  }
}

export default NavigationArrowDropUp;

