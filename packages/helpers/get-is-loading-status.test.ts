import LoadStatuses from '../redux/enums/load-statuses';
import ILoadStatus from '../types/load-status';
import getIsLoadingStatus from './get-is-loading-status';

describe('test function of getIsLoadingStatus', () => {
  it('Test 1. getIsLoadingStatus return true', () => {
    const loadStatusBuildDashboard: ILoadStatus = {
      status: LoadStatuses.load,
      message: '',
    };

    const loadStatusResetDashboard: ILoadStatus = {
      status: LoadStatuses.load,
      message: '',
    };

    const loadStatusUploadSourceFiles: ILoadStatus = {
      status: LoadStatuses.load,
      message: '',
    };

    expect(
      getIsLoadingStatus([loadStatusBuildDashboard, loadStatusResetDashboard, loadStatusUploadSourceFiles])
    ).toBeTruthy();
  });
  it('Test 2. getIsLoadingStatus return true', () => {
    const loadStatusBuildDashboard: ILoadStatus = {
      status: LoadStatuses.load,
      message: '',
    };

    const loadStatusResetDashboard: ILoadStatus = {
      status: LoadStatuses.load,
      message: '',
    };

    const loadStatusUploadSourceFiles: ILoadStatus = {
      status: LoadStatuses.loaded,
      message: '',
    };

    expect(
      getIsLoadingStatus([loadStatusBuildDashboard, loadStatusResetDashboard, loadStatusUploadSourceFiles])
    ).toBeTruthy();
  });

  it('Test 3. getIsLoadingStatus return false', () => {
    const loadStatusBuildDashboard: ILoadStatus = {
      status: LoadStatuses.loaded,
      message: '',
    };

    const loadStatusResetDashboard: ILoadStatus = {
      status: 'dsdsd',
      message: '',
    };

    const loadStatusUploadSourceFiles: ILoadStatus = {
      status: LoadStatuses.loaded,
      message: '',
    };

    expect(
      getIsLoadingStatus([loadStatusBuildDashboard, loadStatusResetDashboard, loadStatusUploadSourceFiles])
    ).toBeFalsy();
  });
});
