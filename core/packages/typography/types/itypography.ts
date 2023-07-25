import IHeader from './iheader';

interface ITypography extends IHeader {
  variant: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  children: React.ReactNode;
  className?: string;
}

export default ITypography;
