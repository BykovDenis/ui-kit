import { useContext, useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import InputTesting from "./components/input-testing";
import TextFieldTesting from "./components/text-field-testing";

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

  const elementsEmpty: Array<number> = new Array(150).fill(0);
  // const elements: Array<string> = elementsEmpty.map((element: number, index: number) => `${index}`);

  const context: any = useContext(ReactThemeContext);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
        <InputTesting />
        <TextFieldTesting />
      </div>
    </ReactThemeContext.Provider>
  );
}

export default App;
