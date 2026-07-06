import IconProps from './types/icon-props';
import Pathname from './types/pathname';
import React from 'react';

declare const Icon: React.FunctionComponent<IconProps>;
declare const IconContext: React.Context<IconProps | null>;
declare const IconProvider: React.Provider<IconProps | null>;
declare function useIconContext(): IconProps | null;
declare function setFallbackIconConfig(config: IconProps): void;
declare function IconContextConsumer(props: {
  children: (config: IconProps | null) => React.ReactNode;
}): React.ReactElement;

export { IconProps, Pathname, IconContext, IconProvider, IconContextConsumer, useIconContext, setFallbackIconConfig };
export default Icon;
