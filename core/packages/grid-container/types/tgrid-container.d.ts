import TBaseStyles from "../../types/tbase-styles";

type TGridContainer = TBaseStyles & {
  overflowY?: string,
  outline?: string,
  borderRadius?: number | string,
  top?: number | string,
  left?: number | string,
  right?: number | string,
  bottom?: number | string,
  zIndex?: number,
  rows?: number,
  columns?: number,
  gap?: number | string,
  columnWidth?: number | string,
  rowHeight?: number | string,
  gridTemplateColumns?: string,
  gridTemplateRows?: string,
  gridRowGap?: string,
  gridColumnGap?: string,
};

export default TGridContainer;
