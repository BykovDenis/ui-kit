import React from 'react';

import ITheme from '../../styles/types/itheme';
import DividerStyled from './divider.styled';
import TDivider from '../types/tdivider';
import { useTheme } from '@dbykov-ui-kit/styles';

const Divider: React.FunctionComponent<TDivider> = (props: TDivider) => {
  const theme = useTheme();

  const componentThemed: any = (theme: ITheme) => {
    const color: string = props?.color || theme.mainOutlinedColor;

    return <DividerStyled className={props?.className} color={color} width={props?.width} />;
  };


  return componentThemed(theme);
};

export default Divider;
