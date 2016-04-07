import React from 'react';
import SvgIcon from '../SvgIcon';

let NotificationPriorityHigh = (props) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
  </SvgIcon>
);
NotificationPriorityHigh.displayName = 'NotificationPriorityHigh';

export default NotificationPriorityHigh;

