import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import Label from './src/index';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import FlexContainer from '@sber-risks-ui/FlexContainer/src';
import Button from '@sber-risks-ui/Button/src';
import Popup from './src/index';
import PopupProps from './types/popup-props';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Label',
    fontSize: 14,
    error: false,
  },
} as Meta<typeof Popup>;

const Template: StoryFn<typeof Label> = (args: PopupProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <FlexContainer minHeight={450} outline="1px solid green" alignItems="flex-start">
        <FlexContainer position="relative">
          <Button onClick={onButtonClick}>Expand</Button>
          <Popup isOpen={isExpanded} width={120} id="some-popup">
            <FlexContainer flexDirection="column" alignItems="stretch" gap={5}>
              <Button>111</Button>
              <Button>222</Button>
            </FlexContainer>
          </Popup>
        </FlexContainer>
      </FlexContainer>
    </ReactThemeContext.Provider>
  );
};

export const NormalPopup = Template.bind({});
