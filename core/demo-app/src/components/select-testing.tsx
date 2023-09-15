import TableHead from '@sber-risks-ui/TableHead';
import TableRow from '@sber-risks-ui/TableRow';
import TableCell from '@sber-risks-ui/TableCell';
import Table from '@sber-risks-ui/Table';
import TableBody from '@sber-risks-ui/TableBody';
import IOption from '@sber-risks-ui/Select/types/ioption';
import { useState } from 'react';
import Select from '@sber-risks-ui/Select';

const SelectTesting: React.FunctionComponent = () => {
  const [numberValue, setNumberValue] = useState<number | null>(4);
  const [objectValue, setObjectValue] = useState<IOption | null>({ label: 'Сентябрь', value: '8' });

  const onInputChange = (option: IOption) => {
    setNumberValue(option.value as number);
    console.log(option.value?.toString());
  };

  const onInputChange2 = (option: IOption) => {
    setObjectValue(option);
    console.log(option.toString());
  };

  const onInputRemove = () => {
    setNumberValue(null);
    console.log('');
  };

  const onInputRemove2 = () => {
    setObjectValue(null);
    console.log('');
  };

  const numbersElement: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const elementsState: Array<{ label: string; value: string }> = [
    { label: 'Январь', value: '0' },
    { label: 'Февраль', value: '1' },
    { label: 'Март', value: '2' },
    { label: 'Апрель', value: '3' },
    { label: 'Май', value: '4' },
    { label: 'Июнь', value: '5' },
    { label: 'Июль', value: '6' },
    { label: 'Август', value: '7' },
    { label: 'Сентябрь', value: '8' },
    { label: 'Октябрь', value: '9' },
    { label: 'Ноябрь', value: '10' },
    { label: 'Декабрь', value: '11' },
  ];

  return (
    <>
      <Table>
        <TableHead>
          <TableRow isHeader={true}>
            <TableCell>Component</TableCell>
            <TableCell>Component description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Select
                onChange={onInputChange2}
                onRemove={onInputRemove2}
                label="Some select"
                data-test="select-object"
                activeElement={objectValue}
                elements={elementsState}
                variant="outlined"
                id="select-object"
                name="selectObject"
                isCreatable={true}
                isNotVisibleIndicator={true}
              />
            </TableCell>
            <TableCell>The component Select contain only digits</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Select
                onChange={onInputChange}
                onRemove={onInputRemove}
                data-test="select-digits-1"
                activeElement={numberValue}
                elements={numbersElement}
                variant="outlined"
                id="select-digits"
                name="selectDigits"
                isCreatable={true}
              />
            </TableCell>
            <TableCell>The component Select contain complexity data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default SelectTesting;
