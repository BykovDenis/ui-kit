import IconProps from './types/icon-props';
import SizeMap from './enums/size-map';
import React, { useId } from 'react';
import getPathname from './helpers/get-pathname';
import { useIconContext } from './icon-context';

const Icon: React.FunctionComponent<IconProps> = ({ name, size = 'm', pathname }: IconProps) => {
  const iconConfig = useIconContext();

  const filterId: string = useId();
  const actualSize: number = Number(SizeMap[size]);

  const nameParsed: string | undefined = name || iconConfig?.name;
  const href: string = iconConfig
    ? `${getPathname(iconConfig.pathname, size)}${nameParsed}.svg`
    : `${pathname}${name}.svg`;

  return (
    <svg width={actualSize} height={actualSize}>
      <filter id={filterId}>
        <feFlood floodColor="currentColor" />
        <feComposite in2="SourceAlpha" operator="in" />
      </filter>
      <image width={actualSize} height={actualSize} href={href} filter={`url(#${filterId})`} />
    </svg>
  );
};

export {
  default as IconContext,
  IconProvider,
  IconContextConsumer,
  useIconContext,
  setFallbackIconConfig,
} from './icon-context';
export default Icon;
