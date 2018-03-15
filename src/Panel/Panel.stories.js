import React from 'react';
import { storiesOf } from '@storybook/react';
import image from '../../assets/dsconf2-wide.jpg';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/*
 * This story (documentation) shows how to use the Panel component and its
 * helping sub-components for the texts. The subcomponents are imported
 * as one object and are renamed to "t", this is shorter. Look below how
 * to wrap texts with them.
 */
import Panel, {PanelHeader, PanelText, PanelAction} from '.';

storiesOf('Panel', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`
 Panel component provides a container with paddings.
    `)(() => (
      <Panel dark background={image}>
        <PanelHeader>Test</PanelHeader>
        <PanelText>Text inside the section (with typography).</PanelText>
        <PanelAction action={() => console.log('You clicked something')}>Do something</PanelAction>
      </Panel>
  )));
