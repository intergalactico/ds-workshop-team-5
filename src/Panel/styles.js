import styled, { css } from 'styled-components'
import colors from "../Colors/colorset";

export const PanelContainer = styled.div`
  padding: 150px 35px;
  ${props => props.dark && css`
    background: ${colors.dark};
    color: #FFF !important;
  `}
  ${props => props.background && css`
    background: #FFF url(${props.background}) no-repeat center bottom;
  `}
`;

export const Hr = styled.hr`
  margin-left: 0;
  width: 120px;
  height: 6px;
  border: none;
  background-color: ${colors.pink};
`;
