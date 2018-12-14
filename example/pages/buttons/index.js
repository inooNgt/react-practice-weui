import React from 'react';
import Page from '../../components/page';
import Button from 'components/button';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <Page spacing title='Button' subTitle='按钮'>
        <Button>页面主操作 Normal</Button>
        <Button loading>页面主操作 Loading</Button>
        <Button disabled>页面主操作 Disabled</Button>
      </Page>
    );
  }
}
