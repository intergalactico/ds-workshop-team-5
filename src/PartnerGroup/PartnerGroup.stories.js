import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import abstractLogo from "../../assets/abstract-dark.png";
import eficodeLogo from "../../assets/eficode-light.png";
import futuriceLogo from "../../assets/futurice-light.png";
import ideanLogo from "../../assets/idean-light.png";

import PartnerGroup from ".";

const logos = [
	{ title: "Abstract", src: abstractLogo },
	{ title: "Eficode", src: eficodeLogo },
	{ title: "Futurice", src: futuriceLogo },
	{ title: "Idean", src: ideanLogo }
];

storiesOf("PartnerGroup", module) // eslint-disable-line no-undef
  .add(
    "index",
    withInfo(`
 The PartnerGroup component renders a title and list (row) of logos
    `)(() => (
      <PartnerGroup
        title={"Partners"}
        logos={logos}
      />
    ))
  )
  .add("no PartnerGroup title", withInfo()(() => <PartnerGroup logos={logos} />));
