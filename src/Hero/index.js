import React from 'react'
import PropTypes, {oneOfType, arrayOf, node} from 'prop-types';
import logo from '../../assets/dsconf-logo.png';

import * as s from './styles.js'

const Hero = ({children, title, subtitles, description, background}) => {
  return (
    <s.Hero background={background}>
      <s.Logo src={logo} />
      <s.Title>{title}</s.Title>
      <s.Subtitle>
        {subtitles.map((subtitle, index) => <p key={index}>{subtitle}</p>)}
      </s.Subtitle>
      <s.Description>{description}</s.Description>
      {children}
    </s.Hero>
  )
}

Hero.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Hero;
