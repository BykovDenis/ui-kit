import GridContainer from "../../../../../core/packages/grid-container/src";
import Datepicker from "../../../../../core/packages/datepicker/src";
import Select from "../../../../../core/packages/select/src";
import MultiSelect from "../../../../../core/packages/multi-select/src";
import { toast } from "react-toastify";
import React, { useState } from "react";
import DatepickerMask from "@sber-risks-ui/core/datepicker/enums/datepicker-mask";

// components from package library
// import GridContainer from "@sber-risks-ui/core/grid-container";
// import Datepicker from "@sber-risks-ui/core/datepicker";
// import Select from "@sber-risks-ui/core/select";
// import MultiSelect from "@sber-risks-ui/core/multi-select";

const PopupEventAccordion: React.FunctionComponent = () => {
  const [datepicker1, setDatepicker1] = useState<string | null>(null);
  const [datepicker2, setDatepicker2] = useState<string | null>(null);

  const onDatepicker1Change = (name: string, newDataValue: string) => {
    setDatepicker1(newDataValue);
    toast("datepicker1 =" + newDataValue, { type: "success" });
  };

  const onDatepicker1Remove = () => {
    setDatepicker1(null);
  };

  const onDatepicker2Change = (name: string, newDataValue: string) => {
    setDatepicker2(newDataValue);
    toast("datepicker2 =" + newDataValue, { type: "success" });
  };

  const onDatepicker2Remove = () => {
    setDatepicker2(null);
  };

  const [columnsSelected1, setColumnNamesSelected1] = useState<
    Array<string> | []
  >(["2", "1"]);
  const [columnsSelected2, setColumnNamesSelected2] = useState<Array<any> | []>(
    [
      { label: "five", value: 5 },
      { label: "three", value: 3 },
      { label: "twofff", value: 2 },
    ]
  );

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
        gridTemplateColumns="repeat(3, 300px)"
        gridTemplateRows="repeat(2, 300px)"
        gap={30}
        margin="20px"
      >
        <GridContainer
          outline="1px dashed pink"
          padding="10px"
          fontWeight={900}
        >
          <Datepicker
            name="datepicker-1"
            id="datepicker-1"
            label="datepicker 1"
            variant="outlined"
            value={datepicker1}
            onBlur={onDatepicker1Change}
            onRemove={onDatepicker1Remove}
            mask={DatepickerMask.DashedYYYYMMDD}
          />
        </GridContainer>
        <GridContainer outline="1px dotted green" padding="10px">
          <Select
            name="select-1"
            id="select-1"
            label="select 1"
            variant="outlined"
            activeElement="one"
            elements={["one", "two", "three", "four"]}
          />
        </GridContainer>
        <GridContainer alignSelf="start" height={100}>
          <MultiSelect
            disabled={false}
            sortDirection="asc"
            height={100}
            isUseLocaleStorage={false}
            id="multi-select-1"
            label="multi-select-atlas"
            name="someColumns1"
            elementNamesDefaultSelected={columnsSelected1}
            elementNames={columns1}
            onChange={onMultiSelect1Change}
            fontSize={14}
          />
        </GridContainer>
        <GridContainer outline="1px dotted yellow" padding="10px">
          <Datepicker
            name="datepicker2"
            id="datepicker-2"
            label="datepicker 2"
            variant="outlined"
            value={datepicker2}
            onChange={onDatepicker2Change}
            onRemove={onDatepicker2Remove}
          />
        </GridContainer>
        <GridContainer outline="1px dotted blue" padding="10px">
          <Select
            name="select-2"
            id="select-2"
            label="select 2"
            variant="outlined"
            activeElement="three"
            elements={["one", "two", "three", "four"]}
          />
        </GridContainer>
        <GridContainer height={100}>
          <MultiSelect
            disabled={false}
            sortDirection="asc"
            height={100}
            isUseLocaleStorage={false}
            id="multi-select-2"
            label="some-label"
            name="someColumns2"
            elementNamesDefaultSelected={columnsSelected2}
            elementNames={columns}
            onChange={onMultiSelect2Change}
            fontSize={14}
          />
        </GridContainer>
      </GridContainer>
    </>
  );
};

export default PopupEventAccordion;
