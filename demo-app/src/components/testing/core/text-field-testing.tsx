import Table from "@sber-risks-ui/core/table";
import TableHead from "@sber-risks-ui/core/table-head";
import TableRow from "@sber-risks-ui/core/table-row";
import TableCell from "@sber-risks-ui/core/table-cell";
import TableBody from "@sber-risks-ui/core/table-body";
import React, { useState } from "react";
import Typography from "@sber-risks-ui/core/typography";
import { success } from "../../../utils/dev-utils-theme";
// local components
// import TextField from "../../../../../core/packages/textfield/src";
// components from package library
import TextField from "@sber-risks-ui/core/textfield";

const TextFieldTesting: React.FunctionComponent = () => {
  const regExp: RegExp = new RegExp("[0-9_]", "gi");
  const regExpComplixity: RegExp = new RegExp(
    "^(pg_|_|[0-9])|[^a-z0-9_]",
    "gi"
  );
  const [textField1, setTextField1] = useState<number | null>(null);
  const [textField2, setTextField2] = useState<number | null>(null);
  const [textFieldRegularExpression, setTextFieldRegularExpression] = useState<
    string | null
  >(null);
  const [
    textFieldRegularExpressionComplixity,
    setTextFieldRegularExpressionComplixity,
  ] = useState<string | null>(null);

  const onInputNumberChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: number | string | null | undefined
  ) => {
    const element = evt.target;
    console.log(success(element?.value));
    setTextField2(Number(value));
  };

  const onInputChange1 = (evt: any) => {
    const element = evt.target;
    console.log(success(element?.value));
    setTextField1(element.value);
  };

  const onInputRemove1 = (name: string) => {
    console.log(name);
    setTextField1(null);
  };

  const onInputNumberRemove = (name: string) => {
    console.log(name);
    setTextField1(null);
  };

  const onTextFieldRegularExpressionChange = (evt: any) => {
    const element = evt.target;
    console.log(success(element?.value));
    setTextFieldRegularExpression(element.value);
  };

  const onTextFieldRegularExpressionRemove = () => {
    setTextFieldRegularExpression(null);
  };

  const onTextFieldRegularExpressionComplixityChange = (evt: any) => {
    const element = evt.target;
    console.log(success(element?.value));
    setTextFieldRegularExpressionComplixity(element.value);
  };

  const onTextFieldRegularExpressionComplixityRemove = () => {
    setTextFieldRegularExpressionComplixity(null);
  };

  return (
    <>
      <Typography variant="H1" textAlign="center">
        Testing TextField components
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
              <TextField
                label="Number values"
                id="text-field-digits-separated"
                value={textField1}
                onChange={onInputChange1}
                onRemove={onInputRemove1}
                data-test="text-field-digits"
                variant="outlined"
                name="text-field-number"
                isSeparateNumberFormat={true}
                isNotRunDebounce={false}
              />
            </TableCell>
            <TableCell>Masked formatted input</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField
                label="Number values"
                id="text-field-digits"
                value={textField2}
                onChange={onInputNumberChange}
                onRemove={onInputNumberRemove}
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
                onChange={onTextFieldRegularExpressionChange}
                onRemove={onTextFieldRegularExpressionRemove}
                data-test="text-field-regular-expressions"
                variant="outlined"
                regExp={regExp}
                name="text-field-reg-expr"
                value={textFieldRegularExpression}
              />
            </TableCell>
            <TableCell>The component contain regular expressions</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField
                label="Text with regExp compplixity"
                id="text-field-regular-expressions-complixity"
                onChange={onTextFieldRegularExpressionComplixityChange}
                onRemove={onTextFieldRegularExpressionComplixityRemove}
                data-test="text-field-regular-expressions-complixity"
                variant="outlined"
                regExp={regExpComplixity}
                name="text-field-reg-expr-compixity"
                value={textFieldRegularExpressionComplixity}
              />
            </TableCell>
            <TableCell>The component contain regular expressions</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TextFieldTesting;
