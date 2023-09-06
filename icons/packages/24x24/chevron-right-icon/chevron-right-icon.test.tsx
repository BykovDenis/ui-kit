import TestRenderer from 'react-test-renderer';

import ChevronRightIcon from './index';

describe('Test ChevronRightIcon', () => {
  test('ChevronRightIcon', () => {
    const testRenderer = TestRenderer.create(<ChevronRightIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
