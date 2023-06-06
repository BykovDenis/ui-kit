import React, { PropsWithChildren, useEffect, useState } from 'react';
import getCssVariables from '../../styles/src/get-css-variables';

import TButton from '../types/tbutton';
import ButtonStyled from './button.styled';

const Button: React.FunctionComponent<PropsWithChildren<TButton>> = (props: TButton) => {
  const cssVariables = getCssVariables();

  return <ButtonStyled {...props} id={props?.id} cssVariables={cssVariables} type={props?.type ?? 'button'} />;
};

export default React.memo(Button);
