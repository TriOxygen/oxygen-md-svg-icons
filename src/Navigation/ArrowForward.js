import React from 'react';
import SvgIcon from '../SvgIcon';

let NavigationArrowForward = (props) => (
  <SvgIcon {...props}>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </SvgIcon>
);
NavigationArrowForward.displayName = 'NavigationArrowForward';

export default NavigationArrowForward;
