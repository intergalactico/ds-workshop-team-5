/*
 * Panel component provides a container with paddings.
 */
import React from 'react';
import PropTypes, { node, arrayOf, oneOfType } from 'prop-types';
import * as s from './styles.js'
import Button from '../Button/.';

/*
 * Even though the component is using plain CSS, it still can re-use
 * styled-components from other patterns.
 */
import * as ts from '../Typography/styles.js';

/*
 * Note! When using plain CSS, the class names have to be provided manually.
 */
const Panel = ({ children, dark, background }) => {
  return (
    <s.PanelContainer dark={dark} background={background}>
      {children}
    </s.PanelContainer>
  );
};

Panel.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  dark: PropTypes.bool,
  background: PropTypes.string
};

export default Panel;

/*
 * For re-use of Typography styles, Panel component has a couple of subcomponents to be
 * used as wrappers for texts and headers. Check out the story (documentation) to see how
 * these wrappers are used.
 */
const PanelHeader = ({ children }) => {
  return (
    <ts.Header1>
      {children}
      <s.Hr />
    </ts.Header1>
  );
};

PanelHeader.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { PanelHeader };


const PanelText = ({ children }) => {
  return (<ts.Lato>{children}</ts.Lato>);
};

PanelText.propTypes = {
  children: oneOfType([arrayOf(node), node])
};

export { PanelText };

const PanelAction = ({ children, action }) => {
  return (<Button onClick={action}>{children}</Button>);
};

PanelAction.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  action: PropTypes.func.isRequired
};

export { PanelAction };
