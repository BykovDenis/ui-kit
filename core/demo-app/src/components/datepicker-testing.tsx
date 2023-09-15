import Datepicker from "../../../packages/datepicker/src";
import FlexContainer from "@sber-risks-ui/FormControl";
import { useState } from "react";


const DatepickerTesting = () => {
  const [date, setDate] = useState('2023-08-25');

  const onDateChange = (name: string, value: string) => {
    setDate(value);
  }

  return <FlexContainer width={200} padding="20px 10px"><Datepicker value={date} onChange={onDateChange} mask="yyyy-MM-dd" variant="outlined" label="Datepicker1" id="datepicker1" name="datepicker1" height={60} /></FlexContainer>
}

export default DatepickerTesting;