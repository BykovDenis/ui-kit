import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from "react";
import Table from '@dbykov-ui-kit/Table';
import TableHead from '@dbykov-ui-kit/TableHead';
import TableRow from '@dbykov-ui-kit/TableRow';
import TableCell from '@dbykov-ui-kit/TableCell';
import TableBody from '@dbykov-ui-kit/TableBody';
import Button from '@dbykov-ui-kit/Button';
import FormControl from '@dbykov-ui-kit/FormControl';

import StickyBottomPanel from  './src/index';
import TStickyBottomPanel from './types/tsticky-bottom-panel';



export default {
  title: 'Components/StickyBottomPanel',
  component: StickyBottomPanel,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    panelAlign: { control: { type: 'select', options: [ 'left', 'right', 'center'] }, defaultValue: 'center'  },
  }
} as ComponentMeta<typeof StickyBottomPanel>;

const elements: Array<number> = new Array(100).fill(1000);

const ThemeDarkTemplate: ComponentStory<typeof StickyBottomPanel> = (args: TStickyBottomPanel) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBtnClick = () => {
    setIsOpen(!isOpen);
  }

  const onDialogVisibleChange = () => {
    setIsOpen(!isOpen)
  }


  return <>
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
    <StickyBottomPanel height='400px' width='100%' boxShadow="inset -2px 8px 11px -3px #5eaf44"  isOpen={isOpen} onDialogVisibleChange={onDialogVisibleChange} >
      <FormControl height={100} overflowY="auto">
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
      </FormControl>
    </StickyBottomPanel>
  </>
}

const ThemeLightTemplate: ComponentStory<typeof StickyBottomPanel> = (args: TStickyBottomPanel) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onBtnClick = () => {
    setIsOpen(!isOpen);
  }

  

  const onDialogVisibleChange = () => {
    setIsOpen(!isOpen)
  }

  return <>
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
    <StickyBottomPanel boxShadow="inset -2px 8px 11px -3px #5eaf44" height='400px' width='100%' isOpen={isOpen} backgroundImage="linear-gradient(to right, rgb(229, 242, 231) 0%, #08A652 100%)"  onDialogVisibleChange={onDialogVisibleChange}>
      <FormControl height={100} overflowY="auto">
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
      </FormControl>
    </StickyBottomPanel>
  </>
}

export const DarkThemeStickyBottomPanel = ThemeDarkTemplate.bind({});
export const LightThemeStickyBottomPanel = ThemeLightTemplate.bind({});

