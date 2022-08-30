import React from 'react';

import FormControlStyled from './form-control.styled';

interface IFormControl {
  alignItems?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  color?: string;
  flexDirection?: string;
  flexGrow?: number;
  height?: string;
  justifyContent?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  overflowY?: string;
  padding?: string;
  position?: string;
  textAlign?: string;
  whiteSpace?: string;
  width?: string;
}

const FormControl: React.FunctionComponent<IFormControl> = (props: IFormControl) => (
  <FormControlStyled
    flexDirection={props.flexDirection}
    alignItems={props.alignItems}
    justifyContent={props.justifyContent}
    width={props.width}
    margin={props.margin}
    backgroundColor={props.backgroundColor}
    height={props.height}
    className={props.className}
    padding={props.padding}
    flexGrow={props.flexGrow}
    maxWidth={props.maxWidth}
    whiteSpace={props.whiteSpace}
    textAlign={props.textAlign}
    maxHeight={props.maxHeight}
    overflowY={props.overflowY}
    color={props.color}
    position={props.position}
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
