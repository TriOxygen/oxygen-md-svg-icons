import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';

class ActionReportProblem extends Component {
  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </SvgIcon>
    );
  }
}

export default ActionReportProblem;

