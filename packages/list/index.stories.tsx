import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ListItem from '../list-item/src';
import List from  './src';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
  args: {
    textMessage: 'text message',
    label: 'label'
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = () => {

  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];

  return <div style={{ width: '220px' }}>
    <List type="list-buttons">
      {elements.map((element: string, index: number) => (<ListItem onClick={action('clicked')} type="button" key={index}>{element}</ListItem>))}
    </List>
  </div>
}

export const NormalList = Template.bind({});

