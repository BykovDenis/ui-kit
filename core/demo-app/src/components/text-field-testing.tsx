import Table from '@sber-risks-ui/Table';
import TableHead from '@sber-risks-ui/TableHead';
import TableRow from '@sber-risks-ui/TableRow';
import TableCell from '@sber-risks-ui/TableCell';
import TableBody from '@sber-risks-ui/TableBody';
import TextField from '../../../packages/textfield/src';
import { useState } from 'react';

const TextFieldTesting: React.FunctionComponent = () => {
  const regExp: RegExp = new RegExp('[0-9_]', 'gi');
  const regExpComplixity: RegExp = new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');
  const [textField1, setTextField1] = useState<number>(null);
  const [textField2, setTextField2] = useState<number>(null);

  const onInputChange = (evt: any, name: string, value: number | string) => {
    const element = evt.target;
    console.log(element?.value);
    setTextField1(Number(value));
  };

  const onInputChange2 = (evt: any, name: string, value: number | string) => {
    const element = evt.target;
    console.log(element?.value);
    setTextField2(Number(value));
  };

  const onInputRemove = (name: string) => {
    console.log(name);
  };

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
            <TextField
              label="Number values"
              id="text-field-0"
              value={textField2}
              onChange={onInputChange2}
              data-test="text-field-digits"
              variant="outlined"
              name="text-field-number"
              isSeparateNumberFormat={false}
              isNotRunDebounce={false}
            />
          </TableCell>
          <TableCell>Masked formatted input</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TextField
              label="Number values"
              id="text-field-1"
              value={textField1}
              onChange={onInputChange}
              onRemove={onInputRemove}
              data-test="text-field-digits"
              variant="outlined"
              type="number"
              name="text-field-number"
            />
          </TableCell>
          <TableCell>The component contain only digits</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TextField
              label="Text with regExp"
              id="text-field-2"
              onChange={onInputChange}
              data-test="text-field-regular-expressions"
              variant="outlined"
              regExp={regExp}
              name="text-field-reg-expr"
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TextField
              label="Text with regExp compplixity"
              id="text-field-3"
              onChange={onInputChange}
              data-test="text-field-regular-expressions-complixity"
              variant="outlined"
              regExp={regExpComplixity}
              name="text-field-reg-expr-compixity"
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TextFieldTesting;
