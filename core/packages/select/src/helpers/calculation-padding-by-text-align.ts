import { TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../../constants';

function calculationPaddingByTextAlign(
  textAlign: string,
  isNotVisibleIndicator: boolean,
  isNotClearable: boolean = false
): string {
  switch (textAlign) {
    case TEXT_ALIGN_LEFT: {
      if (isNotVisibleIndicator) {
        return '0 0 0 5px';
      }
      return '0 0 0 17px';
    }
    case TEXT_ALIGN_RIGHT: {
      if (isNotClearable) {
        return '0 8px 0 0';
      }
      return '0 22px 0 0';
    }
    default: {
      return '0';
    }
  }
}

export default calculationPaddingByTextAlign;
