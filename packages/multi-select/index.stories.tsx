import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";

import { themes } from "../styles/src/themes";
import getNewReactThemeContext from "../styles/src";
import MultiSelect from "./src";
import SortDirections from '../enums/sort-direction'
import Label from "../label/src";
import FormControl from "../form-control/src";
import TmultiSelect from "./types/tmulti-select";

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    isUseLocaleStorage: { control: { type: 'radio', options: [ true, false ], defaultValue: false }  },
  },
  args: {
    width: 300,
    height: 150
  }
} as ComponentMeta<typeof MultiSelect>;

const ThemeDarkTemplate: ComponentStory<typeof MultiSelect> = (args: TMultiSelect) => {



  const columns: Array<string> =  ['Request Id', 'Response Id', 'Algo Id', 'Start time', 'Finish time', 'Publishing', 'Comment', 'Request Id 1', 'Response Id 1', 'Algo Id 1', 'Start time 1', 'Finish time 1', 'Publishing 1', 'Comment 1'];
  const columnsSelected: Array<string> = ['Publishing', 'Comment']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <>
    <MultiSelect {...args} sortDirection={SortDirections.Asc} isUseLocaleStorage={true} id="multi-select-2" label="some-label" name="someColumns" elementNamesDefaultSelected={columnsSelected} elementNames={columns} onChange={onChange}  />
  </>
}

const ThemeLightTemplate: ComponentStory<typeof MultiSelect> = (args: TMultiSelect) => {

  

  const columns: Array<string> =  ['Request Id', 'Response Id', 'Algo Id', 'Start time', 'Finish time', 'Publishing', 'Comment', 'Request Id 1', 'Response Id 1', 'Algo Id 1', 'Start time 1', 'Finish time 1', 'Publishing 1', 'Comment 1'];
  const columnsSelected: Array<string> = ['Publishing', 'Comment']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <>
    <MultiSelect {...args} sortDirection={SortDirections.Asc} isUseLocaleStorage={true} id="multi-select-2" label="some-label" name="someColumns" elementNamesDefaultSelected={columnsSelected} elementNames={columns} onChange={onChange}  />
  </>
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});

