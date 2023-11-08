import React, { useEffect, useState } from 'react';

import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import ICheckbox from '../types/icheckbox';
import CheckboxStyled from './checkbox.styled';
import FormControl from './form-control.styled';

const Checkbox: React.FunctionComponent<ICheckbox> = (props: ICheckbox) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed: any = (theme: ITheme) => (
    <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
      <CheckboxStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={theme?.palette?.baseFontColor}
        backgroundColor={theme?.palette?.primary?.main}
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

  if (!Consumer) {
    console.error('The Checkbox component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default Checkbox;
