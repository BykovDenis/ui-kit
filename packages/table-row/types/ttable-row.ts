import TTable from '../../table/types/ttable';

type TTableRow = TTable & {
  isHeader?: boolean,
};

export default TTableRow;
