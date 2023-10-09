import usages from './usages';
import Table from '@sber-risks-ui/Table';
import TableBody from '@sber-risks-ui/TableBody';
import TableCell from '../../../../packages/table-cell/src';
import TableRow from '@sber-risks-ui/TableRow';
import calculateRowSpan from './helpers/calculate-row-span';
import calculateColSpan from './helpers/calculate-col-span';

type TUsageDetailsTableItem = {
  element: any;
  index: number;
};

const UsageDetailsTableItem: React.FunctionComponent<TUsageDetailsTableItem> = (props: TUsageDetailsTableItem) => {
  const { element } = props;
  const { group, usageDetails } = element;

  const rowSpan = calculateRowSpan(usageDetails);
  const colSpan = calculateColSpan(usageDetails);

  return (
    <TableRow key={`${props.element.group} ${props.index}`}>
      <TableCell width={200} verticalAlign="top" rowSpan={rowSpan}>
        {props.element.group}
      </TableCell>
      <TableCell colSpan={colSpan}>Total</TableCell>
      <TableCell>{props.element?.unit || props.element.usageDetails.usage}</TableCell>
    </TableRow>
  );
};

type TUsageDetailsTable = {
  usageDetails: any;
};

const UsageDetailsTable: React.FunctionComponent<TUsageDetailsTable> = (props: TUsageDetailsTable) => {
  const usages: any = [];

  let j: number = 0;
  function usageDetailsParsing(usageDetails: any): void {
    const breakdown: any = usageDetails?.breakdown;
    if (!breakdown) {
      return;
    }
    let i: number = 0;
    j++;
    for (let element of breakdown) {
      // @ts-ignore
      usages.push(<UsageDetailsTableItem element={element} index={j} />);
      usageDetailsParsing(element.usageDetails);
      i++;
    }
  }
  usageDetailsParsing(props.usageDetails);
  return usages;
};

const JsonToTable: React.FunctionComponent = () => {
  return (
    <Table>
      <TableBody>
        <UsageDetailsTable usageDetails={usages[0].limitUsage.usageDetails} />
      </TableBody>
    </Table>
  );
};

export default JsonToTable;
