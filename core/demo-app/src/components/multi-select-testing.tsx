import React, { useState } from "react";
import MultiSelect from "../../../packages/multi-select/src";
import TMultiSelectOption from "@sber-risks-ui/MultiSelect/types/tmulti-select-option";
import GridContainer from "@sber-risks-ui/GridContainer";
import FlexContainer from "@sber-risks-ui/FormControl";
import Button from "@sber-risks-ui/Button";
import FormControl from "@sber-risks-ui/FlexContainer";

const MultiSelectTesting: React.FunctionComponent = () => {
  const [columnsSelected0, setColumnNamesSelected0] = useState<Array<TMultiSelectOption> | []>([]);
  const [columnsSelected1, setColumnNamesSelected1] = useState<Array<TMultiSelectOption> | []>(['2', '1']);
  const [columnsSelected2, setColumnNamesSelected2] = useState<Array<TMultiSelectOption> | []>([    { label: 'five', value: 5 },
    { label: 'three', value: 3 },
    { label: 'twofff', value: 2 },]);
  const [columnsSelected3, setColumnNamesSelected3] = useState<Array<TMultiSelectOption> | []>([]);

  const columns: Array<TMultiSelectOption> = [
    { label: 'one', value: 1 },
    { label: 'someeee', value: 88 },
    { label: 'five', value: 5 },
    { label: 'three', value: 3 },
    { label: 'twofff', value: 2 },
    { label: 'twwwwo', value: 22 },
    { label: 'fffour', value: 4 },
    { label: 'some', value: 8 }
  ];

  const columns1: Array<string> = ['1', '5', '7', '9', '4'];
  const columns2: Array<string> = ['one', 'two', 'three', 'four', 'five', 'six'];

  const onMultiSelect0Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected0(columnNames)
  }

  const onMultiSelect1Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected1(columnNames)
  }

  const onMultiSelect1Clean = () => {
    setColumnNamesSelected1([]);
    setColumnNamesSelected2([]);
  }

  const onMultiSelect2Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected2(columnNames)
  }


  const onMultiSelect3Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected3(columnNames)
  }


  return <>
    <FlexContainer padding="40px" width={300} flexDirection="column" alignItems="flex-start">
      <FormControl width="initial" margin="0 0 15px 0">
      <Button onClick={onMultiSelect1Clean}>Clear filters</Button>
      </FormControl>
      <MultiSelect disabled={false} sortDirection="asc" height={50} isUseLocaleStorage={false} id="multi-select-1" label="multi-select-atlas" name="someColumns1" elementNamesDefaultSelected={columnsSelected1} elementNames={columns1} onChange={onMultiSelect1Change}  />
    </FlexContainer>
    <GridContainer columns={2} rows={2} gap="40px" padding="50px">
    <MultiSelect disabled={false} sortDirection="asc" height={100}  isUseLocaleStorage={false} id="multi-select-2" label="some-label" name="someColumns2" elementNamesDefaultSelected={columnsSelected2} elementNames={columns} onChange={onMultiSelect2Change}  />
    {/*<MultiSelect sortDirection="asc" height={100}  isUseLocaleStorage={true} id="multi-select-3" label="some-label" name="someColumns3" elementNamesDefaultSelected={columnsSelected3} elementNames={columns1} onChange={onMultiSelect3Change}  />*/}
  </GridContainer>
  </>
}

export default MultiSelectTesting;