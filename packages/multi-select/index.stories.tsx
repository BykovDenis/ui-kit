import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";

import { themes } from "../styles/src/themes";
import getNewReactThemeContext from "../styles/src";
import MultiSelect from "./src";
import SortDirections from '../enums/sort-directions'
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

const Template: ComponentStory<typeof MultiSelect> = (args: TmultiSelect) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const [columns, setColumns] = useState<Array<string>>([]);
  const columnsSelected: Array<string> = ['column2', 'column5']

  useEffect(() => {
    setTimeout(() => {
      setColumns(['column1', 'column2', 'column3', 'column4', 'column5', 'column6', 'column7', 'column8', 'column9', 'column10', 'column11', 'column12', 'column13', 'column14']);
    }, 3000);
  }, [])

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <ReactThemeContext.Provider value={themes.dark}>
    <MultiSelect {...args} sortDirection={SortDirections.Asc} isSelectAll={true}  name="someColumns" elementNames={columns} onChange={onChange} />
  </ReactThemeContext.Provider>
}

const TemplateMultiSelectUsedLocalStorage: ComponentStory<typeof MultiSelect> = (args: TMultiSelect) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  // const columns: Array<string> = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6', 'column7', 'column8', 'column9', 'column10', 'column11', 'column12', 'column13', 'column14'];
  const columns: Array<string> =  ["ProductValue","CVA","DVA","BCVA","ExpectedDiscountedPositiveExposure","ExpectedDiscountedNegativeExposure","ExpectedDiscountedPositiveExposureNoCollateral","ExpectedDiscountedNegativeExposureNoCollateral","ExpectedPositiveExposure","ExpectedNegativeExposure","ExpectedOwnProbabilityOfDefault","ExpectedCounterpartyProbabilityOfDefault","CVA_NonLinear","DVA_NonLinear","BCVA_NonLinear","ProductValue_NonLinear","CVA_ByTrade","DVA_ByTrade","BCVA_ByTrade","PresentValues_ByTrade","ENE","EPE"];
  const columnsSelected: Array<string> = ['ExpectedDiscountedPositiveExposure', 'ExpectedDiscountedPositiveExposureNoCollateral']

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  }

  return <ReactThemeContext.Provider value={themes.dark}>
    <MultiSelect {...args} sortDirection={SortDirections.Desc} id="multi-select-1" label="some-label" name="someColumns"  elementNames={columns} onChange={onChange} />
    <MultiSelect sortDirection={SortDirections.Desc} id="multi-select-2" label="some-label" name="someColumns" elementNames={columns} onChange={onChange}  />
    <FormControl width="initial" alignItems="flex-start" justifyContent="flex-start" flexDirection="column">
        <Label width="initial" >Some text</Label>
        <Label width="initial" >Some text</Label>
        <Label width="initial" >Some text</Label>
        <Label>Some text</Label>
    </FormControl>
  </ReactThemeContext.Provider>
}

export const NormalMultiSelect = Template.bind({});
export const NormalMultiSelectUsedLocalStorage = TemplateMultiSelectUsedLocalStorage.bind({});

