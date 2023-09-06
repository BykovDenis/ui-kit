import TestRenderer from 'react-test-renderer';

import InfoIcon from './index';

describe('Test InfoIcon', () => {
  test('InfoIcon', () => {
    const testRenderer = TestRenderer.create(<InfoIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
