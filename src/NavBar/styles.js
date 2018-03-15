import styled from "styled-components";

import * as ts from "../Typography/styles.js";

export const NavBar = styled.div`
  background-color: rgb(1, 126, 159);
	display: inline-block;
	float: left;
  padding: 10px 0;
  width: 100%;
`;

export const Logo = styled.img`
  float: left;
  max-width: 156px;
  width: 100%;
  padding: 0 2.5%;
`;

export const Navigation = styled.nav`
  float: right;
  margin: 5px 10px 0 0;
  padding: 0;
`;

export const NavigationItem = styled(ts.A)`
  color: ${props => (props.active ? "rgb(0, 214, 178)" : "rgb(255, 255, 255)")};
  float: left;
  list-style: none;
  margin: 0 5px;
  padding: 5px;
  text-decoration: none;

  :hover {
    color: ${props =>
      props.active ? "rgb(255, 255, 255)" : "rgb(0, 214, 178)"};
    cursor: pointer;
  }
`;
