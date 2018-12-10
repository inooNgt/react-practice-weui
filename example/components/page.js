import React from 'react';

export default class Page extends React.Component {
  render() {
    const {
      title,
      subTitle,
      spacing,
      className,
      children,
      footer
    } = this.props;

    return (
      <article className={`page ${className || ''}`}>
        <div className='page-header'>
          <h1 className='page-title'>{title}</h1>
          <p className='page-desc'>{subTitle}</p>
        </div>
        <div className={`page-body ${spacing ? 'page-body-space' : ''}`}>
          {children}
        </div>
        {footer ? <div className='page__ft'>{footer}</div> : false}
      </article>
    );
  }
}
