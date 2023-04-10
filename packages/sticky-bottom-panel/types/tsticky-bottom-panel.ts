type TStickyBottomPanel = {
  backgroundColor?: string,
  children?: any | Array<any>, // React.ReactNode | number | string | Array<React.ReactNode>,
  className?: any,
  height?: number | string,
  color?: string,
  isOpen: boolean,
  onDialogVisibleChange?: () => void,
};

export default TStickyBottomPanel;
