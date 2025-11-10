import { Meta, StoryObj } from '@storybook/react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import FileUploader from './src/index';
import FileUploaderProps from './types/file-uploader-props';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
  },
  args: {
    children: 'Label',
    fontSize: 14,
  },
};

export default meta;

type Story = StoryObj<typeof FileUploader>;

export const Light: Story = {
  render: (args: FileUploaderProps) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    return (
      <ReactThemeContext.Provider value={themes.light}>
        <FileUploader {...args} />
      </ReactThemeContext.Provider>
    );
  },
};

export const Dark: Story = {
  render: (args: FileUploaderProps) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <FileUploader {...args} />
      </ReactThemeContext.Provider>
    );
  },
};
