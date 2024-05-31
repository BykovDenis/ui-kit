import IconProps from './types/icon-props';
import SizeMap from './enums/size-map';
import { useId } from 'react';

const Icon: React.FunctionComponent<IconProps> = ({ name, size = 'm' }: IconProps) => {
  const filterId: string = useId();
  const currentSize: number = SizeMap[size];

  return (
    <>
      <svg width={currentSize} height={currentSize}>
        <filter id={filterId}>
          <feFlood floodColor="currentColor" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
        <image width={currentSize} height={currentSize} href={`./img/24/${name}.svg`} filter={`url(#${filterId})`} />
      </svg>
    </>
  );
};

export default Icon;
