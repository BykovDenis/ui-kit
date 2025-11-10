import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Button from '../button/src';
import FormControl from '../form-control/src';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Table from '../table/src';
import TableBody from '../table-body/src';
import TableCell from '../table-cell/src';
import TableHead from '../table-head/src';
import TableRow from '../table-row/src';
import StickyBottomPanel from './src/index';
import TStickyBottomPanel from './types/tsticky-bottom-panel';

const meta: Meta<typeof StickyBottomPanel> = {
  title: 'Components/StickyBottomPanel',
  component: StickyBottomPanel,
  argTypes: {
    panelAlign: { control: { type: 'select' }, options: ['left', 'right', 'center'] },
  },
  args: {
    panelAlign: 'center',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const elements: Array<number> = new Array(100).fill(1000);

export const DarkTheme: Story = {
  render: (args: TStickyBottomPanel) => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState<boolean>(false);

      const onBtnClick = () => {
        setIsOpen(!isOpen);
      };

      const onDialogVisibleChange = () => {
        setIsOpen(!isOpen);
      };

      const ReactThemeContext = getNewReactThemeContext(themes.dark);
      return (
        <ReactThemeContext.Provider value={themes.dark}>
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
                  <TableCell>
                    <TableCell>
                      <Button onClick={onBtnClick}>{element}</Button>
                    </TableCell>
                  </TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <StickyBottomPanel
            {...args}
            height="400px"
            width="100%"
            boxShadow="inset -2px 8px 11px -3px #5eaf44"
            isOpen={isOpen}
            onDialogVisibleChange={onDialogVisibleChange}
            zIndex={11001}
          >
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
                      <TableCell>
                        <Button onClick={onBtnClick}>{element}</Button>
                      </TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </FormControl>
          </StickyBottomPanel>
        </ReactThemeContext.Provider>
      );
    };
    return <Wrapper />;
  },
};

export const LightTheme: Story = {
  render: (args: TStickyBottomPanel) => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState<boolean>(false);

      const onBtnClick = () => {
        setIsOpen(!isOpen);
      };

      const ReactThemeContext = getNewReactThemeContext(themes.light);

      const onDialogVisibleChange = () => {
        setIsOpen(!isOpen);
      };

      return (
        <ReactThemeContext.Provider value={themes.light}>
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
                  <TableCell>
                    <TableCell>
                      <Button onClick={onBtnClick}>{element}</Button>
                    </TableCell>
                  </TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                  <TableCell>{element}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <StickyBottomPanel
            {...args}
            boxShadow="inset -2px 8px 11px -3px #5eaf44"
            height="400px"
            width="100%"
            isOpen={isOpen}
            backgroundImage="linear-gradient(to right, rgb(229, 242, 231) 0%, #08A652 100%)"
            onDialogVisibleChange={onDialogVisibleChange}
          >
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
                      <TableCell>
                        <Button onClick={onBtnClick}>{element}</Button>
                      </TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                      <TableCell>{element}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </FormControl>
          </StickyBottomPanel>
        </ReactThemeContext.Provider>
      );
    };
    return <Wrapper />;
  },
};
