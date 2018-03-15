import styled from "styled-components";

import * as ts from "../Typography/styles.js";

export const NavBar = styled.div`
  display: inline-block;
  float: left;
  width: 100%;
`;

export const Logo = styled.img`
	background: rgb(0, 0, 0);
	background-size: contain;
  float: left;
  max-width: 70px;
  width: 100%;
  padding: 15px;
`;

export const Navigation = styled.nav`
  float: right;
  font-size: 1.3em;
  margin: 30px 10px 0 0;
  padding: 0;
`;

export const NavigationItem = styled(ts.A)`
  color: ${props => (props.active ? "rgb(0, 214, 178)" : "rgb(0, 0, 0)")};
  float: left;
  list-style: none;
  margin: 0 10px;
  padding: 5px;
  text-decoration: none;

  :hover {
    color: ${props => (props.active ? "rgb(0, 0, 0)" : "rgb(0, 214, 178)")};
    cursor: pointer;
  }
`;
