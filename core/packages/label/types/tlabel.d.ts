import TBaseStyles from '../../types/tbase-styles';
import * as CSS from 'csstype';

type TLabel = TBaseStyles & {
  colorTheme?: string;
  error?: any;
  focusColor?: string;
  fontFamily?: string;
  htmlFor?: string;
  isFocus?: boolean;
  justifyContent?: CSS.Property.JustifyContent;
  tabIndex?: string;
  theme?: any;
  whiteSpace?: string;
  onClick?: (evt: any) => void;
};

export default TLabel;
