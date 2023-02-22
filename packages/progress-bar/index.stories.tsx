import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TProgressBar from "./types/tprogress-bar";
import ProgressBar from "./src/index";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    isAnimate: { control: { type: "radio", options: [true, false] } },
    fontSize: { control: { type: "select", options: [10, 12, 14, 16] } }
  },
  args: {
    progress: 40
  }
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args: TProgressBar) => {
  return (
    <ProgressBar
      {...args}
      fillColor="linear-gradient(90deg, #99984b,#409aec,#e40468)"
    />
  );
};

export const NormalProgressBar = Template.bind({});
