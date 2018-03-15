/*
 * The stories (documentation) for the Profile component render two different
 * cases: with and without providing a list of social networks.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

import Profile from '.';

import avatar from '../../assets/avatar.jpg';

storiesOf('Profile', module) // eslint-disable-line no-undef
  .add('Index',
    withInfo(`
 The Profile component renders a card of a team member. It contains
 their avatar, name, title, and links to social networks.
    `)(() => (
      <Profile
        name="Donald Duck"
        role="Director of Everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
        description="Angry and half nude but somehow very loveable and funny duck. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
  )))
  .add('No description',
    withInfo()(() => (
      <Profile
        name="Donald Duck"
        role="Director of Everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
      />
  )))
  .add('Conditional alignment',
    withInfo()(() => (
      <Profile
        align="center"
        name="Donald Duck"
        role="Director of Everything"
        social={{
          twitter: 'donaldducknl',
          linkedin: 'https://www.linkedin.com/company/the-walt-disney-company/'
        }}
        avatar={avatar}
        description="Angry and half nude but somehow very loveable and funny duck. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      />
  )));
