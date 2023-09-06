import TestRenderer from 'react-test-renderer';

import RemoveIcon from './index';

describe('Test RemoveIcon', () => {
  test('RemoveIcon', () => {
    const testRenderer = TestRenderer.create(<RemoveIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
