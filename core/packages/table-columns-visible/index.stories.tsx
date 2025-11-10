import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import TableColumnsVisible from './src';
import type TTableColumnsVisible from './types/ttable-columns-visible';

const meta: Meta<typeof TableColumnsVisible> = {
  title: 'Components/TableColumnsVisible',
  component: TableColumnsVisible,
  parameters: {
    layout: 'padded',
  },
  args: {
    width: 300,
    minHeight: 200,
    fontSize: 14,
    disabled: false,
  },
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const columns = ['column1', 'column2', 'column3', 'column4', 'column5'];
const columnsSelected = ['column2', 'column5'];

const renderTableColumnsVisible = (theme: 'dark' | 'light', args: TTableColumnsVisible) => {
  const ReactThemeContext = getNewReactThemeContext(themes[theme]);
  const onChange = (columnNames: Array<string>) => console.log(columnNames);

  return (
    <ReactThemeContext.Provider value={themes[theme]}>
      <TableColumnsVisible
        {...args}
        name="someColumns"
        columnNames={columns}
        onChange={onChange}
        columnNamesDefaultSelected={columnsSelected}
      />
    </ReactThemeContext.Provider>
  );
};

export const LightTheme: Story = {
  render: (args) => renderTableColumnsVisible('light', args),
};

export const DarkTheme: Story = {
  render: (args) => renderTableColumnsVisible('dark', args),
};
