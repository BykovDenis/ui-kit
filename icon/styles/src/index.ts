import { IconContext, IconContextConsumer, setFallbackIconConfig } from '@dbykov-ui-kit/icon';

import IconProps from '../../src/types/icon-props';
import initialState from '../data';

// Backwards-compatible bootstrap: older apps call this once at startup and
// mount <ReturnedContext.Provider value={config}>. The returned context is the
// shared IconContext from the main bundle, so the old globalThis path and the
// new useIconContext() path see the same config.
function getNewReactIconContext(iconProps?: IconProps): typeof IconContext {
  setFallbackIconConfig(iconProps || initialState);
  // keep previously published Icon builds working
  // @ts-ignore-next-line
  globalThis.ReactIconContextConsumer = IconContextConsumer;
  return IconContext;
}

export { IconContext };
export default getNewReactIconContext;
