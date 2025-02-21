import TableHead from "@sber-risks-ui/core/table-head";
import TableRow from "@sber-risks-ui/core/table-row";
import TableCell from "@sber-risks-ui/core/table-cell";
import Table from "@sber-risks-ui/core/table";
import TableBody from "@sber-risks-ui/core/table-body";
import { IOption } from "@sber-risks-ui/core/select";
import { useState } from "react";
// local components
import Select from "../../../../../core/packages/select/src";
// components from package library
// import Select from "@sber-risks-ui/core/select";

const SelectTesting: React.FunctionComponent = () => {
  const [textValue, setTextValue] = useState<string | null>(null);
  const [numberValue, setNumberValue] = useState<number | null>(null);
  const [objectValue, setObjectValue] = useState<IOption | null>(null);

  const onInputTextChange = (option: IOption) => {
    setTextValue(option.value as string);
    console.log(option.value?.toString());
  };

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
    console.log("");
  };

  const onInputRemove2 = () => {
    setObjectValue(null);
    console.log("");
  };

  const textElements: Array<string> = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "VNEKB",
    "VNESH",
    "CORVN",
    "VNEKSH",
  ];
  const numbersElement: Array<number> = [
    111, 121, 311, 412, 532, 156, 127, 198, 189, 231,
  ];

  const elementsState: Array<{ label: string; value: string }> = [
    { label: "Январь", value: "0" },
    { label: "Февраль", value: "1" },
    { label: "Март", value: "2" },
    { label: "Апрель", value: "3" },
    { label: "Май", value: "4" },
    { label: "Июнь", value: "5" },
    { label: "Июль", value: "6" },
    { label: "Август", value: "7" },
    { label: "Сентябрь", value: "8" },
    { label: "Октябрь", value: "9" },
    { label: "Ноябрь", value: "10" },
    { label: "Декабрь", value: "11" },
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
                onChange={onInputTextChange}
                onRemove={onInputRemove2}
                label="Some select"
                data-test="select-text"
                activeElement={textValue}
                elements={textElements}
                variant="outlined"
                id="select-text"
                name="selectText"
                isCreatable={true}
                isNotVisibleIndicator={true}
              />
            </TableCell>
            <TableCell>The component Select contain only letters</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Select
                label="Some label"
                onChange={onInputChange}
                onRemove={onInputRemove}
                data-test="select-digits"
                activeElement={numberValue}
                elements={numbersElement}
                variant="outlined"
                id="select-digits"
                name="selectDigits"
                isCreatable={true}
                textAlign="right"
              />
            </TableCell>
            <TableCell>The component Select contain complexity data</TableCell>
          </TableRow>
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
                label="Some select disabled"
                data-test="select-disabled"
                activeElement={"one"}
                elements={["one", "two", "three", "four", "five", "six"]}
                variant="outlined"
                id="select-disabled"
                name="selectObject"
                isCreatable={true}
                isNotVisibleIndicator={true}
                disabled={true}
              />
            </TableCell>
            <TableCell>
              The disabled component Select (primitive string entities)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Select
                label="Some select objects disabled"
                data-test="select-objects-disabled"
                activeElement={{ label: "two", value: 1 }}
                elements={[
                  { label: "one", value: 1 },
                  { label: "two", value: 2 },
                  { label: "three", value: 3 },
                ]}
                variant="outlined"
                id="select-objects-disabled"
                name="selectObject"
                isCreatable={true}
                isNotVisibleIndicator={true}
                disabled={true}
              />
            </TableCell>
            <TableCell>
              The disabled component Select (object string entities)
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default SelectTesting;
