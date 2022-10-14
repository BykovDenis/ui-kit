import ITheme from '../types/itheme';
import React from 'react';
import {themes} from './themes';

let ReactConsumer: any;

function getNewContext(theme?: ITheme): { Consumer: any, Provider: any }  {
  const ReactThemeContext: any = React.createContext(theme || themes.loanPricing);
  ReactConsumer = <any>ReactThemeContext.Consumer;
  return ReactThemeContext;
}

export { ReactConsumer };

export default getNewContext;
