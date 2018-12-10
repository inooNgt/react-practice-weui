import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Cell from 'components/cell';

import './index.scss';

export default class MenuItem extends React.Component {
  static defaultProps = {
    transitionName: 'slide-menu'
  };
  state = {
    showItems: false,
    itemOpacity: 1
  };
  handleClick() {
    this.setState(state => {
      return {
        showItems: !state.showItems,
        itemOpacity: state.showItems ? 1 : 0.4
      };
    });
  }
  render() {
    let { menu, transitionName } = this.props;
    let { showItems, itemOpacity } = this.state;
    return (
      <div>
        <div
          className='rw-menu-item'
          style={{ opacity: itemOpacity, transition: 'opacity 0.3s' }}
          onClick={this.handleClick.bind(this)}
        >
          <p className='menu-title'>{menu.title}</p>
          <img className='menu-icon' src={menu.icon} />
        </div>
        <CSSTransition
          classNames={transitionName}
          timeout={{ enter: 0, exit: 0, appear: 500 }}
          appear={showItems}
          in={showItems}
        >
          <div className='rw-menu-inner'>
            <div className='rw-menu-content'>
              {menu.items.map((item, index) => (
                <Cell title={item.title} path={item.path} key={index} />
              ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
