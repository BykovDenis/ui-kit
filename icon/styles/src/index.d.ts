import React from 'react';

import IconProps from '../../src/types/icon-props';

declare const IconContext: React.Context<IconProps>;
/**
 * @deprecated Mount `<IconProvider value={config}>` (exported from
 * `@dbykov-ui-kit/icon`) at the application root instead. This shim (and the
 * globalThis registry it maintains) will be removed in @dbykov-ui-kit/icon 2.0.0.
 */
declare function getNewReactIconContext(iconProps?: IconProps): typeof IconContext;

export { IconContext, IconProps };
export default getNewReactIconContext;
