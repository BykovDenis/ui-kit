import { Meta, StoryFn } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import MultiSelect from './src';
import SortDirections from '../enums/sort-direction';
import TMultiSelect from './types/tmulti-select';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    isUseLocaleStorage: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    width: 300,
    height: 150,
    isUseLocaleStorage: false,
    fontSize: 14,
  },
} as Meta<typeof MultiSelect>;

const ThemeDarkTemplate: StoryFn<typeof MultiSelect> = (args: TMultiSelect) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  const [columnsSelected, setColumnNamesSelected] = useState<Array<string>>([]);

  const columns: Array<any> = [
    { label: 'one', value: 1 },
    { label: 'five', value: 5 },
    { label: 'three', value: 3 },
    { label: 'two', value: 2 },
    { label: 'four', value: 4 },
    { label: 'some', value: 1 },
  ];

  useEffect(() => {
    setColumnNamesSelected(['3', '5', '4']);
  }, []);

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  };

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <MultiSelect
        {...args}
        sortDirection={SortDirections.Asc}
        isUseLocaleStorage={true}
        id="multi-select-2"
        label="some-label"
        name="someColumns"
        elementNamesDefaultSelected={columnsSelected}
        elementNames={columns}
        onChange={onChange}
      />
    </ReactThemeContext.Provider>
  );
};

const ThemeLightTemplate: StoryFn<typeof MultiSelect> = (args: TMultiSelect) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const columns: Array<string> = [
    'Request Id',
    'Response Id',
    'Algo Id',
    'Start time',
    'Finish time',
    'Publishing',
    'Comment',
    'Request Id 1',
    'Response Id 1',
    'Algo Id 1',
    'Start time 1',
    'Finish time 1',
    'Publishing 1',
    'Comment 1',
  ];
  const columnsSelected: Array<string> = ['Publishing', 'Comment'];

  const onChange = (columnNames: Array<string>) => {
    console.log(columnNames);
  };

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <MultiSelect
        {...args}
        sortDirection="asc"
        isUseLocaleStorage={true}
        id="multi-select-2"
        label="some-label"
        name="someColumns"
        elementNamesDefaultSelected={columnsSelected}
        elementNames={columns}
        onChange={onChange}
      />
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});
