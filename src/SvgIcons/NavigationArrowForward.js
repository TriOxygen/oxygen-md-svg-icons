import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class NavigationArrowForward extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
      </SvgIcon>
    );
  }
}

export default NavigationArrowForward;

