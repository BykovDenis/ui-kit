import getNewReactIconContext from './index';
import IconProps from '../../src/types/icon-props';

declare const ReactIconContextConsumer;
declare const iconProps: IconProps;

export { iconProps, ReactIconContextConsumer };
export default getNewReactIconContext;
