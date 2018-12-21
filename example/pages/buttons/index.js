import React from 'react';
import Page from '../../components/page';
import Button from 'components/button';

import './index.scss';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <Page spacing title='Button' subTitle='按钮'>
        <Button>页面主操作 Normal</Button>
        <Button loading>页面主操作 Loading</Button>
        <Button disabled>页面主操作 Disabled</Button>
        <Button plain>页面次操作 Normal</Button>
        <Button plain loading>
          页面次操作 Loading
        </Button>
        <Button plain disabled>
          页面次操作 Disabled
        </Button>
        <Button type='warn'>警告类按钮 Normal</Button>
        <Button type='warn' loading>
          警告类按钮 Loading
        </Button>
        <Button type='warn' disabled>
          警告类按钮 Disabled
        </Button>
        <div className='button-sp-area'>
          <Button>按钮</Button>
          <Button plain>按钮</Button>
          <Button plain disabled>
            按钮
          </Button>
        </div>
        <div className='button-sp-area-small'>
          <Button size='small'>按钮</Button>
          <Button size='small' plain>
            按钮
          </Button>
          <Button size='small' plain disabled>
            按钮
          </Button>
        </div>
      </Page>
    );
  }
}
