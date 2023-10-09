import { useContext, useState } from 'react';
import getNewReactThemeContext from '@sber-risks-ui/styles/src';
import { themes } from '@sber-risks-ui/styles/src/themes';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';
// import Select from '../../packages/select/src';
import SelectTesting from './components/select-testing';
import GridContainer from '../../packages/grid-container/src';
import GridContainerTesting from './components/grid-container-testing';
import MultiSelectTesting from './components/multi-select-testing';
import DatepickerTesting from './components/datepicker-testing';
import JsonToTable from './components/json-to-table';

function App() {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  const context: any = useContext(ReactThemeContext);

  return (
    <>
      <ReactThemeContext.Provider value={themes.light}>
        <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
          {/*<JsonToTable />*/}
          {/*<DatepickerTesting />*/}
          {/*<SelectTesting />*/}
          {/*<InputTesting />*/}
          {/*<TextFieldTesting />*/}
          {/*<GridContainerTesting />*/}
          <MultiSelectTesting />
        </div>
      </ReactThemeContext.Provider>
    </>
  );
}

export default App;
