import TTableRow from '../../table-row/types/ttable-row';

type TTableCell = TTableRow & {
  border?: string,
  borderColor?: string,
  borderStyle?: string,
  borderWidth?: string,
  color?: string,
  padding?: string,
  width?: number | string,
};

export default TTableCell;
