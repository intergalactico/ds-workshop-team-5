import styled, { css } from "styled-components";

import * as ts from "../Typography/styles.js";
import colors from "../Colors/colorset";

export const PartnerGroup = styled.div`
	background-color: ${colors.dark};
	padding: 10px 0;
`

export const Logos = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
`;

export const Title = styled(ts.Header2)`
	color: rgb(255, 255, 255);
	text-align: center;

`;

export const Img = styled.img`
	width: 25%;
	padding: 0 2.5%;
	height: 100%;
`
