import React from 'react';

import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import ICheckbox from '../types/icheckbox';
import CheckboxStyled from './checkbox.styled';
import FormControl from './form-control.styled';

const Checkbox: React.FunctionComponent<ICheckbox> = (props: ICheckbox) => {
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
      />
      <Label
        htmlFor={props.id}
        color={theme?.palette?.baseFontColor}
        tabIndex={props?.tabIndex}
        fontSize={props.fontSize ?? theme?.baseFontSize}
        focusColor={theme?.palette?.primary?.main}
        fontFamily={theme?.fontFamily}
        className={props?.className}
      >
        {props?.label}
      </Label>
    </FormControl>
  );

  if (!globalThis.ReactThemeContextConsumer) {
    console.error('The Checkbox component. You need an initialization provider');
    return null;
  }

  return <globalThis.ReactThemeContextConsumer>{componentThemed}</globalThis.ReactThemeContextConsumer>;
};

export default React.memo(Checkbox);
