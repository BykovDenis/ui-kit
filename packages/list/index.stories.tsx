import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ITheme from '../styles/types/itheme';
import { themes } from '../styles/src/themes'

import ListItem from '../list-item/src';
import List from  './src';
import IList from './types/ilist';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    type: { control: { type: 'select', options: [ 'button', 'text'] }, defaultValue: 'button'  }
  },
  args: {
    textMessage: 'text message',
    label: 'label'
  },
} as ComponentMeta<typeof List>;

const themeCustom: ITheme = { ...themes.loanPricing, fontFamily: `${themes.loanPricing.fontFamily}, 'SBSansInterface", "Open Sans", "Arial", sans-serif'` };

export const ReactThemeContext = React.createContext(themeCustom);

const Template: ComponentStory<typeof List> = (props: IList) => {

  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];

  return <div style={{ width: '220px' }}>
    <List type="list" >
      {elements.map((element: string, index: number) => (
        <ListItem
          key={index}
          onClick={action('clicked')}
          type="text"
        >
          {element}
        </ListItem>))}
    </List>
  </div>
}

export const NormalList = Template.bind({});

