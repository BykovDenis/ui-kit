import Datepicker from "../../../packages/datepicker/src";
import FlexContainer from "../../../packages/flex-container/src";
import { useContext, useState } from "react";


const DatepickerTesting = () => {
  const [date, setDate] = useState('2023-08-25');
  const [date1, setDate1] = useState('25.08.2023');
  const [date2, setDate2] = useState<string | null>('2023-08-25');
  const [date3, setDate3] = useState('25.08.2023');

  const onDateChange = (name: string, value: string) => {
    setDate(value);
  }

  const onDate1Change = (name: string, value: string) => {
    setDate1(value);
  }

  const onDateRemove = (name: string) => {
    if (name === 'datepicker2') {
      setDate2(null);
    }
  }
  const onDate2Change = (name: string, value: string) => {
    setDate2(value);
  }

  const onDate3Change = (name: string, value: string) => {
    setDate3(value);
  }


  return (
    <FlexContainer justifyContent="flex-start">
      <FlexContainer width={250}  margin="20px 10px"><Datepicker isNotClearable={true} value={date} onChange={onDateChange} mask="yyyy-MM-dd" variant="outlined" label="Datepicker1 EN" id="datepicker1" name="datepicker1" locale="EN" height={60} /></FlexContainer>
      <FlexContainer width={250}  margin="20px 10px"><Datepicker value={date1} onRemove={onDateRemove} onChange={onDate1Change} mask="dd.MM.yyyy" variant="outlined" label="Datepicker2 RU" id="datepicker2" name="datepicker2" locale="RU" height={60} /></FlexContainer>
      <FlexContainer width={250}  margin="20px 10px"><Datepicker value={date2} onChange={onDate2Change} mask="yyyy-MM-dd" variant="outlined" label="Datepicker1 RU" id="datepicker3" name="datepicker1" locale="RU" height={60} /></FlexContainer>
      <FlexContainer width={250}  margin="20px 10px"><Datepicker value={date3} onChange={onDate3Change} mask="dd.MM.yyyy" variant="outlined" label="Datepicker2 locale undefined" id="datepicker4" name="datepicker2" height={60} /></FlexContainer>
    </FlexContainer>)
}

export default DatepickerTesting;