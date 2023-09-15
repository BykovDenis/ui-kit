import Table from '@sber-risks-ui/Table';
import TableHead from '@sber-risks-ui/TableHead';
import TableRow from '@sber-risks-ui/TableRow';
import TableCell from '@sber-risks-ui/TableCell';
import TableBody from '@sber-risks-ui/TableBody';
import Input from '../../../packages/input/src';
import { useState } from "react";

const InputTesting: React.FunctionComponent = () => {
  const [ inputValue, setInputValue ] = useState();
  const regExp: RegExp = new RegExp('[0-9_]', 'gi');
  const regExpComplixity: RegExp = new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

  const onInputChange = (evt: any) => {
    const element = evt.target;
  };

  const onInputValueChange = (evt: any, name: string, value: number | string) => {
    const element = evt.target;
    setInputValue(element.value);
    console.log(Number(value));
  }

  const onInputValueRemove = () => {
    setInputValue(undefined);
  }

  return (
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
            <Input
              isNotUseDebounce={true}
              onChange={onInputChange}
              data-test="digits-formatted"
              variant="outlined"
              isSeparateNumberFormat={true}
              isNotRunDebounce={true}
              />
          </TableCell>
          <TableCell>Masked formatted input</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              isNotUseDebounce={false}
              value={inputValue}
              onChange={onInputValueChange}
              data-test="digits"
              variant="outlined"
              type="number"
              name="input-number"
            />
          </TableCell>
          <TableCell>The component contain only digits</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              onChange={onInputChange}
              data-test="regular-expressions"
              variant="outlined"
              regExp={regExp}
              name="input-reg-expr"
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              onChange={onInputChange}
              data-test="regular-expressions-complixity"
              variant="outlined"
              regExp={regExpComplixity}
              name="input-reg-expr-compixity"
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InputTesting;
