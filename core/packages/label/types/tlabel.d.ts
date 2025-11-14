import * as CSS from 'csstype';

import TBaseStyles from '../../types/tbase-styles';

type TLabel = TBaseStyles & {
  colorTheme?: string;
  error?: any;
  focusColor?: string;
  fontFamily?: string;
  htmlFor?: string;
  isFocus?: boolean;
  justifyContent?: CSS.Property.JustifyContent;
  tabIndex?: number | string;
  theme?: any;
  whiteSpace?: string;
  onClick?: (evt: any) => void;
};

export default TLabel;
