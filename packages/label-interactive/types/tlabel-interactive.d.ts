import React from 'react';

import TButtonVariants from '../../button/types/tbutton-variants';
import TLabel from '../../label/types/tlabel';

type TLabelInteractive = TLabel & {
  Icon?: React.ReactElement,
  isInteractive?: boolean,
  margin?: string,
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void,
  variant: TButtonVariants,
  width?: number | string,
};

export default TLabelInteractive;
