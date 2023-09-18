import Table from '@sber-risks-ui/Table';
import TableHead from '@sber-risks-ui/TableHead';
import TableRow from '@sber-risks-ui/TableRow';
import TableCell from '@sber-risks-ui/TableCell';
import TableBody from '@sber-risks-ui/TableBody';
import Input from '../../../packages/input/src';
import React, { useState } from "react";

const InputTesting: React.FunctionComponent = () => {
  const [ inputValue, setInputValue ] = useState<string | undefined>();

  const [ digitsFormatted, setDigitsFormatted ] = useState<string | undefined>();
  const [ digits, setDigits ] = useState<string>();
  const [ regularExpression, setRegularExpression ] = useState<string | undefined>();
  const [ inputRegExprCompixity, setInputRegExprCompixity] = useState<string | undefined>();

  const regExp: RegExp = new RegExp('[0-9_]', 'gi');
  const regExpComplixity: RegExp = new RegExp('^(pg_|_|[0-9])|[^а-яa-z0-9_]', 'gi');


  const onInputValueChange = (evt: React.ChangeEvent<HTMLInputElement>, name?: string, value?: number | string) => {
    const element = evt.target;
    switch (element.name) {
      case 'text': {
        setInputValue(value?.toString());
        break;
      }
      case 'digits-formatted': {
        setDigitsFormatted(element.value);
        break;
      }
      case 'digits': {
        setDigitsFormatted(element.value);
        break;
      }
      case 'input-reg-expr': {
        setRegularExpression(element.value);
        break;
      }
      case 'input-reg-expr-compixity': {
        setInputRegExprCompixity(element.value);
        break;
      }
      default: {
        setInputValue(element.value);
      }
    }
  }

  const onInputValueRemove = (name: string) => {
    switch (name) {
      case 'text': {
        setInputValue(undefined);
        break;
      }
      case 'digits-formatted': {
        setDigitsFormatted(undefined);
        break;
      }
      case 'digits': {
        setDigitsFormatted(undefined);
        break;
      }
      case 'input-reg-expr': {
        setRegularExpression(undefined);
        break;
      }
      case 'input-reg-expr-compixity': {
        setInputRegExprCompixity(undefined);
        break;
      }
      default: {
        setInputValue(undefined);
      }
    }
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
              onChange={onInputValueChange}
              onRemove={onInputValueRemove}
              data-test="text"
              name="text"
              variant="outlined"
              isNotRunDebounce={true}
              value={inputValue}
            />
          </TableCell>
          <TableCell>Typing text</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              isNotUseDebounce={true}
              onChange={onInputValueChange}
              onRemove={onInputValueRemove}
              data-test="digits-formatted"
              name="digits-formatted"
              variant="outlined"
              isSeparateNumberFormat={true}
              isNotRunDebounce={true}
              value={digitsFormatted}
              />
          </TableCell>
          <TableCell>Masked formatted input</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              isNotUseDebounce={false}
              value={digits}
              onChange={onInputValueChange}
              onRemove={onInputValueRemove}
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
              onChange={onInputValueChange}
              onRemove={onInputValueRemove}
              data-test="regular-expressions"
              variant="outlined"
              regExp={regExp}
              name="input-reg-expr"
              value={regularExpression}
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Input
              onChange={onInputValueChange}
              onRemove={onInputValueRemove}
              data-test="regular-expressions-complixity"
              variant="outlined"
              regExp={regExpComplixity}
              name="input-reg-expr-compixity"
              value={inputRegExprCompixity}
            />
          </TableCell>
          <TableCell>The component contain regular expressions</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InputTesting;
