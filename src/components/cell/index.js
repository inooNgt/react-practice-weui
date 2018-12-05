import React from 'react';
import './index.scss';

export default class Cell extends React.Component {
  render() {
    let { title } = this.props;
    return (
      <div className='rw-cell'>
        <p className='cell-title'>{title}</p>
        <div className='cell-arrow' />
      </div>
    );
  }
}
