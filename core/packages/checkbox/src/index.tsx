import React, { useEffect, useState } from 'react';

import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import CheckboxStyled from './checkbox.styled';
import FormControl from './form-control.styled';
import CheckboxProps from '../types/icheckbox';

const Checkbox: React.FunctionComponent<CheckboxProps> = (props: CheckboxProps) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);
  const [error, setError] = useState<boolean>(props?.error !== undefined ? props.error : false);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  useEffect(() => {
    setError(props?.error !== undefined ? props.error : false);
  }, [props.error]);

  const componentThemed: any = (theme: ITheme) => {
    const backgroundColor: string = error ? theme?.palette?.secondary?.main : theme?.palette?.primary?.main;
    return (
      <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
        <CheckboxStyled
          {...props}
          name={props.name}
          id={props.id}
          disabled={props?.disabled}
          color={theme?.palette?.baseFontColor}
          backgroundColor={backgroundColor}
          checked={props.checked}
          onChange={props.onChange}
          indeterminate={props.indeterminate}
          isIconDisabled={props.isIconDisabled}
          borderColor={theme?.mainOutlinedColor}
          disabledColor={theme?.palette?.baseFontColor}
        />
        <Label
          htmlFor={props.id}
          color={theme?.palette?.baseFontColor}
          tabIndex={props?.tabIndex}
          fontSize={props.fontSize ?? theme?.baseFontSize}
          focusColor={theme?.palette?.primary?.main}
          fontFamily={theme?.fontFamily}
          className={props?.className}
          width="initial"
        >
          {props?.label}
        </Label>
      </FormControl>
    );
  };

  if (!Consumer) {
    console.error('The Checkbox component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Checkbox;
