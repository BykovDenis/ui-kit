import CSS from "csstype";

type TSwitcher = {
  activeElement?: string | undefined,
  backgroundColor?: CSS.Property.BackgroundColor,
  classes?: any,
  color?: CSS.Property.Color,
  disabled?: boolean,
  element1: string,
  element2: string,
  onSwitcherChange?: (value: string) => void,
  height?: number | string,
  fontSize?: number | string,
};

export default TSwitcher;
