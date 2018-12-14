import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingComponent from 'components/loading';

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    /**
     * Options: primary, default, warn, vcode
     *
     */
    type: PropTypes.string,
    /**
     * Options: normal, small
     *
     */
    size: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    loading: false,
    type: 'primary',
    size: 'normal'
  };

  render() {
    const {
      component,
      type,
      size,
      plain,
      className,
      children,
      loading,
      ...others
    } = this.props;
    const Component = component ? component : this.props.href ? 'a' : 'button';
    const classes = classNames({
      'weui-btn': true,
      'weui-btn_warn': type === 'warn',
      'weui-btn_mini': size === 'small',
      'weui-btn_loading': loading,
      'weui-btn_primary': type === 'primary' && !plain,
      'weui-btn_default': type === 'default' && !plain,
      'weui-btn_plain-primary': type === 'primary' && plain,
      'weui-btn_plain-default': type === 'default' && plain,
      'weui-btn_disabled': this.props.disabled && !plain,
      'weui-btn_plain-disabled': this.props.disabled && plain,
      [className]: className
    });

    return (
      <Component {...others} className={classes}>
        {loading ? <LoadingComponent /> : null}
        {children}
      </Component>
    );
  }
}

export default Button;
