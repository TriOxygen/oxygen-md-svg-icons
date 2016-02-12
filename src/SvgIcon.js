import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const styles = oxygenCss({
  icon: {
    display: 'inline-block',
    height: 24,
    width: 24,
    userSelect: 'none',
    transition: 'cubic-bezier(0.23, 1, 0.32, 1)',
    verticalAlign: 'middle',
    fill: 'currentColor'
  },
  block: {
    display: 'block'
  }
});

class SvgIcon extends Component {
  static displayName = 'SvgIcon';

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    viewBox: PropTypes.string,
    block: PropTypes.bool
  };

  static defaultProps = {
    viewBox: '0 0 24 24',
  };

  state = {
    mouseOver: false
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const {
      block,
      children,
      viewBox,
      ...other,
    } = this.props;


    const classes = classNames(styles.icon, {
      [styles.block]: block
    })

    return (
      <svg
        {...other}
        className={classes}
        viewBox={viewBox}>
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
