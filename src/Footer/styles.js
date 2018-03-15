import styled, { css } from 'styled-components'
import * as ts from '../Typography/styles.js';
import colors from '../Colors/colorset';

export const FooterCol = styled.div`
	color: ${colors.grey};
	${props => props.length && css `
    	width: calc( (100% / ${props.length}) - 1em);  
  	`}
  	margin: .5em;
  	text-align:center;
`;

export const Footer = styled.div`
  background-color:#333;
  padding: 1em 0 .333em;
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items:stretch;
`;
