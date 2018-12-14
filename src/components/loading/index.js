import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Loading extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <i className='weui-loading' />;
  }
}

export default Loading;
