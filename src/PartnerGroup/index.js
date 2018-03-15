import React from "react";
import { string, shape, arrayOf } from "prop-types";

import * as s from "./styles.js";

const PartnerGroup = props => {
  const { title, logos } = props;

  return (
    <s.PartnerGroup>
			<s.Title>{title}</s.Title>
			<s.Logos>
				{logos.map((logo, index) => (
					<s.Img key={index} src={logo.src} alt={logo.title} />
				))}
			</s.Logos>
    </s.PartnerGroup>
  );
};

PartnerGroup.propTypes = {
  title: string,
  logos: arrayOf(
    shape({
      title: string.isRequired,
      src: string.isRequired
    })
  ).isRequired
};

export default PartnerGroup;
