import Datepicker from '../../../packages/datepicker/src';
import FlexContainer from '../../../packages/flex-container/src';
import FormControl from '../../../packages/form-control/src';
import { useContext, useState } from 'react';

const DatepickerTesting = () => {
  const [date, setDate] = useState('2023-11-20');
  const [date1, setDate1] = useState('25.11.2023');
  const [date2, setDate2] = useState<string>('2023-10-25');
  const [date3, setDate3] = useState('25.10.2023');

  const onDateChange = (name: string, value: string) => {
    console.log(value);
    setDate(value);
  };

  const onDate1Change = (name: string, value: string, isValid: boolean) => {
    if (isValid) {
      setDate1(value);
    }
  };

  const onDateRemove = (name: string) => {
    if (name === 'datepicker2') {
      setDate2(null);
    }
  };
  const onDate2Change = (name: string, value: string) => {
    setDate2(value);
  };

  const onDate3Change = (name: string, value: string) => {
    setDate3(value);
  };

  return (
    <FlexContainer justifyContent="flex-start">
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
        >
          <Datepicker
            value={date1}
            onRemove={onDateRemove}
            onChange={onDate1Change}
            mask="dd.MM.yyyy"
            variant="outlined"
            label="Datepicker2 RU"
            id="datepicker2"
            name="datepicker2"
            locale="EN"
            minDate="15.10.2023"
            maxDate="15.11.2024"
            width="98%"
            datesContainerAlign="left"
          />
        </FormControl>
      </FlexContainer>
      {/*<FlexContainer width={250} margin="20px 10px">*/}
      {/*  <Datepicker*/}
      {/*    value={date2}*/}
      {/*    onChange={onDate2Change}*/}
      {/*    mask="yyyy-MM-dd"*/}
      {/*    variant="outlined"*/}
      {/*    label="Datepicker1 RU"*/}
      {/*    id="datepicker3"*/}
      {/*    name="datepicker1"*/}
      {/*    locale="RU"*/}
      {/*    height={60}*/}
      {/*  />*/}
      {/*</FlexContainer>*/}
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
