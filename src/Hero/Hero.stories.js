import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from '.'

storiesOf('Hero', module)
  .add('index', () => (
    <Hero
      title="SOME ENGAGING TITLE"
      subtitle="IN THE LAND OF NOWHERE"
      description="Conference about something that it's difficult to explain"
      action={() => console.log('Yep, you did something!')}
    />
  ))
