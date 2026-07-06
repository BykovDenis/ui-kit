# CHANGELOG

## v 0.0.1
### Features
- Create Icon component

## v 0.0.2
### Features
- Create Icon component Provider
- Add dynamic pathname for icons source
- Add small size

## v 1.0.0
### Features
- Stability version

## v 1.0.2
### Features
- Publish different esm/cjs

## v 1.1.0
### Features
- Icon config migrated from `globalThis` to a shared React Context: new exports
  `IconProvider`, `useIconContext`, `IconContextConsumer`, `setFallbackIconConfig`
- `getNewReactIconContext` kept as a backwards-compatible shim: existing
  bootstrap code and previously published bundles keep working unchanged
- The `./styles` bundle imports the shared `IconContext` from the main bundle,
  so both entry points see a single context instance
