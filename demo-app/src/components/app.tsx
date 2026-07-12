import themeDark from '../themes/theme-dark';
import iconConfig from '../themes/icon-config';
import Sidebar from './sidebar';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/create-window-notification.css';
// components from package library
import {IconProvider} from '@dbykov-ui-kit/icon';
import GridContainer from '@dbykov-ui-kit/core/grid-container';
import {ThemeProvider, useTheme} from '@dbykov-ui-kit/core/styles';

type AppProps = {
  children: React.ReactNode;
};

// reads the theme below the provider — the recommended consumer pattern
const AppLayout: React.FunctionComponent<AppProps> = (props: AppProps) => {
  const theme = useTheme();

  return (
    <>
      <ToastContainer
        theme="dark"
        draggable={true}
        autoClose={10000000}
        position="top-right"
      />
      <GridContainer gridTemplateColumns="250px auto" gap={20}>
        <Sidebar/>
        <div
          style={{
            background: theme.mainBackgroundColor,
            height: '100vh',
            margin: 0,
          }}
        >
          {props.children}
        </div>
      </GridContainer>
    </>
  );
};

const App: React.FunctionComponent<AppProps> = (props: AppProps) => (
  <ThemeProvider value={themeDark}>
    <IconProvider value={iconConfig}>
      <AppLayout>{props.children}</AppLayout>
    </IconProvider>
  </ThemeProvider>
);

export default App;
