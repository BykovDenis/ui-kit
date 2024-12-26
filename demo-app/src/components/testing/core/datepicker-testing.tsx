import FlexContainer from "@sber-risks-ui/core/flex-container";
import React, { useState } from "react";
import { warning, success } from "../../../utils/dev-utils-theme";
// local components
import Datepicker from "../../../../../core/packages/datepicker/src";
// import GridContainer from "../../../../../core/packages/grid-container/src";
// components from package library
// import Datepicker from "@sber-risks-ui/core/datepicker";
import Typography from "@sber-risks-ui/core/typography";
import { toast } from "react-toastify";
import DatepickerMask from "@sber-risks-ui/core/datepicker/enums/datepicker-mask";
import Locale from "@sber-risks-ui/core/enums/locale";
import TextField from "@sber-risks-ui/core/textfield";
import GridContainer from "@sber-risks-ui/core/grid-container";

const DatepickerTesting = () => {
  const [date, setDate] = useState("2024-04-02");
  const [date1, setDate1] = useState<string | null>(null);
  const [date2, setDate2] = useState<string | null>(null);
  const [date3, setDate3] = useState<string | null>(null);

  const [minMaxDate1, setMinMaxDate1] = useState<string | undefined | null>(
    null
  );
  const [minMaxDate2, setMinMaxDate2] = useState<string | undefined | null>(
    null
  );
  const [minDate1, setMinDate1] = useState<string | undefined>("03.10.2024");
  const [minDate2, setMinDate2] = useState<string | undefined>("2024-10-03");
  const [maxDate1, setMaxDate1] = useState<string | undefined>("20.10.2024");
  const [maxDate2, setMaxDate2] = useState<string | undefined>("2024-10-20");

  const onMinMaxDate1Change = (
    name: string,
    value: string,
    isValid: boolean
  ) => {
    setMinMaxDate1(value);
    if (isValid) {
      console.log(success(value));
      toast("value = " + value, { type: "success" });
    } else {
      console.log(warning(value));
      toast("value = " + value, { type: "error" });
    }
    console.log("date1", date1);
  };

  const onMinMaxDate1Remove = (name: string) => {
    setMinMaxDate1(null);
    console.log(date1);
  };

  const onMinMaxDate2Change = (
    name: string,
    value: string,
    isValid: boolean
  ) => {
    setMinMaxDate2(value);
    if (isValid) {
      console.log(success(value));
      toast("value = " + value, { type: "success" });
    } else {
      console.log(warning(value));
      toast("value = " + value, { type: "error" });
    }
    console.log("date1", date1);
  };

  const onMinMaxDate2Remove = (name: string) => {
    setMinMaxDate2(null);
    console.log(date1);
  };

  const onDateChange = (name: string, value: string) => {
    console.log(value);
    setDate(value);
  };

  const onMinDate1Change = (
    evt: any,
    name: string,
    value: string | number | null | undefined
  ) => {
    setMinDate1(value as string);
  };

  const onMinDate2Change = (
    evt: any,
    name: string,
    value: string | number | null | undefined
  ) => {
    setMinDate2(value as string);
  };

  const onMinDate1Remove = (name: string) => {
    setMinDate1(undefined);
  };

  const onMinDate2Remove = (name: string) => {
    setMinDate2(undefined);
  };

  const onMaxDate1Change = (
    evt: any,
    name: string,
    value: string | number | null | undefined
  ) => {
    setMaxDate1(value as string);
  };

  const onMaxDate2Change = (
    evt: any,
    name: string,
    value: string | number | null | undefined
  ) => {
    setMaxDate2(value as string);
  };

  const onMaxDate1Remove = (name: string) => {
    setMaxDate1(undefined);
  };

  const onMaxDate2Remove = (name: string) => {
    setMaxDate2(undefined);
  };

  const onDate1Change = (name: string, value: string, isValid: boolean) => {
    setDate1(value);
    if (isValid) {
      console.log(success(value));
      toast("value = " + value, { type: "success" });
    } else {
      console.log(warning(value));
      toast("value = " + value, { type: "error" });
    }
    console.log("date1", date1);
  };

  const onDate1Remove = (name: string) => {
    setDate1(null);
    console.log(date1);
  };

  const onDate2Remove = (name: string) => {
    setDate2(null);
    console.log(date2);
  };

  const onDate2Change = (
    name: string,
    newDateValue: string,
    isValid: boolean
  ) => {
    setDate2(newDateValue);
    if (isValid) {
      console.log(success(newDateValue));
      toast("value = " + newDateValue, { type: "success" });
    } else {
      console.log(warning(newDateValue));
      toast("value =  " + newDateValue, { type: "error" });
    }
  };

  const onDate3Change = (name: string, value: string, isValid: boolean) => {
    setDate3(value);
    if (isValid) {
      console.log(success(value));
      toast("value = " + value, { type: "success" });
    } else {
      console.log(warning(value));
      toast("value =  " + value, { type: "error" });
    }
  };

  const onDate3Remove = (name: string) => {
    setDate3(null);
  };

  console.log(warning(date1));
  return (
    <GridContainer width={900}>
      <Typography variant="H1" textAlign="center">
        Testing Datepickers components
      </Typography>
      <GridContainer gridTemplateRows="repeat(2, 100px)" gridRowGap="15px">
        <GridContainer
          gridTemplateColumns="repeat(3, 300px)"
          gridColumnGap="10px"
        >
          <FlexContainer
            id="datepicker-flex-container"
            marginTop="20px"
            marginBottom={20}
            marginRight={17}
            paddingTop={5}
            paddingRight={6}
            paddingBottom={7}
            paddingLeft="8px"
            width={200}
          >
            <Datepicker
              value={date1 as string}
              onChange={onDate1Change}
              onRemove={onDate1Remove}
              variant="outlined"
              label="Datepicker1 EN"
              id="datepicker1"
              name="datepicker1"
              locale={Locale.Ru}
              height={60}
              datesContainerAlign="left"
              textMessage={(!date1 && "Date is empty") || ""}
            />
          </FlexContainer>
          <FlexContainer width={200} margin="20px 10px 20px 0">
            <Datepicker
              value={date2}
              onBlur={onDate2Change}
              onRemove={onDate2Remove}
              mask={DatepickerMask.DashedYYYYMMDD}
              variant="outlined"
              label="Datepicker2 EN"
              id="datepicker2"
              name="datepicker2"
              height={60}
              error={!date2}
              textMessage={(!date2 && "Date is empty") || ""}
            />
          </FlexContainer>
          <FlexContainer width={200} margin="20px 10px 20px 0">
            <Datepicker
              value={date3}
              onBlur={onDate3Change}
              onRemove={onDate3Remove}
              mask="dd.MM.yyyy"
              variant="outlined"
              label="Datepicker3"
              id="datepicker3"
              name="datepicker3"
              height={60}
            />
          </FlexContainer>
        </GridContainer>
        <GridContainer gridTemplateColumns="repeat(2, 300px)">
          <GridContainer width={200} margin="20px 10px">
            <Datepicker
              value={minMaxDate1}
              onChange={onMinMaxDate1Change}
              onRemove={onMinMaxDate1Remove}
              mask={DatepickerMask.DottedDDMMYYYY}
              variant="outlined"
              label="Min Max date 1"
              id="min-max-date-1"
              name="minMaxDate1"
              height={60}
              minDate={minDate1}
              maxDate={maxDate1}
              error={!minMaxDate1}
              locale={Locale.Ru}
            />
            <TextField
              id="min-date-1"
              name="minDate1"
              label="Min date 1"
              value={minDate1}
              variant="outlined"
              onChange={onMinDate1Change}
              onRemove={onMinDate1Remove}
            />
            <TextField
              id="max-date-1"
              name="maxDate1"
              label="Max date 1"
              value={maxDate1}
              variant="outlined"
              onChange={onMaxDate1Change}
              onRemove={onMaxDate1Remove}
            />
          </GridContainer>
          <GridContainer width={200} margin="20px 10px">
            <Datepicker
              value={minMaxDate2}
              onBlur={onMinMaxDate2Change}
              onRemove={onMinMaxDate2Remove}
              mask={DatepickerMask.DashedYYYYMMDD}
              variant="outlined"
              label="Min Max date 2"
              id="min-max-date-2"
              name="minMaxDate2"
              height={60}
              minDate={minDate2}
              maxDate={maxDate2}
              error={!minMaxDate2}
            />
            <TextField
              id="min-date-2"
              name="minDate2"
              label="Min date 2"
              value={minDate2}
              variant="outlined"
              onChange={onMinDate2Change}
              onRemove={onMinDate2Remove}
            />
            <TextField
              id="max-date-2"
              name="maxDate2"
              label="Max date 2"
              value={maxDate2}
              variant="outlined"
              onChange={onMaxDate2Change}
              onRemove={onMaxDate2Remove}
            />
          </GridContainer>
        </GridContainer>
      </GridContainer>
    </GridContainer>
  );
};

export default DatepickerTesting;
