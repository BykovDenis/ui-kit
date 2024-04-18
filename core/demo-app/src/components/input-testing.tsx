import Table from '../../../packages/table/src';
import TableHead from '../../../packages/table-head/src';
import TableRow from '../../../packages/table-row/src';
import TableCell from '../../../packages/table-cell/src';
import TableBody from '../../../packages/table-body/src';
import Input from '../../../packages/input/src';
import React, { useState } from 'react';
import Typography from '../../../packages/typography/src';

const InputTesting: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string | undefined>();

  const [digitsFormatted, setDigitsFormatted] = useState<string | undefined>();
  const [digits, setDigits] = useState<string>();
  const [regularExpression, setRegularExpression] = useState<string | undefined>();
  const [inputRegExprCompixity, setInputRegExprCompixity] = useState<string | undefined>();

  const regExpOnlyDigits: RegExp = new RegExp('[^0-9_]', 'gi');
  const regExpOnlySymbols: RegExp = new RegExp('[0-9_]', 'gi');
  const regExpComplixity: RegExp = new RegExp('^(pg_|_|[0-9])|[^а-яa-z0-9_]', 'gi');
  const regExpTrim: RegExp = new RegExp('^\\s+|\\s+$', 'gi');

  const onInputValueChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value?: number | string | null | undefined
  ) => {
    const element = evt.target;
    switch (element.name) {
      case 'trim': {
        setInputValue(value?.toString()?.trim());
        console.log(value?.toString()?.trim());
        break;
      }
      case 'text': {
        setInputValue(value?.toString()?.trim());
        console.log(value?.toString()?.trim());
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
  };

  const onInputValueRemove = (name: string) => {
    switch (name) {
      case 'trim': {
        setInputValue(undefined);
        break;
      }
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
  };

  return (
    <>
      <Typography variant="H1" textAlign="center">
        Testing Input components
      </Typography>
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
                onChange={onInputValueChange}
                onRemove={onInputValueRemove}
                data-test="text"
                name="text"
                variant="outlined"
                value={inputValue}
                isNotRunDebounce={false}
                textAlign="right"
              />
            </TableCell>
            <TableCell>Typing text</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Input
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
                value={digits}
                onChange={onInputValueChange}
                onRemove={onInputValueRemove}
                data-test="digits"
                variant="outlined"
                type="number"
                name="input-number"
                isNotRunDebounce={false}
              />
            </TableCell>
            <TableCell>The component contain only digits</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Input
                onChange={onInputValueChange}
                onRemove={onInputValueRemove}
                data-test="regular-expressions-numbers"
                variant="outlined"
                regExp={regExpOnlyDigits}
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
                data-test="regular-expressions-symbols"
                variant="outlined"
                regExp={regExpOnlySymbols}
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
          <TableRow>
            <TableCell>
              <Input
                onChange={onInputValueChange}
                onRemove={onInputValueRemove}
                data-test="trim"
                name="trim"
                variant="outlined"
                value={inputValue}
                isNotRunDebounce={true}
                regExp={regExpTrim}
              />
            </TableCell>
            <TableCell>Typing text trim</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default InputTesting;
