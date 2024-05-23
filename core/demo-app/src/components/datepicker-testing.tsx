import Datepicker from '../../../packages/datepicker/src';
import FlexContainer from '../../../packages/flex-container/src';
import React, { useContext, useState } from 'react';
import { warning, success } from '../utils/dev-utils-theme';
import Typography from '../../../packages/typography/src';
import isNotEmptyString from '../../../packages/helpers/is-not-empty-string';

const DatepickerTesting = () => {
  const [date, setDate] = useState('2024-04-02');
  const [date1, setDate1] = useState<string | null>(null);
  const [date2, setDate2] = useState<string | null>(null);
  const [date3, setDate3] = useState<string | null>(null);

  const onDateChange = (name: string, value: string) => {
    console.log(value);
    setDate(value);
  };

  const onDate1Change = (name: string, value: string, isValid: boolean) => {
    setDate1(value);
    if (isValid) {
      console.log(success(value));
    } else {
      console.log(warning(value));
    }
  };

  const onDate1Remove = (name: string) => {
    setDate1(null);
    console.log(date1);
  };
  const onDate2Remove = (name: string) => {
    setDate2(null);
    console.log(date2);
  };

  const onDate2Change = (name: string, newDateValue: string, isValid: boolean) => {
    if (isNotEmptyString(newDateValue) && date2 !== newDateValue && !isValid) setDate2(newDateValue);
    if (isValid) {
      console.log(success(newDateValue));
    } else {
      console.log(warning(newDateValue));
    }
  };

  const onDate3Change = (name: string, value: string) => {
    setDate3(value);
  };

  const onDate3Remove = (name: string) => {
    setDate3(null);
  };

  return (
    <FlexContainer width={900} flexDirection="column">
      <Typography variant="H1" textAlign="center">
        Testing Datepickers components
      </Typography>
      <FlexContainer justifyContent="space-between">
        <FlexContainer
          id="datepicker-flex-container"
          marginTop="20px"
          marginBottom={20}
          marginLeft="15px"
          marginRight={17}
          paddingTop={5}
          paddingRight={6}
          paddingBottom={7}
          paddingLeft="8px"
          width={200}
        >
          <Datepicker
            value={date1 as string}
            onBlur={onDate1Change}
            onRemove={onDate1Remove}
            variant="outlined"
            label="Datepicker1 EN"
            id="datepicker1"
            name="datepicker1"
            locale="RU"
            height={60}
            datesContainerAlign="left"
          />
        </FlexContainer>
        <FlexContainer width={200} margin="20px 10px">
          <Datepicker
            value={date2 as string}
            onBlur={onDate2Change}
            onRemove={onDate2Remove}
            mask="yyyy-MM-dd"
            variant="outlined"
            label="Datepicker2 EN"
            id="datepicker2"
            name="datepicker1"
            height={60}
          />
        </FlexContainer>
        <FlexContainer width={200} margin="20px 10px">
          <Datepicker
            value={date3 as string}
            onChange={onDate3Change}
            onRemove={onDate3Remove}
            mask="dd.MM.yyyy"
            variant="outlined"
            label="Datepicker3"
            id="datepicker3"
            name="datepicker3"
            height={60}
            minDate="24.04.2024"
            maxDate="24.04.2024"
          />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default DatepickerTesting;
