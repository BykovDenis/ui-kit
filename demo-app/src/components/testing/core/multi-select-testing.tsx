import React, { useState } from "react";
import MultiSelect from "../../../../../core/packages/multi-select/src";
// components from package library
// import MultiSelect from "@dbykov-ui-kit/core/multi-select";
import { TMultiSelectOption } from "@dbykov-ui-kit/core/multi-select";
import GridContainer from "@dbykov-ui-kit/core/grid-container";
import Button from "@dbykov-ui-kit/core/button";
import FormControl from "@dbykov-ui-kit/core/form-control";
import FlexContainer from "@dbykov-ui-kit/core/flex-container";

const MultiSelectTesting: React.FunctionComponent = () => {
  const [columnsSelected1, setColumnNamesSelected1] = useState<
    Array<string> | []
  >(["2", "1"]);
  const [columnsSelected2, setColumnNamesSelected2] = useState<Array<any> | []>(
    [
      { value: "B1_OL_UK", label: "B1_OL_UK" },
      { value: "B1_SC_UK", label: "B1_SC_UK" },
      { value: "B1_SH_UK", label: "B1_SH_UK" },
      { value: "B1_SS1_UK", label: "B1_SS1_UK" },
    ]
  );
  const [columnsSelected3, setColumnNamesSelected3] = useState<
    Array<TMultiSelectOption> | []
  >([]);

  const columns: Array<any> = [
    { value: "B1_EA_UK", label: "B1_EA_UK" },
    { value: "B1_ES_UK", label: "B1_ES_UK" },
    { value: "B1_OL_UK", label: "B1_OL_UK" },
    { value: "B1_SC_UK", label: "B1_SC_UK" },
    { value: "B1_SH_UK", label: "B1_SH_UK" },
    { value: "B1_SS1PRUK", label: "B1_SS1PRUK" },
    { value: "B1_SS1_UK", label: "B1_SS1_UK" },
    { value: "B2_AB_UK", label: "B2_AB_UK" },
    { value: "BOOK-UA", label: "BOOK-UA" },
    { value: "BOOK1_CP", label: "BOOK1_CP" },
    { value: "BOOK1_GP", label: "BOOK1_GP" },
    { value: "BOOK2_NUC", label: "BOOK2_NUC" },
  ];

  const columns1: Array<string> = [
    "1",
    "5",
    "7",
    "9",
    "4",
    "32",
    "43",
    "3232323232323",
    "4234",
  ];

  const metrics: string[] = [
    "ProductValue",
    "CVA",
    "DVA",
    "BCVA",
    "ExpectedDiscountedPositiveExposure",
    "ExpectedDiscountedNegativeExposure",
    "ExpectedDiscountedPositiveExposureNoCollateral",
    "ExpectedDiscountedNegativeExposureNoCollateral",
    "ExpectedPositiveExposure",
    "ExpectedNegativeExposure",
    "ExpectedOwnProbabilityOfDefault",
    "ExpectedCounterpartyProbabilityOfDefault",
    "CVA_NonLinear",
    "DVA_NonLinear",
    "BCVA_NonLinear",
    "ProductValue_NonLinear",
    "CVA_ByTrade",
    "DVA_ByTrade",
    "BCVA_ByTrade",
    "PresentValues_ByTrade",
    "ENE",
    "EPE",
  ];

  const selectedMetrics: string[] = ["BCVA", "CVA", "DVA", "ProductValue"];

  const onMultiSelect1Change = (columnNames: Array<string>) => {
    setColumnNamesSelected1(columnNames);
  };

  const onMultiSelect1Clean = () => {
    setColumnNamesSelected1([]);
    setColumnNamesSelected2([]);
  };

  const onMultiSelect2Change = (columnNames: Array<string>) => {
    setColumnNamesSelected2(columnNames);
  };

  return (
    <>
      <GridContainer
        gridTemplateColumns="300px 500px 300px 300px"
        gridColumnGap={20}
        gridTemplateRows="500px"
        alignItems="center"
      >
        <FlexContainer
          padding="40px"
          width={300}
          flexDirection="column"
          alignItems="flex-start"
        >
          <FormControl width="initial" margin="0 0 15px 0">
            <Button onClick={onMultiSelect1Clean}>Clear filters</Button>
          </FormControl>
          <MultiSelect
            disabled={false}
            sortDirection="asc"
            height={150}
            isUseLocaleStorage={false}
            id="multi-select-1"
            label="multi-select-atlas"
            name="someColumns1"
            elementNamesDefaultSelected={columnsSelected1}
            elementNames={columns1}
            onChange={onMultiSelect1Change}
            fontSize={14}
          />
        </FlexContainer>
        <MultiSelect
          id="multi-select-2"
          name="someColumns2"
          elementNames={columns}
          height={177}
          onChange={onMultiSelect2Change}
          label="some-label"
          sortDirection="asc"
          isUseLocaleStorage={false}
          elementNamesDefaultSelected={columnsSelected2}
          fontSize={14}
        />
        <MultiSelect
          id="selected-metrics-objects"
          name="selectedMetrics"
          elementNames={metrics}
          height={177}
          onChange={onMultiSelect2Change}
          label="Metrics"
          sortDirection="asc"
          elementNamesDefaultSelected={selectedMetrics}
          fontSize={12}
          disabled={true}
        />
        <MultiSelect
          id="multi-select-strings"
          name="someColumns2"
          elementNames={columns}
          height={177}
          onChange={onMultiSelect2Change}
          label="some-label"
          sortDirection="asc"
          elementNamesDefaultSelected={columnsSelected2}
          fontSize={14}
          disabled={true}
        />
      </GridContainer>
    </>
  );
};

export default MultiSelectTesting;
