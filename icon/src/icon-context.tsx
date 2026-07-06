import React from 'react';

import IconProps from './types/icon-props';

// Single shared context: the styles bundle imports this module from the main
// bundle, so one instance serves both entry points of the package.
const IconContext = React.createContext<IconProps | null>(null);
IconContext.displayName = 'UiKitIconContext';

// Config used when Icon renders without an IconProvider above it (legacy
// setups that only call getNewReactIconContext at bootstrap).
let fallbackConfig: IconProps | null = null;

export function setFallbackIconConfig(config: IconProps): void {
  fallbackConfig = config;
}

export const IconProvider = IconContext.Provider;

export function useIconContext(): IconProps | null {
  return React.useContext(IconContext) ?? fallbackConfig;
}

// Render-prop consumer kept for previously published Icon builds that read
// globalThis.ReactIconContextConsumer.
export function IconContextConsumer(props: {
  children: (config: IconProps | null) => React.ReactNode;
}): React.ReactElement {
  return <>{props.children(useIconContext())}</>;
}

export default IconContext;
