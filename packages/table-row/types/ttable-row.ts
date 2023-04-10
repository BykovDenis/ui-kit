import TTable from '../../table/types/ttable';

type TTableRow = TTable & {
  isHeader?: boolean,
  minHeight?: number | string,
  borderColor?: string,
};

export default TTableRow;
