interface ISwitcher {
  ReactThemeContext?: any;
  activeElement?: string;
  backgroundColor?: string;
  classes?: any;
  color?: string;
  disabled?: boolean;
  element1: string;
  element2: string;
  onSwitcherChange?: (datasetName: string) => void;
}

export default ISwitcher;
