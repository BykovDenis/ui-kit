import { useContext } from "react";
import themeDark from "../themes/theme-dark";
import iconConfig from "../themes/icon-config";
import Sidebar from "./sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/create-window-notification.css";
// local components
// import getNewReactIconContext from "../../../icon/styles/src";
// import GridContainer from "../../../core/packages/grid-container/src";
import getNewReactThemeContext from "../../../core/packages/styles/src";
import ITheme from "../../../core/packages/styles/types/itheme";
// components from package library
import getNewReactIconContext from "@sber-risks-ui/icon/styles";
import GridContainer from "@sber-risks-ui/core/grid-container";
// import getNewReactThemeContext, { ITheme } from "@sber-risks-ui/core/styles";

type AppProps = {
  children: React.ReactNode;
};

export const ReactThemeContext = getNewReactThemeContext(themeDark);
export const ReactIconContext = getNewReactIconContext(iconConfig);

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
        <ReactIconContext.Provider value={iconConfig}>
          <ToastContainer
            theme="dark"
            toastClassName={(context) =>
              contextClass[context?.type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            autoClose={10000000}
            position="top-right"
          />
          <GridContainer gridTemplateColumns="250px auto" gap={20}>
            <Sidebar />
            <div
              style={{
                background: context.mainBackgroundColor,
                height: "100vh",
                margin: 0,
              }}
            >
              {props.children}
            </div>
          </GridContainer>
        </ReactIconContext.Provider>
      </ReactThemeContext.Provider>
    </>
  );
};

export default App;
