import React from 'react';
import { storiesOf } from '@storybook/react';

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
  .add('Single Column', () => (
    <Footer cols={col} />
  ))
  .add('Multiple columns', () => (
  	 <Footer cols={cols} />
  ))
