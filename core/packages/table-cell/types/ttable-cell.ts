import TTableRow from '../../table-row/types/ttable-row';
import CSS from "csstype";

type TTableCell = TTableRow & {
  border?: string;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string;
  color?: string;
  padding?: CSS.Property.Padding;
  width?: number | string;
  colSpan?: number;
  rowSpan?: number;
  verticalAlign?: string;
};

export default TTableCell;
