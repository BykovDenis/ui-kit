import TestRenderer from 'react-test-renderer';

import ErasorIcon from './index';

describe('Test ErasorIcon', () => {
  test('ErasorIcon', () => {
    const testRenderer = TestRenderer.create(<ErasorIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
