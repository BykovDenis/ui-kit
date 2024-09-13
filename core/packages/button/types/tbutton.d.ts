import React from 'react';
import TButtonVariants from './tbutton-variants';
import TButtonStyled from './tbutton-styled';
import TBaseStyles from '../../types/tbase-styles';

type TButton = TBaseStyles &
  TButtonStyled & {
    ReactThemeContext?: any;
    children?: React.ReactNode | string;
    colorTheme?: 'normal' | 'warning';
    dataset?: any;
    onClick?: (evt: React.ChangeEvent<HTMLButtonElement>) => void;
    onDragStart?: (evt: any) => void;
    theme?: any;
    variant?: TButtonVariants;
  };

export default TButton;
