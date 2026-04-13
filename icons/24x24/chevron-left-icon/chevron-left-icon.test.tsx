import TestRenderer from 'react-test-renderer';

import ChevronLeftIcon from './index';

describe('Test ChevronLeftIcon', () => {
  test('ChevronLeftIcon', () => {
    const testRenderer = TestRenderer.create(<ChevronLeftIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
