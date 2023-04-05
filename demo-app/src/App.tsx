import Datepicker from '../../packages/datepicker/src';
import { useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import Locale from '../../packages/enums/locale';
import Select from '../../packages/select/src';
import IOption from '../../packages/select/types/ioption';
import FormControl from '../../packages/form-control/src';

function App() {
  const [dateValue, setDateValue] = useState<string>('2023-03-05');
  const [value, setValue] = useState<string>('One');

  const onDatepickerValueChange = (name: string, value: string, isValid: boolean) => {
    console.log(value);
    if (isValid) {
      setDateValue(value);
    } else {
      console.log('Ошибка');
    }
  };

  const onDateRemove = () => {
    setDateValue(null);
    console.log('дата очищена');
  };

  const onValueSelectChange = (option: IOption) => {
    setValue(option.value);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const elements: Array<string> = ['One', 'Two', 'Three', 'Four'];

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <FormControl>
        <Datepicker
          label="Some date"
          locale={Locale.Ru}
          name="some-date"
          id="some-date"
          value={dateValue}
          onChange={onDatepickerValueChange}
          onRemove={onDateRemove}
          minDate="2023-03-02"
          maxDate="2023-03-11"
          mask="YYYYMMDD"
        />
      </FormControl>
      <Select id="some-list" name="some-list" activeElement={value} elements={elements} />
    </ReactThemeContext.Provider>
  );
}

export default App;
