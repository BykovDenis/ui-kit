import React from 'react';

import Label from '../../label/src';
import ThemeContext from '../../styles/src/themes';
import ITheme from '../../styles/types/itheme';
import IRadio from '../types/iradio';
import FormControl from './form-control';
import RadioStyled from './radio';

const Radio: React.FunctionComponent<IRadio> = (props: any) => {
  const Component = ({ theme }: { theme: ITheme }) => (
    <FormControl>
      <RadioStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={theme?.palette?.baseFontColor}
        backgroundColor={theme?.palette?.secondary?.main}
        checked={props.checked}
        onChange={props.onChange}
      />
      <Label
        htmlFor={props.id}
        color={theme?.palette?.baseFontColor}
        fontSize={props.fontSize ?? theme?.baseFontSize}
        fontFamily={theme?.fontFamily}
        tabIndex={props?.tabIndex}
        focusColor={theme?.palette?.primary?.main}
        className={props?.className}
      >
        {props?.label}
      </Label>
    </FormControl>
  );

  return props.ReactThemeContext ? (
    <props.ReactThemeContext.Consumer>
      {(theme: ITheme) => <Component theme={theme} />}
    </props.ReactThemeContext.Consumer>
  ) : (
    <ThemeContext.Consumer>{(theme: ITheme) => <Component theme={theme} />}</ThemeContext.Consumer>
  );
};

export default Radio;
