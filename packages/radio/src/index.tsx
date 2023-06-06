import React from 'react';

import Label from '../../label/src';
import IRadio from '../types/iradio';
import FormControl from './form-control.styled';
import RadioStyled from './radio.styled';
import getCssVariables from '../../styles/src/get-css-variables';

const Radio: React.FunctionComponent<IRadio> = (props: any) => {
  const cssVariables: any = getCssVariables();
   return (
    <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
      <RadioStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={cssVariables.backgroundColor}
        disabledColor={cssVariables.baseFontColor}
        backgroundColor={cssVariables.primaryMainColor}
        checked={props.checked}
        onChange={props.onChange}
        isIconDisabled={props?.isIconDisabled}
        borderColor={cssVariables.mainOutlinedColor}
      />
      <Label
        htmlFor={props.id}
        color={cssVariables.baseFontColor}
        fontSize={props.fontSize ?? cssVariables.baseFontSize}
        fontFamily={cssVariables.fontFamily}
        tabIndex={props?.tabIndex}
        focusColor={cssVariables.primaryMainColor}
        className={props?.className}
        width={'initial'}
      >
        {props?.label}
      </Label>
    </FormControl>
  );
};

export default React.memo(Radio);
