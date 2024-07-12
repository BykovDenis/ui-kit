import { useContext } from 'react';
import themeDark from './themes/theme-dark';
import Sidebar from './components/sidebar';
import GridContainer from '../../packages/grid-container';
import getNewReactThemeContext from "@sber-risks-ui/core/styles";

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
          </div>
        </GridContainer>
      </ReactThemeContext.Provider>
    </>
  );
};

export default App;
