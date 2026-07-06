import isPropValid from '@emotion/is-prop-valid';
// named import, not default: under native node ESM (SSR) the default
// resolves to the CJS exports object instead of the styled function
import { styled as baseStyled } from 'styled-components';

// Style props (backgroundColor, isOpen, focusColor, ...) share the prop bag
// with real DOM attributes across the library, so without a filter every
// styled tag leaks them into the HTML and React logs an error for each one.
// Filter props on plain tags down to valid DOM attributes; composed
// components keep receiving everything.
const shouldForwardProp = (prop: string, target: unknown): boolean =>
  typeof target !== 'string' || isPropValid(prop);

const withFilter = (construct: any) => construct.withConfig({ shouldForwardProp });

// One wrapper instead of .withConfig on all ~70 styled declarations:
// styled.div`...` goes through the get trap, styled(Component)`...` through apply.
const styled: typeof baseStyled = new Proxy(baseStyled, {
  apply: (target, _thisArg, args: unknown[]) => withFilter((target as any)(...args)),
  get: (target, key, receiver) => {
    const value = Reflect.get(target, key, receiver);
    return typeof value === 'function' && (value as any).withConfig ? withFilter(value) : value;
  },
}) as typeof baseStyled;

export default styled;
