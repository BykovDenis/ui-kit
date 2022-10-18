import React from 'react';
import ITheme from '../types/itheme';
import { themes } from './themes';

function getNewReactThemeContext(theme?: ITheme): { Consumer: any, Provider: any }  {
  const ReactThemeContext: any = React.createContext(theme || themes.loanPricing);
  globalThis.ReactThemeContextConsumer = <any>ReactThemeContext.Consumer;
  return ReactThemeContext;
}

export default getNewReactThemeContext;

