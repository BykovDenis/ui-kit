import React, { Fragment, FunctionComponent } from 'react';

interface IRiskiReactUIProvider {
  children: React.ReactNode;
}

const RiskiReactUiProvider: FunctionComponent<IRiskiReactUIProvider> = (props: IRiskiReactUIProvider) => {
  return <Fragment>{props.children}</Fragment>;
};

export default React.memo(RiskiReactUiProvider);
