import TestRenderer from 'react-test-renderer';

import PnlDashboardIcon from './index';

describe('Test PnlDashboardIcon', () => {
  test('PnlDashboardIcon', () => {
    const testRenderer = TestRenderer.create(<PnlDashboardIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
