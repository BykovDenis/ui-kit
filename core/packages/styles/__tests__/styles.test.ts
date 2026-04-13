import getNewReactThemeContext from '../src';
import { themes } from '../src/themes';

describe('styles context', () => {
  test('creates theme context and stores globals', () => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    expect(ReactThemeContext.Provider).toBeDefined();
    expect(ReactThemeContext.Consumer).toBeDefined();
    expect(globalThis.ReactThemeContext).toBeDefined();
    expect(globalThis.ReactThemeContextConsumer).toBeDefined();
  });

  test('uses light theme by default', () => {
    const ReactThemeContext = getNewReactThemeContext();

    expect(ReactThemeContext).toBeDefined();
    expect(themes.light.palette.primary.main).toBe('rgb(139, 88, 203)');
  });
});
