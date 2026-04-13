import TestRenderer from 'react-test-renderer';

import EditIcon from './index';

describe('Test EditIcon', () => {
  test('EditIcon', () => {
    const testRenderer = TestRenderer.create(<EditIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
