import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import NavBar from ".";

const navItems = [
  {
    title: "Home",
    src: "/",
    active: true
  },
  {
    title: "About",
    src: "/about"
  }
];

storiesOf("NavBar", module) // eslint-disable-line no-undef
  .add(
    "index",
    withInfo(`
 The NavBar component renders the navigation bar with logo on left, navigation on right
    `)(() => <NavBar navItems={navItems} />)
  );
