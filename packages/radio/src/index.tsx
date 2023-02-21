import React, { useEffect, useState } from 'react';

import Label from '../../label/src';
import ITheme from '../../styles/types/itheme';
import IRadio from '../types/iradio';
import FormControl from './form-control.styled';
import RadioStyled from './radio.styled';

const Radio: React.FunctionComponent<IRadio> = (props: any) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const componentThemed = (theme: ITheme) => (
    <FormControl isExistLabel={props?.label > '' && props?.label !== null}>
      <RadioStyled
        {...props}
        name={props.name}
        id={props.id}
        disabled={props?.disabled}
        color={theme?.mainBackgroundColor}
        backgroundColor={theme?.palette?.primary?.main}
        checked={props.checked}
        onChange={props.onChange}
        isIconDisabled={props?.isIconDisabled}
        borderColor={theme?.palette?.baseFontColor}
      />
      <Label
        htmlFor={props.id}
        color={theme?.palette?.baseFontColor}
        fontSize={props.fontSize ?? theme?.baseFontSize}
        fontFamily={theme?.fontFamily}
        tabIndex={props?.tabIndex}
        focusColor={theme?.palette?.primary?.main}
        className={props?.className}
        width={'initial'}
      >
        {props?.label}
      </Label>
    </FormControl>
  );

  if (!Consumer) {
    console.error('The Radio component. You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default React.memo(Radio);
