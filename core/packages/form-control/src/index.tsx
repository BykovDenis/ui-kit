import React, { useEffect, useState } from 'react';

import FormControlStyled from './form-control.styled';
import IFormControl from '../types/iform-control';
import ITheme from '../../styles/types/itheme';

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => {
  const [Consumer, setConsumer] = useState(globalThis.ReactThemeContextConsumer);

  useEffect(() => {
    setConsumer(globalThis.ReactThemeContextConsumer);
  }, [globalThis.ReactThemeContextConsumer]);

  const flexDirection: string = props.flexDirection || 'row';
  const alignItems: string = props.alignItems || 'center';
  const justifyContent: string = props.justifyContent || 'flex-start';

  const componentThemed: any = (theme: ITheme) => {
    return (
      <FormControlStyled
        {...props}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        fontSize={props?.fontSize ?? theme.baseFontSize}
      >
        {props.children}
      </FormControlStyled>
    );
  };

  if (!Consumer) {
    console.error('You need an initialization provider');
    return null;
  }

  return <Consumer>{componentThemed}</Consumer>;
};

export default FormControl;
