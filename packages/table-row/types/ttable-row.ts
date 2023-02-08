import TTable from '../../table/types/ttable';

type TTableRow = TTable & {
  isHeader?: boolean,
  minHeight?: number | string,
};

export default TTableRow;
