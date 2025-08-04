import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

import ListItem from '../list-item/src';
import List from './src';
import IList from './types/ilist';
import ListType from './enum/list-type';
import ListItemType from '@dbykov-ui-kit/ListItem/enums/list-item-type';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: { control: { type: 'select' }, options: [ListType.Buttons, ListType.List], defaultValue: ListType.Buttons },
  },
  args: {
    textMessage: 'text message',
    label: 'label',
  },
} as Meta<typeof List>;

const ThemeDarkTemplate: StoryFn<typeof List> = (args: IList) => {
  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
  const ReactThemeContext = getNewReactThemeContext(themes?.dark);

  return (
    <ReactThemeContext.Provider value={themes?.dark}>
      <div style={{ width: '600px' }}>
        <List {...args}>
          {elements.map((element: string, index: number) => (
            <ListItem
              key={index}
              onClick={action('clicked')}
              isDisable={index === 2}
              isSelected={index === 3 || index === 1}
              width={400}
              type={ListItemType.Text}
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
    <ReactThemeContext.Provider value={themes?.light}>
      <div style={{ width: '220px' }}>
        <List {...args}>
          {elements.map((element: string, index: number) => (
            <ListItem key={index} type={ListItemType.Button} onClick={action('clicked')} isVisibleTextUnderline={true}>
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
