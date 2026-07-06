import React from 'react';

import IconProps from './types/icon-props';

// Config used when Icon renders without an IconProvider above it (legacy
// setups that only call getNewReactIconContext at bootstrap).
let fallbackConfig: IconProps | null = null;

export function setFallbackIconConfig(config: IconProps): void {
  fallbackConfig = config;
}

// The old getNewReactIconContext created the context with the app's config as
// its default value, so apps read it via useContext without ever mounting a
// Provider. The default is fixed at creation time, before the app hands us its
// config — this proxy keeps that pattern working by forwarding property reads
// to whatever the fallback config currently is.
const defaultIconValue = new Proxy({} as IconProps, {
  get: (_target, prop) => (fallbackConfig ? Reflect.get(fallbackConfig, prop) : undefined),
  has: (_target, prop) => (fallbackConfig ? Reflect.has(fallbackConfig, prop) : false),
  ownKeys: () => (fallbackConfig ? Reflect.ownKeys(fallbackConfig) : []),
  getOwnPropertyDescriptor: (_target, prop) => {
    const descriptor = fallbackConfig && Reflect.getOwnPropertyDescriptor(fallbackConfig, prop);
    return descriptor ? { ...descriptor, configurable: true } : undefined;
  },
});

// Single shared context: the styles bundle imports this module from the main
// bundle, so one instance serves both entry points of the package.
const IconContext = React.createContext<IconProps>(defaultIconValue);
IconContext.displayName = 'UiKitIconContext';

export const IconProvider = IconContext.Provider;

export function useIconContext(): IconProps | null {
  const config = React.useContext(IconContext);
  return config == null || config === defaultIconValue ? fallbackConfig : config;
}

// Render-prop consumer kept for previously published Icon builds that read
// globalThis.ReactIconContextConsumer.
export function IconContextConsumer(props: {
  children: (config: IconProps | null) => React.ReactNode;
}): React.ReactElement {
  return <>{props.children(useIconContext())}</>;
}

export default IconContext;
