import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from '.';
import Button from '../Button';

const col = [
	<p>Whats up errrrybody?</p>,
];

const cols = [
	<p>Whats up errrrybody?</p>,
	<Button color="tomato" textColor="white" size="0.785rem" >Push me!</Button>
];

storiesOf('Footer', module)
  .add('Single Column',
    withInfo(`
 The Footer gets an array of components and displays them side to side.
    `)(() => (
      <Footer cols={col} />
  )))
  .add('Multiple Columns',
    withInfo(`
 The Footer gets an array of components and displays them side to side.
    `)(() => (
      <Footer cols={cols} />
  )));
