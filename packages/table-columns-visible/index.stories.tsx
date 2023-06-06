import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';



import TTableColumnsVisible from "./types/ttable-columns-visible";
import TableColumnsVisible from "./src/index";

export default {
  title: 'Components/TableColumnsVisible',
  component: TableColumnsVisible,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
  },
  args: {
    width: 300,
    minHeight: 200
  }
} as ComponentMeta<typeof TableColumnsVisible>;

const Template: ComponentStory<typeof TableColumnsVisible> = (args: TTableColumnsVisible) => {



  const columns: Array<string> = ['column1', 'column2', 'column3', 'column4', 'column5'];
  const columnsSelected: Array<string> = ['column2', 'column5']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <>
    <TableColumnsVisible {...args} name="someColumns" columnNames={columns} onChange={onChange} columnNamesDefaultSelected={columnsSelected} />
  </>
}

export const NormalTableColumnsVisible = Template.bind({});

