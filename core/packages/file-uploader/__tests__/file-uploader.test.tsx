import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import FileUploader from '../src';

describe('FileUploader', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderFileUploader = (overrides: Record<string, unknown> = {}) => {
    const onFileUpload = jest.fn();

    render(
      <ReactThemeContext.Provider value={themes.light}>
        <FileUploader id="file-uploader" onFileUpload={onFileUpload} {...overrides}>
          Upload file
        </FileUploader>
      </ReactThemeContext.Provider>
    );

    return { onFileUpload };
  };

  test('renders label and input when enabled', () => {
    renderFileUploader();

    expect(screen.getByText('Upload file')).toBeInTheDocument();
    expect(document.querySelector('input[type="file"]')).toBeInTheDocument();
  });

  test('hides input when disabled', () => {
    renderFileUploader({ disabled: true });

    expect(screen.getByText('Upload file')).toBeInTheDocument();
    expect(document.querySelector('input[type="file"]')).not.toBeInTheDocument();
  });

  test('calls onFileUpload on file selection', () => {
    const { onFileUpload } = renderFileUploader();
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });

    fireEvent.change(input, { target: { files: [file] } });

    expect(onFileUpload).toHaveBeenCalledTimes(1);
    const [files] = onFileUpload.mock.calls[0];
    expect(files[0].name).toBe('hello.txt');
  });
});
