import React from 'react';
import './index.scss';
import Cell from 'components/cell';

export default class MenuItem extends React.Component {
  componentDidMount() {}
  render() {
    let { menu } = this.props;
    return (
      <div>
        <div className='rw-menu-item'>
          <p className='menu-title'>{menu.title}</p>
          <img className='menu-icon' src={menu.icon} />
        </div>
        <ul className='rw-menu-inner'>
          {menu.items.map((item, index) => (
            <li key={index}>
              <Cell title={item.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
