import { useContext } from 'react';
import themeDark from './themes/theme-dark';
import Sidebar from './components/sidebar';
import GridContainer from '../../packages/grid-container';
import getNewReactThemeContext, { ITheme } from '@sber-risks-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/create-window-notification.css';

type AppProps = {
  children: React.ReactNode;
};

export const ReactThemeContext = getNewReactThemeContext(themeDark);

const App: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const theme: ITheme = useContext(ReactThemeContext);

  const contextClass = {
    success: theme.palette.primary.main,
    error: theme.palette.secondary.main,
    info: theme.palette.baseFontColor,
    warning: theme.palette.secondary.main,
    default: theme.palette.baseFontColor,
    dark: ` '${theme.palette.baseFontColor} font-gray-300'`,
  };

  const context: any = useContext(ReactThemeContext);

  return (
    <>
      <ReactThemeContext.Provider value={themeDark}>
        <ToastContainer
          theme="dark"
          toastClassName={context =>
            contextClass[context?.type || 'default'] +
            ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
          }
          autoClose={10000000}
          position="top-right"
        />
        <GridContainer gridTemplateColumns="250px auto" gap={20}>
          <Sidebar />
          <div style={{ background: context.mainBackgroundColor, height: '100vh', margin: 0 }}>{props.children}</div>
        </GridContainer>
      </ReactThemeContext.Provider>
    </>
  );
};

export default App;
