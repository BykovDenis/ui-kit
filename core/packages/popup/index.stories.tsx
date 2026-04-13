import Button from '@dbykov-ui-kit/Button/src';
import FlexContainer from '@dbykov-ui-kit/FlexContainer/src';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Popup from './src/index';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: () => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    const Inner = () => {
      const [isExpanded, setIsExpanded] = useState<boolean>(false);

      const onButtonClick = () => {
        setIsExpanded(!isExpanded);
      };

      return (
        <ReactThemeContext.Provider value={themes.light}>
          <FlexContainer minHeight={450} outline="1px solid green" alignItems="flex-start">
            <FlexContainer position="relative">
              <Button onClick={onButtonClick}>Expand</Button>
              <Popup isOpen={isExpanded} width={120}>
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

    return <Inner />;
  },
};

export const DarkTheme: Story = {
  render: () => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    const Inner = () => {
      const [isExpanded, setIsExpanded] = useState<boolean>(false);

      const onButtonClick = () => {
        setIsExpanded(!isExpanded);
      };

      return (
        <ReactThemeContext.Provider value={themes.dark}>
          <FlexContainer minHeight={450} outline="1px solid green" alignItems="flex-start">
            <FlexContainer position="relative">
              <Button onClick={onButtonClick}>Expand</Button>
              <Popup isOpen={isExpanded} width={120}>
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

    return <Inner />;
  },
};
