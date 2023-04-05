import React from 'react';

import FormControlStyled from './form-control.styled';
import IFormControl from '../types/iform-control';

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => (
  <FormControlStyled
    {...props}
    flexDirection={props.flexDirection}
    alignItems={props?.alignItems || 'center'}
    justifyContent={props.justifyContent}
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
  >
    {props.children}
  </FormControlStyled>
);

FormControl.defaultProps = {
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
};

export default React.memo(FormControl);
