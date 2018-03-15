import styled, { css } from 'styled-components'
import * as ts from '../Typography/styles.js';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  ${props => props.background && css`
    background: url(${props.background}) no-repeat;
    background-size: cover;
  `}
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 32px;
`;

export const Title = styled(ts.Header1)`
  color: #FFF;
  text-align: center;
`;

export const Subtitle = styled(ts.Header3)`
  color: #FFF;
  text-align: center;
`;

export const Description = styled(ts.Lato)`
  color: #FFF;
`;
