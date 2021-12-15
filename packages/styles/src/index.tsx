import React, { FunctionComponent } from 'react';

import ThemeContext, { themes } from './themes';

interface IRiskiReactUIProvider {
  children?: React.ReactNode;
  value?: any;
}

const SberRiskiReactUiProvider: FunctionComponent<IRiskiReactUIProvider> = (props: IRiskiReactUIProvider) => (<ThemeContext.Provider value={props.value}>{React.cloneElement(props.children as React.ReactElement<any>, { ...props, ReactThemeContext: ThemeContext } ) }</ThemeContext.Provider>);

SberRiskiReactUiProvider.defaultProps = {
  value: themes.dark,
};

export default React.memo(SberRiskiReactUiProvider);
