import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import IconButton from '../src';
import { themes } from '../../styles/src/themes';

it('IconButton renders correctly', () => {
  const props: any = {
    disabled: false,
    children: 'Click me',
    onClick: jest.fn(),
    type: 'button',
    color: '#ffffff',
    backgroundColor: 'rgb(8, 166, 82)',
    fontSize: 14,
    fontFamily: 'Roboto, Arial, sans-serif',
    theme: {
      palette: '{baseButtonFontColor: "#ffffff", baseFontColor: "#3333333"}',
      fontFamily: 'Roboto, Arial, sans-serif',
      baseFontSize: 14,
      mainBlackColor: 'rgba(0,0,0,0.85)',
      mainGrayColor: '#bdbdbd',
      mainWhiteColor: '#ffffff',
      mainBackgroundColor: '#ffffff',
    },
    focusColor: 'rgb(8, 166, 82)',
  };

  const wrapper = renderer.create(
    <>
      <IconButton {...props}>Hello world!</IconButton>
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
