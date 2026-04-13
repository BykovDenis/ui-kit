import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import GridContainer from './src/index';
import TGridContainer from './types/tgrid-container';
import FlexContainer from '../flex-container/src';

export default {
  title: 'Components/GridContainer',
  component: GridContainer,
  argTypes: {
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    fontWeight: { control: { type: 'select' }, options: [100, 400, 600, 900] },
    textAlign: { control: { type: 'select' }, options: ['right', 'left', 'center'] },
  },
  args: {
    fontSize: 14,
    fontWeight: 400,
    columnWidth: '100px',
    rowHeight: '100px',
    gap: '30px',
    rows: 3,
    columns: 3,
    gridTemplateRows: '',
    gridTemplateColumns: '',
    gridRowGap: '',
    gridColumnGap: '',
  },
} as Meta<typeof GridContainer>;

const TemplateDarkTheme: StoryFn<typeof GridContainer> = (args: TGridContainer) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <GridContainer {...args}>
        <FlexContainer outline="1px solid red"></FlexContainer>
        <FlexContainer outline="1px solid blue"></FlexContainer>
        <FlexContainer outline="1px solid green"></FlexContainer>
        <FlexContainer outline="1px solid yellow"></FlexContainer>
        <FlexContainer outline="1px solid pink"></FlexContainer>
        <FlexContainer outline="1px solid white"></FlexContainer>
        <FlexContainer outline="1px solid brown"></FlexContainer>
        <FlexContainer outline="1px solid gray"></FlexContainer>
        <FlexContainer outline="1px solid black"></FlexContainer>
      </GridContainer>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTextField = TemplateDarkTheme.bind({});
