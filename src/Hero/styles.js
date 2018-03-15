import styled from 'styled-components'
import * as ts from '../Typography/styles.js';
import backgroundImage from '../../assets/dsconf-wide.jpg';

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 560px;
  background: #FFF url(${backgroundImage}) no-repeat center bottom;
`

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 32px;
`;

export const Title = styled(ts.Header1)`
  color: #FFF;
`;

export const Subtitle = styled(ts.Header3)`
  color: #FFF;
`;

export const Description = styled(ts.Lato)`
  color: #FFF;
`;
