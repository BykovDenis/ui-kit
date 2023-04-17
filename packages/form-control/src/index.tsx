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
        width={props.width}
        margin={props.margin}
        backgroundColor={props.backgroundColor}
        height={props.height}
        className={props.className}
        padding={props.padding}
        flexGrow={props.flexGrow}
        whiteSpace={props.whiteSpace}
        textAlign={props.textAlign}
        maxHeight={props.maxHeight}
        overflowY={props.overflowY}
        color={props.color}
        position={props.position}
        flexWrap={props.flexWrap}
        outline={props.outline}
        borderRadius={props.borderRadius}
        left={props.left}
        right={props.right}
        top={props.top}
        bottom={props.bottom}
        minHeight={props.minHeight}
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

export default React.memo(FormControl);
