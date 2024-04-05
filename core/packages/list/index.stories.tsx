import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

import ListItem from '../list-item/src';
import List from './src';
import IList from './types/ilist';
import ListType from './enum/list-type';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: { control: { type: 'select' }, options: ['button', 'text'] },
  },
  args: {
    textMessage: 'text message',
    label: 'label',
    type: 'button',
  },
} as Meta<typeof List>;

const ThemeDarkTemplate: StoryFn<typeof List> = (args: IList) => {
  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
  const ReactThemeContext = getNewReactThemeContext(themes?.dark);

  return (
    <ReactThemeContext.Provider value={themes?.dark}>
      <div style={{ width: '600px' }}>
        <List type={ListType.Buttons}>
          {elements.map((element: string, index: number) => (
            <ListItem
              key={index}
              onClick={action('clicked')}
              isDisable={index === 2}
              isSelected={index === 3 || index === 1}
              width={400}
            >
              {element}
            </ListItem>
          ))}
        </List>
      </div>
    </ReactThemeContext.Provider>
  );
};

const ThemeLightTemplate: StoryFn<typeof List> = (args: IList) => {
  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
  const ReactThemeContext = getNewReactThemeContext(themes?.loanPricing);

  return (
    <ReactThemeContext.Provider value={themes?.loanPricing}>
      <div style={{ width: '220px' }}>
        <List type="list">
          {elements.map((element: string, index: number) => (
            <ListItem key={index} onClick={action('clicked')}>
              {element}
            </ListItem>
          ))}
        </List>
      </div>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});
