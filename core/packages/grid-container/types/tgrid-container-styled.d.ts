import TBaseStyles from '../../types/tbase-styles';
import * as CSS from 'csstype';

type TGridContainerStyled = TBaseStyles & {
  overflowY?: string;
  outline?: string;
  borderRadius?: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  zIndex?: number;
  gridTemplateColumns: string;
  gridTemplateRows?: string;
  gridGap?: number | string;
  gridColumnGap?: number | string;
  gridRowGap?: number | string;
  alignItems?: CSS.Property.AlignItems;
  justifyContent?: CSS.Property.JustifyContent;
};

export default TGridContainerStyled;
