import React from 'react';

import IconProps from '../../src/types/icon-props';

declare const IconContext: React.Context<IconProps>;
declare function getNewReactIconContext(iconProps?: IconProps): typeof IconContext;

export { IconContext, IconProps };
export default getNewReactIconContext;
