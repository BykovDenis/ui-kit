import { useContext, useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';
import Select from '../../packages/select/src';

function App() {
  const [dateValue, setDateValue] = useState<string>('11.05.2022');
  const [value, setValue] = useState<number>(null);

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

  // const onValueSelectChange = (option: IOption) => {
  //   setValue(option.value);
  // };

  const onInputChange = (evt: any) => {
    setValue(evt.target?.value);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const elementsState: Array<{ label: string; value: string }> = [
    { label: 'Январь', value: '0' },
    { label: 'Февраль', value: '1' },
    { label: 'Март', value: '2' },
    { label: 'Апрель', value: '3' },
    { label: 'Май', value: '4' },
    { label: 'Июнь', value: '5' },
    { label: 'Июль', value: '6' },
    { label: 'Август', value: '7' },
    { label: 'Сентябрь', value: '8' },
    { label: 'Октябрь', value: '9' },
    { label: 'Ноябрь', value: '10' },
    { label: 'Декабрь', value: '11' },
  ];

  const context: any = useContext(ReactThemeContext);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
        <InputTesting />
        <TextFieldTesting />
        <Select
          id="some-select"
          name="some-select"
          elements={elementsState}
          activeELement={{ label: 'Сентябрь', value: '8' }}
        />
      </div>
    </ReactThemeContext.Provider>
  );
}

export default App;
