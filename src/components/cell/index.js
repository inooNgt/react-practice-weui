import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const CellWrapper = props => {
  let { children, path, className, replace } = props;
  return path ? (
    <Link className={className} to={path} replace={replace}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
};

export default class Cell extends React.Component {
  render() {
    let { title, path, replace } = this.props;
    return (
      <CellWrapper className='rw-cell' path={path} replace={replace}>
        <p className='cell-title'>{title}</p>
        <div className='cell-arrow' />
      </CellWrapper>
    );
  }
}
