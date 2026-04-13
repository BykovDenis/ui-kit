import IconProps from '../../src/types/icon-props';
import initialState from '../data';
import React from 'react';

function getNewReactIconContext(iconProps?: IconProps): { Consumer: any; Provider: any } {
  const ReactIconContext: any = React.createContext(iconProps || initialState);
  // @ts-ignore-next-line
  globalThis.ReactIconContextConsumer = ReactIconContext.Consumer;
  return ReactIconContext;
}

export default getNewReactIconContext;
