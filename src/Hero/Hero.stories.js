import React from 'react'
import { storiesOf } from '@storybook/react'
import backgroundImage from '../../assets/dsconf-wide.jpg';
import Button from '../Button/.';
import logo from '../../assets/dsconf-logo.png';

import Hero from '.'

storiesOf('Hero', module)
  .add('index', () => (
    <Hero
      background={backgroundImage}
      logo={logo}
      title="some engaging title here"
      subtitles={["IN THE LAND OF NOWHERE", "April 1st, 2025"]}
      description="Conference about something that it's difficult to explain"
    >
      <Button ghost>ACTION</Button>
    </Hero>
  ))
