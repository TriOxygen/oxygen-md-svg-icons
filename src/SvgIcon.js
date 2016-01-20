import React, { Component, PropTypes } from 'react';

const styles = oxygenStyle({
  icon: {
    display: 'inline-block',
    height: 24,
    width: 24,
    userSelect: 'none',
    transition: 'cubic-bezier(0.23, 1, 0.32, 1)',
    verticalAlign: 'middle'
  }
});

class SvgIcon extends Component {
  static displayName = 'SvgIcon';

  static propTypes = {
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
    viewBox: PropTypes.string
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    color: 'rgba(30, 30, 30, 1)',
    offColor: 'rgba(128, 128, 128, 0.8)',
  };

  state = {
    mouseOver: false
  };

  _handleMouseLeave(event) {
    this.setState({ mouseOver: false });
    this.props.onMouseLeave(event);
  }

  _handleMouseEnter(event) {
    this.setState({ mouseOver: true });
    this.props.onMouseEnter(event);
  }

  render() {
    const {
      children,
      color,
      hoverColor,
      onMouseEnter,
      onMouseLeave,
      style,
      viewBox,
      ...other,
    } = this.props;

    let offColor;
    offColor = style && style.fill ? style.fill : color;
    const onColor = hoverColor ? hoverColor : offColor;

    const iconStyle = Object.assign({}, style, {
      // Make sure our fill color overrides fill provided in props.style
      fill: this.state.mouseOver ? onColor : offColor,
    });

    const events = hoverColor ? {
      onMouseEnter: this._handleMouseEnter.bind(this),
      onMouseLeave: this._handleMouseLeave.bind(this),
    } : {};

    return (
      <svg
        {...other}
        {...events}
        className={styles.icon}
        style={iconStyle}
        viewBox={viewBox}>
        {children}
      </svg>
    );
  }
}

export default SvgIcon;
