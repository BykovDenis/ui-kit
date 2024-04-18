import { useContext } from 'react';
import getNewReactThemeContext from '../../packages/styles/src';
import themeDark from './themes/theme-dark';
import InputTesting from './components/input-testing';
import TextFieldTesting from './components/text-field-testing';
// import Select from '../../packages/select/src';
import SelectTesting from './components/select-testing';
// import GridContainer from '../../packages/grid-container/src';
// import GridContainerTesting from './components/grid-container-testing';
// import MultiSelectTesting from './components/multi-select-testing';
import DatepickerTesting from './components/datepicker-testing';
import Sidebar from './components/sidebar';
// import JsonToTable from './components/json-to-table';
// import ReactContext from './components/react-context';
// import FlexContainerTesting from './components/flex-container-testing';
// import FileUploaderTesting from './components/file-uploader-testing';
import GridContainer from '../../packages/grid-container/src';

type AppProps = {
  children: React.ReactNode;
};

export const ReactThemeContext = getNewReactThemeContext(themeDark);

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const context: any = useContext(ReactThemeContext);

  return (
    <>
      <ReactThemeContext.Provider value={themeDark}>
        <GridContainer gridTemplateColumns="250px auto" gap={20}>
          <Sidebar />
          <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>
            {props.children}
            {/*<ReactContext />*/}
            {/*<JsonToTable />*/}
            {/*<DatepickerTesting />*/}
            {/*<SelectTesting />*/}
            {/*<InputTesting />*/}
            {/*<TextFieldTestin g />*/}
            {/*<GridContainerTesting />*/}
            {/*<MultiSelectTesting />*/}
            {/*<FlexContainerTesting />*/}
            {/*<FileUploaderTesting />*/}
          </div>
        </GridContainer>
      </ReactThemeContext.Provider>
    </>
  );
};

export default App;
