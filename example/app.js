import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page';

import './style/style.scss';

class App extends React.Component {
  render() {
    return (
      <Page
        spacing
        title="WeUI"
        subtitle="WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。"
      >
        hello
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
