import React from 'react';
import IFormControlStyled from './iform-control-styled';

interface IFormControl extends IFormControlStyled {
  children?: Array<React.ReactNode> | React.ReactNode;
  className?: string;
  key?: number | string;
  id?: string;
}

export default IFormControl;
