import { useContext, useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import Select from '../../packages/select/src';
import IOption from '../../packages/select/types/ioption';
import FormControl from '../../packages/form-control/src';

function App() {
  const [dateValue, setDateValue] = useState<string>('11.05.2022');
  const [value, setValue] = useState<number>(50);

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

  const elementsEmpty: Array<number> = new Array(150).fill(0);
  const elements: Array<string> = elementsEmpty.map((element: number, index: number) => `${index}`);

  const context: any = useContext(ReactThemeContext);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
        <FormControl padding="10px" width="350px">
          {/*<Datepicker*/}
          {/*  label="Some date"*/}
          {/*  locale={Locale.Ru}*/}
          {/*  name="some-date"*/}
          {/*  id="some-date"*/}
          {/*  value={dateValue}*/}
          {/*  onChange={onDatepickerValueChange}*/}
          {/*  onRemove={onDateRemove}*/}
          {/*/>*/}
          <Select id="some-list" name="some-list" activeElement={value} elements={elements} variant="outlined" />
        </FormControl>
      </div>
    </ReactThemeContext.Provider>
  );
}

export default App;
