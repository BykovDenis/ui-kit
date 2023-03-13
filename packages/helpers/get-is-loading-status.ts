import LoadStatuses from '../redux/enums/load-statuses';
import ILoadStatus from '../types/load-status';

function getIsLoadingStatus(loadStatusElements: Array<ILoadStatus>): boolean {
  return loadStatusElements?.some((loadStatusElement: ILoadStatus) => loadStatusElement.status === LoadStatuses.load);
}

export default getIsLoadingStatus;
