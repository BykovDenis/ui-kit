import IHeader from './iheader';
import TBaseStyles from '../../types/tbase-styles';

type TTypography = IHeader &
  TBaseStyles & {
    variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Phrase';
    children: React.ReactNode;
    className?: string;
  };

export default TTypography;
