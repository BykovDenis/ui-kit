import Datepicker from '../../../packages/datepicker/src';
import FlexContainer from '../../../packages/flex-container/src';
import FormControl from '../../../packages/form-control/src';
import { useContext, useState } from 'react';
import { warning, success } from '../utils/dev-utils-theme';

const DatepickerTesting = () => {
  const [date, setDate] = useState('2024-04-02');
  const [date1, setDate1] = useState('2024-04-02');
  const [date2, setDate2] = useState<string>('2024-04-02');
  const [date3, setDate3] = useState('25.10.2023');

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

  const onDate2Change = (name: string, value: string) => {
    setDate2(value);
    console.log(success(value));
  };

  const onDate3Change = (name: string, value: string) => {
    setDate3(value);
  };

  return (
    <FlexContainer justifyContent="flex-start" width={500}>
      <FlexContainer
        id="datepicker-flex-container"
        width={250}
        marginTop="20px"
        marginBottom={20}
        marginLeft="15px"
        marginRight={17}
        paddingTop={5}
        paddingRight={6}
        paddingBottom={7}
        paddingLeft="8px"
      >
        <FormControl
          marginTop="30px"
          marginBottom={28}
          marginLeft="20px"
          marginRight={45}
          paddingTop={1}
          paddingRight={2}
          paddingBottom={3}
          paddingLeft="4px"
          width={200}
          margin="20px 10px"
        >
          <Datepicker
            value={date1}
            onBlur={onDate1Change}
            onRemove={onDate1Remove}
            mask="yyyy-MM-dd"
            variant="outlined"
            label="Datepicker2 EN"
            id="datepicker1"
            name="datepicker1"
            locale="RU"
            width="200px"
            height={60}
            datesContainerAlign="left"
          />
        </FormControl>
      </FlexContainer>
      <FlexContainer width={200} margin="20px 10px">
        <Datepicker
          value={date2}
          onChange={onDate2Change}
          onRemove={onDate2Remove}
          mask="yyyy-MM-dd"
          variant="outlined"
          label="Datepicker1 EN"
          id="datepicker3"
          name="datepicker1"
          locale="RU"
          height={60}
        />
      </FlexContainer>
      {/*<FlexContainer width={250} margin="20px 10px">*/}
      {/*  <Datepicker*/}
      {/*    value={date3}*/}
      {/*    onChange={onDate3Change}*/}
      {/*    mask="dd.MM.yyyy"*/}
      {/*    variant="outlined"*/}
      {/*    label="Datepicker2 locale undefined"*/}
      {/*    id="datepicker4"*/}
      {/*    name="datepicker2"*/}
      {/*    height={60}*/}
      {/*    width={110}*/}
      {/*  />*/}
      {/*</FlexContainer>*/}
    </FlexContainer>
  );
};

export default DatepickerTesting;
