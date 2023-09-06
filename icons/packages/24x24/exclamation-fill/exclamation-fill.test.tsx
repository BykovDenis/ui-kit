import TestRenderer from 'react-test-renderer';

import ExclamationFillIcon from './index';

describe('Test ExclamationFillIcon', () => {
  test('ExclamationFillIcon', () => {
    const testRenderer = TestRenderer.create(<ExclamationFillIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
