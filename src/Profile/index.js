/*
 * The Profile component renders a card of a team member. It contains
 * their avatar, name, title, and links to social networks.
 */

import React from 'react';
import { string, object } from 'prop-types';

/*
 * The Profile component has its own styles but also it used the styles
 * of the Typography component. These styles are imported directly from the
 * styled component file of the Typography component.
 */
import * as s from './styles.js';

/*
 * The Profile component reuses the Icon component when it needs to
 * render the icons for the social networks.
 */
import Icon from '../Icon';

const Profile = (props) => {
  /*
   * Cards for different people output different information. This is communicated
   * to the component with properties.
   */
  const { name, role, social, avatar, description, align } = props;

  /*
   * The component gets a list of social icons as an object. They need to be rendered as
   * HTML elements. For that, we iterate through the object and render an element from
   * the styled-components for each icon.
   */
  const socialItems = social ? Object.keys(social).map(key => {
      let link = social[key];
      if (key === 'twitter') {
        link = `https://twitter.com/@${social[key]}`;
      }

      return (<s.IconListItem key={'social-icon-item-' + key}>
          <s.IconLink href={link} target="_blank"><Icon name={key}/></s.IconLink>
        </s.IconListItem>);
    }) : null;
  const socialList = social ? <s.IconList>{socialItems}</s.IconList> : null;

  /*
   * The container for the card is the Profile styled-component, which brings
   * some styles. Inside, it renders the avatar and text info.
   */
  return (
    <s.Profile align={align}>
      <s.AvatarWrap>
        <s.Avatar src={avatar} title={`Profile | ${name}`}/>
      </s.AvatarWrap>
      <s.Name>{name}</s.Name>
      <s.Role>{role}</s.Role>
      {socialList}
      <s.Desc>{description}</s.Desc>
    </s.Profile>
  );
};

Profile.propTypes = {
  name: string.isRequired,
  role: string.isRequired,
  avatar: string.isRequired,
  social: object,
  description: string,
  align: string
};

export default Profile;
