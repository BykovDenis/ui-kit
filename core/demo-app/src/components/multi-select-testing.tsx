import React, { useState } from "react";
import MultiSelect from "../../../packages/multi-select/src";
import TMultiSelectOption from "@sber-risks-ui/MultiSelect/types/tmulti-select-option";
import GridContainer from "@sber-risks-ui/GridContainer";
import FlexContainer from "@sber-risks-ui/FormControl";

const MultiSelectTesting: React.FunctionComponent = () => {
  const [columnsSelected0, setColumnNamesSelected0] = useState<Array<TMultiSelectOption> | []>([]);
  const [columnsSelected1, setColumnNamesSelected1] = useState<Array<TMultiSelectOption> | []>([]);
  const [columnsSelected2, setColumnNamesSelected2] = useState<Array<TMultiSelectOption> | []>([]);
  const [columnsSelected3, setColumnNamesSelected3] = useState<Array<TMultiSelectOption> | []>([]);

  const columns: Array<TMultiSelectOption> = [
    { label: 'one', value: 1 },
    { label: 'five', value: 5 },
    { label: 'three', value: 3 },
    { label: 'two', value: 2 },
    { label: 'four', value: 4 },
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

  const onMultiSelect2Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected2(columnNames)
  }

  const onMultiSelect3Change = (columnNames: Array<TMultiSelectOption>) => {
    setColumnNamesSelected3(columnNames)
  }


  return <>
    <FlexContainer padding="40px" width={300}>
      <MultiSelect variant="atlas" sortDirection="asc" height={30} isUseLocaleStorage={false} id="multi-select-1" label="multi-select-atlas" name="someColumns1" elementNamesDefaultSelected={columnsSelected1} elementNames={columns} onChange={onMultiSelect1Change}  />
    </FlexContainer>
  {/*  <GridContainer columns={2} rows={2} gap="40px" padding="50px">*/}
  {/*  <MultiSelect sortDirection="asc" height={100}  isUseLocaleStorage={true} id="multi-select-2" label="some-label" name="someColumns2" elementNamesDefaultSelected={columnsSelected2} elementNames={columns} onChange={onMultiSelect2Change}  />*/}
  {/*  <MultiSelect sortDirection="asc" height={100}  isUseLocaleStorage={true} id="multi-select-3" label="some-label" name="someColumns3" elementNamesDefaultSelected={columnsSelected3} elementNames={columns1} onChange={onMultiSelect3Change}  />*/}
  {/*</GridContainer>*/}
  </>
}

export default MultiSelectTesting;