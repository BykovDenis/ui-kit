import ListItemType from '@dbykov-ui-kit/ListItem/enums/list-item-type';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ListItem from '../list-item/src';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import ListType from './enum/list-type';
import List from './src';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: { control: { type: 'select' }, options: [ListType.Buttons, ListType.List], defaultValue: ListType.Buttons },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkTheme: Story = {
  render: () => {
    const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
    const ReactThemeContext = getNewReactThemeContext(themes?.dark);

    return (
      <ReactThemeContext.Provider value={themes?.dark}>
        <div style={{ width: '600px' }}>
          <List>
            {elements.map((element: string, index: number) => (
              <ListItem
                key={index}
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
  },
};

export const LightTheme: Story = {
  render: () => {
    const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
    const ReactThemeContext = getNewReactThemeContext(themes?.loanPricing);

    return (
      <ReactThemeContext.Provider value={themes?.light}>
        <div style={{ width: '220px' }}>
          <List>
            {elements.map((element: string, index: number) => (
              <ListItem key={index} type={ListItemType.Button} isVisibleTextUnderline={true}>
                {element}
              </ListItem>
            ))}
          </List>
        </div>
      </ReactThemeContext.Provider>
    );
  },
};
