import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ChevronDownIcon from '../icons-components/24x24/chevron-down-icon';
import LabelInteractive from '../label-interactive/src';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import TableCell from '../table-cell/src';
import TableHead from '../table-head/src';
import TableRow from '../table-row/src';
import Table from './src';
import type TTable from './types/ttable';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  args: {
    fontSize: 14,
    isStrippedColumn: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { name: 'ООО "НУЖНО БОЛЬШЕ ЗОЛОТА"', date: '2021-12-31', crmId: '1-HJHFUO' },
  { name: 'ООО "МАМА ПРИГОТОВИЛА"', date: '2021-12-31', crmId: '1-87NJHJH' },
  { name: 'ООО "МУЖЧИНА В ДОМЕ"', date: '2021-12-31', crmId: '1-IOIOIOI' },
];

const renderTable = (theme: 'dark' | 'light', args: TTable) => {
  const ReactThemeContext = getNewReactThemeContext(themes[theme]);
  return (
    <ReactThemeContext.Provider value={themes[theme]}>
      <Table {...args}>
        <TableHead>
          <TableRow isHeader>
            <TableCell width={200}>
              <LabelInteractive variant="text" Icon={ChevronDownIcon}>
                Наименование
              </LabelInteractive>
            </TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>CrmId</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleItems.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.crmId}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ReactThemeContext.Provider>
  );
};

export const LightTheme: Story = {
  render: (args) => renderTable('light', args),
};

export const DarkTheme: Story = {
  render: (args) => renderTable('dark', args),
};
