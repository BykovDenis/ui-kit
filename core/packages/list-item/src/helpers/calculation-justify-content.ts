import { TEXT_ALIGN_CENTER, TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../../constants';

function calculationJustifyContent(textAlign: string): string {
  switch (textAlign) {
    case TEXT_ALIGN_LEFT: {
      return 'flex-start';
    }
    case TEXT_ALIGN_RIGHT: {
      return 'flex-end';
    }
    default: {
      return TEXT_ALIGN_CENTER;
    }
  }
}

export default calculationJustifyContent;
