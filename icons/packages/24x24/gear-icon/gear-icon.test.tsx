import TestRenderer from 'react-test-renderer';

import GearIcon from './index';

describe('Test GearIcon', () => {
  test('GearIcon', () => {
    const testRenderer = TestRenderer.create(<GearIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
