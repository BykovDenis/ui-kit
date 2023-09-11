import Table from "@sber-risks-ui/Table";
import TableHead from "@sber-risks-ui/TableHead";
import TableRow from "@sber-risks-ui/TableRow";
import TableCell from "@sber-risks-ui/TableCell";
import TableBody from "@sber-risks-ui/TableBody";
import TextField from "@sber-risks-ui/Textfield/src";


const TextFieldTesting: React.FunctionComponent = () => {
  const regExp: RegExp =  new RegExp('[0-9_]', 'gi');
  const regExpComplixity: RegExp =  new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

  const onInputChange = (evt: any) => {
    const element = evt.target;
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
      <TableCell><TextField label="Number values" id="text-field-0" onChange={onInputChange} data-test="text-field-digits" variant="outlined" name="text-field-number" isSeparateNumberFormat={true} isNotRunDebounce={true} /></TableCell>
      <TableCell>Masked formatted input</TableCell>
    </TableRow>
  <TableRow>
    <TableCell><TextField label="Number values" id="text-field-1" onChange={onInputChange} data-test="text-field-digits" variant="outlined" type="number" name="text-field-number" /></TableCell>
    <TableCell>The component contain only digits</TableCell>
  </TableRow>
  <TableRow>
  <TableCell><TextField label="Text with regExp" id="text-field-2" onChange={onInputChange} data-test="text-field-regular-expressions" variant="outlined" regExp={regExp} name="text-field-reg-expr" /></TableCell>
    <TableCell>The component contain regular expressions</TableCell>
  </TableRow>
  <TableRow>
  <TableCell><TextField label="Text with regExp compplixity" id="text-field-3" onChange={onInputChange} data-test="text-field-regular-expressions-complixity" variant="outlined" regExp={regExpComplixity} name="text-field-reg-expr-compixity" /></TableCell>
    <TableCell>The component contain regular expressions</TableCell>
  </TableRow>
  </TableBody>
  </Table>
)
}

export default TextFieldTesting;