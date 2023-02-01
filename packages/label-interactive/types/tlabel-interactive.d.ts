import React from 'react';

type TLabelInteractive = TLabel & {
  Icon?: React.ReactNode,
  isInteractive?: boolean,
  onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void,
};

export default TLabelInteractive;
