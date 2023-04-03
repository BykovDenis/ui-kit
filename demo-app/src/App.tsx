import './App.css';
import Datepicker from '../../packages/datepicker/src';
import { useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import Locale from '../../packages/enums/locale';

function App() {
  const [dateValue, setDateValue] = useState<string>('2023-03-05');

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

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <div className="App">
      <ReactThemeContext.Provider value={themes.dark}>
        <Datepicker
          label="Some date"
          locale={Locale.Ru}
          name="some-date"
          id="some-date"
          value={dateValue}
          onChange={onDatepickerValueChange}
          onRemove={onDateRemove}
          minDate="03.03.2023"
          maxDate="11.03.2023"
          mask="YYYYMMDD"
        />
      </ReactThemeContext.Provider>
    </div>
  );
}

export default App;
