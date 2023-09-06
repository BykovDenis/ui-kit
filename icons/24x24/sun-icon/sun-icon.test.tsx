import TestRenderer from 'react-test-renderer';

import SunIcon from './index';

describe('Test SunIcon', () => {
  test('SunIcon', () => {
    const testRenderer = TestRenderer.create(<SunIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
