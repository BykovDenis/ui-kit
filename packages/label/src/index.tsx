import React from 'react';
import styled from 'styled-components';

import hexToRgba from '../../helpers/hex-to-rgba';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import ILabel from '../types/ilabel';
import LabelStyled from './label.styled';

const Label: React.FunctionComponent<ILabel> = (props: ILabel) => {
  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => (
        <LabelStyled theme={theme} className={props?.className} fontFamily={theme?.fontFamily}>
          {props.children}
        </LabelStyled>
      )}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>
      {(theme: ITheme) => (
        <LabelStyled {...props} theme={theme} className={props?.className} fontFamily={theme?.fontFamily}>
          {props.children}
        </LabelStyled>
      )}
    </ThemeContext.Consumer>
  );
};

export default Label;
