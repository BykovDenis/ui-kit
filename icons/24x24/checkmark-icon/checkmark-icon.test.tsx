import TestRenderer from 'react-test-renderer';

import CheckmarkIcon from './index';

describe('Test CheckmarkIcon', () => {
  test('CheckmarkIcon', () => {
    const testRenderer = TestRenderer.create(<CheckmarkIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
