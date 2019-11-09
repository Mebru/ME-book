import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../me-button';

const Emoji_Button = () => {
  return (
    <Button>
      <span role={'img'}>😀</span>
      <span role={'img'}>😎</span>
      <span role={'img'}>👍</span>
      <span role={'img'}>💯</span>
    </Button>
  );
};

const Text_Button = () => {
  return (
    <Button>Hello Button</Button>
  );
};

storiesOf('ME-Button', module)
  .add('with text', Text_Button)
  .add('with some emoji', Emoji_Button)