import styled, {css} from 'styled-components';

/*
 * One styled-component can re-use styles from another. The Profile
 * styled-component takes the styles from the Typography component
 * and re-defines them.
 */
import * as ts from '../Typography/styles';

import colors from '../Colors/colorset';

export const Profile = styled.div`
  margin-bottom: 22.6px;
  width: 320px;
  ${props => props.align && css `
    text-align: ${props.align};
  `}
`;

export const AvatarWrap = styled.div`
  min-width: 150px;
  min-height: 150px;
  width: 30vmin;
  height: 30vmin;
  display:block;
  border-radius: 150%;
  overflow:hidden;
  position:relative;
  margin: 0 auto 12px;
`;

export const Avatar = styled.img`
  width:auto;
  height: 100%;
  display:block;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`;

/*
 * By analogy to defining an HTML tag and styles for an element,
 * in styled-component you can take an already defined element and
 * provide additional styles to it. It will use the tag of initial
 * elements.
 */
export const Name = styled(ts.Header2)`
  text-align:center;
`;
export const Role = styled(ts.P)`
  color: ${colors.grey};
  text-align:center;
`;

export const Desc = styled(ts.P)`
  font-family: 'Open Sans', Arial, sans-serif;
  line-height: 1.7em;
  font-weight: 500;
  color: #333;
  padding-bottom:10px;
`;

/*
 * The colors can be takes from the set and used as variables.
 */
export const IconList = styled.ul`
  text-align:center;
  color: ${colors.grey};
  font-size: 16px;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;

export const IconListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`;

export const IconLink = styled.a`
  color: ${colors.grey};
  text-decoration: none;
`;
