interface ICheckbox {
  ReactThemeContext?: any;
  backgroundColor?: string;
  checked?: boolean;
  className?: any;
  color?: string;
  disabled?: boolean;
  fontFamily?: string;
  fontSize?: string;
  id: string;
  label?: string;
  name?: string;
  onChange: (evt: any) => void;
  tabIndex?: string;
  theme?: any;
  undeterminate?: boolean;
}

export default ICheckbox;
