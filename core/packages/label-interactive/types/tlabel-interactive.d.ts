import React from 'react';

import TButtonVariants from '../../button/types/tbutton-variants';
import TLabel from '../../label/types/tlabel';
import CSS from "csstype";

type TLabelInteractive = TLabel & {
  Icon?: any,
  isInteractive?: boolean,
  margin?: string,
  minHeight?: number | string,
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void,
  variant: TButtonVariants,
  width?: CSS.Property.Width,
};

export default TLabelInteractive;
