import React from 'react';
import { ITheme } from 'styles/dist';
import { themes } from './themes';


let ReactThemeContextConsumer: any;

function getNewReactThemeContext(theme?: ITheme): { Consumer: any, Provider: any }  {
  const ReactThemeContext: any = React.createContext(theme || themes.loanPricing);
  ReactThemeContextConsumer = <any>ReactThemeContext.Consumer;
  return ReactThemeContext;
}

export { ReactThemeContextConsumer };

export default getNewReactThemeContext;

