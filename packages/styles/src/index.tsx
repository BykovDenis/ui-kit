import React, { FunctionComponent } from 'react';
import IRiskiReactUIProvider from '../types/iriski-react-ui-provider';
import ThemeContext, { themes } from './themes';



const SberRiskiReactUiProvider: FunctionComponent<IRiskiReactUIProvider> = (props: IRiskiReactUIProvider) => (<ThemeContext.Provider value={props.value}>{React.cloneElement(props.children as React.ReactElement<any>, { ...props, ReactThemeContext: ThemeContext } ) }</ThemeContext.Provider>);

SberRiskiReactUiProvider.defaultProps = {
  value: themes.dark,
};

export { ThemeContext, themes };
export default React.memo(SberRiskiReactUiProvider);
