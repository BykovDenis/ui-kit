import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TProgressBar from "./types/tprogress-bar";
import ProgressBar from "./src/index";
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    isAnimate: { control: { type: "radio", options: [true, false] } },
    fontSize: { control: { type: "select", options: [10, 12, 14, 16] } }
  },
  args: {
    progress: 50
  }
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: TProgressBar) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
    <ProgressBar height={15}
      {...args}
    />
    </ReactThemeContext.Provider>
  );
};

export const NormalProgressBar = Template.bind({});
