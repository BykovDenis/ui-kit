import TTable from '../../table/types/ttable';

type TTableRow = TTable & {
  bgOddColumnColor?: string,
  isHeader?: boolean,
};

export default TTableRow;
