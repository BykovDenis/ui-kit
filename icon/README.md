# @dbykov-ui-kit/icon

Icon component for React. Renders SVG files by name from a configurable
directory (the application hosts the SVG assets itself).

## Getting started

```
npm i @dbykov-ui-kit/icon
```

Mount the provider at the application root with the path config:

```tsx
import Icon, { IconProvider } from '@dbykov-ui-kit/icon';

const iconConfig = {
  name: 'image',
  size: 'm',
  pathname: { sm: './img/16/', m: './img/24/', lg: './img/36/' },
};

<IconProvider value={iconConfig}>
  <App />
</IconProvider>;

// anywhere below:
<Icon name="calendar" size="m" color="#333" />;
```

`useIconContext()` exposes the active config to your own components.

## Legacy bootstrap (deprecated)

```tsx
// deprecated — use <IconProvider> instead
import getNewReactIconContext from '@dbykov-ui-kit/icon/styles';

export const ReactIconContext = getNewReactIconContext(iconConfig);

<ReactIconContext.Provider value={iconConfig}>
  <App />
</ReactIconContext.Provider>;
```

Still works (the returned context **is** the shared `IconContext`), but the
shim will be removed in `@dbykov-ui-kit/icon` 2.0.0.
