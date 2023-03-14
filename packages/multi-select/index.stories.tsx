import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import TMultiSelect from "./types/tmulti-select";
import MultiSelect from "./src/index";

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

const Template: ComponentStory<typeof MultiSelect> = (args: TMultiSelect) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const columns: Array<string> = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6', 'column7', 'column8', 'column9', 'column10', 'column11', 'column12', 'column13', 'column14'];
  const columnsSelected: Array<string> = ['column2', 'column5']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <ReactThemeContext.Provider value={themes.dark}>
    <MultiSelect {...args} name="someColumns" elementNames={columns} onChange={onChange} elementNamesDefaultSelected={columnsSelected} />
  </ReactThemeContext.Provider>
}

const TemplateMultiSelectUsedLocalStorage: ComponentStory<typeof MultiSelect> = (args: TMultiSelect) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  // const columns: Array<string> = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6', 'column7', 'column8', 'column9', 'column10', 'column11', 'column12', 'column13', 'column14'];
  const columns: Array<string> = ["ProductValue","CVA","DVA","BCVA","ExpectedDiscountedPositiveExposure","ExpectedDiscountedNegativeExposure","ExpectedDiscountedPositiveExposureNoCollateral","ExpectedDiscountedNegativeExposureNoCollateral","ExpectedPositiveExposure","ExpectedNegativeExposure","ExpectedOwnProbabilityOfDefault","ExpectedCounterpartyProbabilityOfDefault","CVA_NonLinear","DVA_NonLinear","BCVA_NonLinear","ProductValue_NonLinear","CVA_ByTrade","DVA_ByTrade","BCVA_ByTrade","PresentValues_ByTrade","ENE","EPE"];
  const columnsSelected: Array<string> = ['ExpectedDiscountedPositiveExposure', 'ExpectedDiscountedPositiveExposureNoCollateral']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <ReactThemeContext.Provider value={themes.dark}>
    <MultiSelect {...args} name="someColumns" isUseLocaleStorage={true} elementNames={columns} onChange={onChange} elementNamesDefaultSelected={columnsSelected} />
  </ReactThemeContext.Provider>
}

export const NormalMultiSelect = Template.bind({});
export const NormalMultiSelectUsedLocalStorage = TemplateMultiSelectUsedLocalStorage.bind({});

