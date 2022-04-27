import React from 'react';

import Label from '../../label/src';
import ThemeContext from '../../styles/src/themes';
import Itheme from '../../styles/types/itheme';
import IRadio from '../types/iradio';
import FormControl from './form-control.styled';
import RadioStyled from './radio.styled';

const Radio: React.FunctionComponent<IRadio> = (props: any) => {
  const componentThemed = (theme: Itheme) => (
    <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
      <RadioStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={theme?.palette?.baseFontColor}
        backgroundColor={theme?.palette?.primary?.main}
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

  const Consumer: any = props.ReactThemeContext ? props.ReactThemeContext.Consumer : ThemeContext.Consumer;

  return <Consumer>{componentThemed}</Consumer>;
};

export default Radio;
