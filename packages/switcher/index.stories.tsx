import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';
import getNewReactThemeContext from '../styles/src';

import Switcher from  './src/index';
import { themes } from '../styles/src/themes';
import TSwitcher from "./types/tswitcher";

export default {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: { actions: { argTypesRegex: '.+' } },
  argTypes: {
    disabled: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    fontSize: { control: { type: 'select', options: [ 10,12,14,16 ] }, defaultValue: 14  },
  },
} as ComponentMeta<typeof Switcher>;

const TemplateDarkTheme: ComponentStory<typeof Switcher> = (args: TSwitcher) => {
  const [activeElement, setActiveElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onSwitcherChange = (elementName: string) => {
    if (elementName === 'Native' && activeElement !== 'Native') {
      setActiveElement('Native');
      action('The new value Native');
    } else if (elementName === 'RUB' && activeElement !== 'RUB') {
      setActiveElement('RUB');
      action('The new value RUB');
    }
  }
  return <div style={{ display: 'inline-block' }}><Switcher {...args} onSwitcherChange={onSwitcherChange} element1={element1} element2={element2}
    activeElement={activeElement}/></div>;
}

const TemplateLightTheme: ComponentStory<typeof Switcher> = (args: TSwitcher)  => {
  const [activeElement, setActiveElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const onSwitcherChange = (elementName: string) => {
    if (elementName === 'Native' && activeElement !== 'Native') {
      setActiveElement('Native');
      action('The new value Native');
    } else if (elementName === 'RUB' && activeElement !== 'RUB') {
      setActiveElement('RUB');
      action('The new value RUB');
    }
  }
  return <div style={{ display: 'inline-block' }}><Switcher {...args} onSwitcherChange={onSwitcherChange} element1={element1} element2={element2}
                                                            activeElement={activeElement}/></div>;
}


const Template2: ComponentStory<typeof Switcher> = () => {
  const [activeElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
      <ReactThemeContext.Provider value={themes.dark}><Switcher disabled={true} element1={element1} element2={element2}
    activeElement={activeElement}/>
      </ReactThemeContext.Provider>
  </ReactThemeContext.Provider>;
}


export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});