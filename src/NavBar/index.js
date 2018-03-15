import React from "react";
import { string, shape, arrayOf } from "prop-types";

import * as s from "./styles.js";

import logo from "../../assets/dsconf-logo-small.png";

const NavBar = props => {
  const { navItems } = props;

  return (
    <s.NavBar>
      <s.Logo src={logo} alt="DSConf Logo" />

      <s.Navigation>
        {navItems.map((item, index) => (
          <s.NavigationItem {...item} key={index}>
            {item.title}
          </s.NavigationItem>
        ))}
      </s.Navigation>
    </s.NavBar>
  );
};

NavBar.propTypes = {
  navItems: arrayOf(
    shape({
      title: string.isRequired,
      href: string.isRequired
    })
  ).isRequired
};

export default NavBar;
