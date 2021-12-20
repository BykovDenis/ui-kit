interface ICheckbox {
  ReactThemeContext?: any;
  backgroundColor?: string;
  checked?: boolean;
  color?: string;
  disabled?: boolean;
  fontFamily?: string;
  fontSize?: string;
  id?: string;
  label?: string;
  name?: string;
  onClick: (evt: any) => void;
  theme?: any;
}

export default ICheckbox;
