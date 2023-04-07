import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from "react";
import Table from '@sber-risks-ui/Table';
import TableHead from '@sber-risks-ui/TableHead';
import TableRow from '@sber-risks-ui/TableRow';
import TableCell from '@sber-risks-ui/TableCell';
import TableBody from '@sber-risks-ui/TableBody';
import Button from '@sber-risks-ui/Button';

import StickyBottomPanel from  './src/index';
import TStickyBottomPanel from './types/tsticky-bottom-panel';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/StickyBottomPanel',
  component: StickyBottomPanel,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    height: '400px'
  },
} as ComponentMeta<typeof StickyBottomPanel>;

const elements: Array<number> = new Array(1000).fill(1000000);

const ThemeDarkTemplate: ComponentStory<typeof StickyBottomPanel> = (args: TStickyBottomPanel) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBtnClick = () => {
    setIsOpen(!isOpen);
  }

  const onDialogVisibleChange = () => {
    setIsOpen(!isOpen)
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  return <ReactThemeContext.Provider value={themes.dark}>
    <Table>
      <TableHead>
        <TableRow isHeader={true}>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
          <TableCell>One</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {elements?.map((element: number, index: number) => (
          <TableRow key={index}>
          <TableCell><TableCell><Button onClick={onBtnClick}>{element}</Button></TableCell></TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          <TableCell>{element}</TableCell>
          </TableRow>))}
      </TableBody>
    </Table>
    <StickyBottomPanel {...args} isOpen={isOpen} onDialogVisibleChange={onDialogVisibleChange} >
      <Table>
        <TableHead>
          <TableRow isHeader={true}>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
            <TableCell>One</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {elements?.map((element: number, index: number) => (
          <TableRow key={index}>
            <TableCell><Button onClick={onBtnClick}>{element}</Button></TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
            <TableCell>{element}</TableCell>
          </TableRow>))}
      </TableBody>
    </Table>
    </StickyBottomPanel>
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof StickyBottomPanel> = (args: TStickyBottomPanel) => {

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <StickyBottomPanel {...args} >
 fdfdf
    </StickyBottomPanel>
  </ReactThemeContext.Provider>
}

export const DarkThemeStickyBottomPanel = ThemeDarkTemplate.bind({});
export const LightThemeStickyBottomPanel = ThemeLightTemplate.bind({});

