import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import FileUploader from './src/index';
import FileUploaderProps from './types/file-uploader-props';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    // error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Label',
    fontSize: 14,
    // error: false,
  },
} as Meta<typeof FileUploader>;

const Template: StoryFn<typeof FileUploader> = (args: FileUploaderProps) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <FileUploader {...args} />
    </ReactThemeContext.Provider>
  );
};

export const NormalLabel = Template.bind({});
