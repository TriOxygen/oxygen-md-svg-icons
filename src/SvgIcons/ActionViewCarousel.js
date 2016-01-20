import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionViewCarousel extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/>
      </SvgIcon>
    );
  }
}

export default ActionViewCarousel;

