import React from 'react';
import CSS from 'csstype';

import FormControlStyled from './form-control.styled';
import IFormControl from '../types/iform-control';
import ITheme from '../../styles/types/itheme';
import { useTheme } from '@dbykov-ui-kit/styles';

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => {
  const theme = useTheme();

  const flexDirection: CSS.Property.FlexDirection = props.flexDirection || 'row';
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


  return componentThemed(theme);
};

export default FormControl;
