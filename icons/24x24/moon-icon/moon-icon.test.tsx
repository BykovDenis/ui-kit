import TestRenderer from 'react-test-renderer';

import MoonIcon from './index';

describe('Test MoonIcon', () => {
  test('MoonIcon', () => {
    const testRenderer = TestRenderer.create(<MoonIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
