import TestRenderer from 'react-test-renderer';

import RestoreIcon from './index';

describe('Test RestoreIcon', () => {
  test('RestoreIcon', () => {
    const testRenderer = TestRenderer.create(<RestoreIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
