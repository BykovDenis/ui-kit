type TStickyBottomPanel = {
  backgroundImage?: string;
  backgroundColor?: string;
  children?: any | Array<any>; // React.ReactNode | number | string | Array<React.ReactNode>,
  className?: any;
  height?: number | string;
  color?: string;
  isOpen: boolean;
  onDialogVisibleChange?: () => void;
  panelAlign?: 'left' | 'right' | 'center';
  width?: number | string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  border?: string;
  boxShadow?: string;
  filter?: string;
  zIndex?: number;
};

export default TStickyBottomPanel;
