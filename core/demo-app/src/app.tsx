import { useContext } from 'react';
import getNewReactThemeContext from '../../packages/styles/src';
import themeDark from './themes/theme-dark';
// import InputTesting from './components/input-testing';
// import TextFieldTesting from './components/text-field-testing';
// import Select from '../../packages/select/src';
// import SelectTesting from './components/select-testing';
// import GridContainer from '../../packages/grid-container/src';
// import GridContainerTesting from './components/grid-container-testing';
// import MultiSelectTesting from './components/multi-select-testing';
import DatepickerTesting from './components/datepicker-testing';
// import JsonToTable from './components/json-to-table';
// import ReactContext from './components/react-context';
// import FlexContainerTesting from './components/flex-container-testing';
import FileUploaderTesting from './components/file-uploader-testing';

function App() {
  const ReactThemeContext = getNewReactThemeContext(themeDark);
  const context: any = useContext(ReactThemeContext);

  return (
    <>
      <ReactThemeContext.Provider value={themeDark}>
        <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
          {/*<ReactContext />*/}
          {/*<JsonToTable />*/}
          <DatepickerTesting />
          {/*<SelectTesting />*/}
          {/*<InputTesting />*/}
          {/*<TextFieldTesting />*/}
          {/*<GridContainerTesting />*/}
          {/*<MultiSelectTesting />*/}
          {/*<FlexContainerTesting />*/}
          {/*<FileUploaderTesting />*/}
        </div>
      </ReactThemeContext.Provider>
    </>
  );
}

export default App;
