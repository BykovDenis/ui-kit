import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';
import getNewReactThemeContext from '../styles/src';

import Switcher from  './src/index';
import { themes } from '../styles/src/themes';

export default {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: { actions: { argTypesRegex: '.+' } },
} as ComponentMeta<typeof Switcher>;

const Template1: ComponentStory<typeof Switcher> = () => {
  const [activeElement, setActiveElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const onSwitcherChange = (elementName: string) => {
    if (elementName === 'Native' && activeElement !== 'Native') {
      setActiveElement('Native');
      action('The new value Native');
    } else if (elementName === 'RUB' && activeElement !== 'RUB') {
      setActiveElement('RUB');
      action('The new value RUB');
    }
  }
  return <div style={{ display: 'inline-block' }}><Switcher onSwitcherChange={onSwitcherChange} element1={element1} element2={element2}
    activeElement={activeElement}/></div>;
}


const Template2: ComponentStory<typeof Switcher> = () => {
  const [activeElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <div style={{ display: 'inline-block' }}><Switcher disabled={true} element1={element1} element2={element2}
    activeElement={activeElement}/></div>
  </ReactThemeContext.Provider>;
}


export const NormalSwitcher = Template1.bind({});
export const DisabledSwitcher = Template2.bind({});
