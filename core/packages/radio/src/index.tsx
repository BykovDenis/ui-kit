import React, { useEffect, useState } from 'react';

import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import FormControl from './form-control.styled';
import RadioStyled from './radio.styled';
import RadioProps from '../types/radio-props';

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [error, setError] = useState<boolean>(props?.error !== undefined ? props.error : false);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setError(props?.error !== undefined ? props.error : false);
  }, [props.error]);

  const componentThemed = (theme: ITheme) => {
    const backgroundColor: string = props.disabled
      ? theme?.inactiveBackgroundColor
      : error
      ? theme?.palette?.secondary?.main
      : theme?.palette?.primary?.main;
    const borderColor: string = props.disabled ? theme?.inactiveBackgroundColor : theme?.mainOutlinedColor;
    return (
      <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
        <RadioStyled
          {...props}
          name={props.name}
          id={props.id}
          disabled={props?.disabled}
          color={theme?.mainBackgroundColor}
          disabledColor={theme?.palette?.baseFontColor}
          backgroundColor={backgroundColor}
          checked={props.checked}
          onChange={props.onChange}
          isIconDisabled={props?.isIconDisabled}
          borderColor={borderColor}
        />
        <Label
          htmlFor={props.id}
          color={theme?.palette?.baseFontColor}
          fontSize={props.fontSize ?? theme?.baseFontSize}
          fontFamily={theme?.fontFamily}
          tabIndex={props?.tabIndex}
          focusColor={theme?.palette?.primary?.main}
          className={props?.className}
          width="initial"
        >
          {props?.label}
        </Label>
      </FormControl>
    );
  };

  if (!Consumer) {
    console.error('The Radio component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Radio;
