import React from 'react';
import Page from '../../components/page';
import IconForm from './images/icon_nav_form.png';
import IconLayout from './images/icon_nav_layout.png';
import IconFeedback from './images/icon_nav_feedback.png';
import IconNav from './images/icon_nav_nav.png';
import IconSearch from './images/icon_nav_search.png';
import IconZIndex from './images/icon_nav_z-index.png';

import MenuItem from 'egComponents/menuitem';

import './index.scss';

const menus = [
  {
    title: '表单',
    icon: IconForm,
    items: [
      { title: 'Button' },
      { title: 'Input' },
      { title: 'List' },
      { title: 'Slider ' }
    ]
  },
  {
    title: '基础组件',
    icon: IconLayout,
    items: [
      { title: 'Article' },
      { title: 'Badge' },
      { title: 'Flex' },
      { title: 'Footer' },
      { title: 'Gallery' }
    ]
  },
  { title: '操作反馈', icon: IconFeedback, items: [] },
  { title: '导航相关', icon: IconNav, items: [] },
  { title: '搜索相关', icon: IconSearch, items: [] },
  { title: '层级规范', icon: IconZIndex, items: [] }
];

export default class MsgPage extends React.Component {
  render() {
    return (
      <Page
        spacing
        title='WeUI'
        subTitle='WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。'
      >
        <ul>
          {menus.map((menu, index) => (
            <li key={index} className='rw-menu-li'>
              <MenuItem menu={menu} />
            </li>
          ))}
        </ul>
      </Page>
    );
  }
}
