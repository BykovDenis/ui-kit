import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ListItem from '../list-item/src';
import List from  './src';
import IList from './types/ilist';
import ListType from "./enum/list-type";

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


const ThemeDarkTemplate: ComponentStory<typeof List> = (args: IList) => {

  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];

  return <>
    <div style={{ width: '220px' }}>
    <List type={ListType.Buttons} >
      {elements.map((element: string, index: number) => (
        <ListItem
          {...args}
          key={index}
          onClick={action('clicked')}
        >
          {element}
        </ListItem>))}
    </List>
  </div>
  </>
}

const ThemeLightTemplate: ComponentStory<typeof List> = (args: IList) => {

  const elements: Array<string> = ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'];
  

  return <>
    <div style={{ width: '220px' }}>
      <List type="list" >
        {elements.map((element: string, index: number) => (
          <ListItem
            {...args}
            key={index}
            onClick={action('clicked')}
          >
            {element}
          </ListItem>))}
      </List>
    </div>
  </>
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});

