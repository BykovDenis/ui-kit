import React, { useEffect, useState } from 'react';

import FormControlStyled from './form-control.styled';
import IFormControl from '../types/iform-control';
import getCssVariables from '../../styles/src/get-css-variables';

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => {
  const cssVariables: any = getCssVariables();
  const flexDirection: string = props.flexDirection || 'row';
  const alignItems: string = props.alignItems || 'center';
  const justifyContent: string = props.justifyContent || 'flex-start';

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
        fontSize={props?.fontSize ?? cssVariables.baseFontSize}
      >
        {props.children}
      </FormControlStyled>
    );
};

export default React.memo(FormControl);
