import IconProps from './types/icon-props';
import SizeMap from './enums/size-map';
import React, { useId, useState, useEffect } from 'react';

const Icon: React.FunctionComponent<IconProps> = ({ name, size = 'm', pathname }: IconProps) => {
  // @ts-ignore-next-line
  const [Consumer, setConsumer] = useState(globalThis?.ReactIconContextConsumer);

  useEffect(() => {
    // @ts-ignore-next-line
    setConsumer(globalThis.ReactIconContextConsumer);
    // @ts-ignore-next-line
  }, [globalThis.ReactIconContextConsumer]);

  const filterId: string = useId();
  const currentSize: number = Number(SizeMap[size]);

  if (Consumer) {
    const iconComponentWrapped: any = (iconProps: IconProps): any => {
      const nameParsed: string | undefined = name || iconProps.name;
      const pathnameParsed: string = pathname || iconProps.pathname;

      return (
        <>
          <svg width={currentSize} height={currentSize}>
            <filter id={filterId}>
              <feFlood floodColor="currentColor" />
              <feComposite in2="SourceAlpha" operator="in" />
            </filter>
            <image
              width={currentSize}
              height={currentSize}
              href={`${pathnameParsed}${nameParsed}.svg`}
              filter={`url(#${filterId})`}
            />
          </svg>
        </>
      );
    };

    return <Consumer>{iconComponentWrapped}</Consumer>;
  } else {
    console.log('globalThis?.ReactIconContextConsumer not found');

    return (
      <>
        <svg width={currentSize} height={currentSize}>
          <filter id={filterId}>
            <feFlood floodColor="currentColor" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
          <image
            width={currentSize}
            height={currentSize}
            href={`${pathname}${name}.svg`}
            filter={`url(#${filterId})`}
          />
        </svg>
      </>
    );
  }
};

export default Icon;
