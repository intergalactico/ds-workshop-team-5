import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button/.';
import logo from '../../assets/dsconf-logo.png';

import * as s from './styles.js'

const Hero = ({title, subtitle, description ,action}) => {
  return (
    <s.Hero>
      <s.Logo src={logo} />
      <s.Title>{title}</s.Title>
      <s.Subtitle>{subtitle}</s.Subtitle>
      <s.Description>{description}</s.Description>
      <Button onClick={action}>Action</Button>
    </s.Hero>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Hero
