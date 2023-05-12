interface IHeader {
  error?: boolean;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  fontFamily?: string;
  textDecoration?: 'none' | 'inherit' | 'underline' | 'overline' | 'line-through' | 'blink';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none' | 'inherit';
}

export default IHeader;
