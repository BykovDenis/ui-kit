import TBaseStyles from "../../types/tbase-styles";

type TGridContainerStyled = TBaseStyles & {
  overflowY?: string,
  outline?: string,
  borderRadius?: number | string,
  top?: number | string,
  left?: number | string,
  right?: number | string,
  bottom?: number | string,
  zIndex?: number,
  gridTemplateColumns: string,
  gridTemplateRows?: string,
  gridGap?: number | string,
  gridColumnGap?: number | string,
  gridRowGap?: number | string,
};

export default TGridContainerStyled;
