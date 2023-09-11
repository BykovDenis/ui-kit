import React from 'react';

import IListElement from '../../list-item/types/ilist-element';
import TBaseStyles from '../../types/tbase-styles';

interface IList extends TBaseStyles {
  id?: string;
  backgroundColor?: string;
  colorTheme?: string;
  elements?: Array<IListElement>;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  margin?: string;
  onKeyUp?: (evt?: React.KeyboardEvent<HTMLElement>, listRef?: React.Ref<any>) => void;
  type?: string;
  underlineColor?: string;
  onMouseDown?: (evt?: React.MouseEvent<HTMLElement, MouseEvent>, listRef?: React.Ref<any>) => void;
  width?: number | string;
}

export default IList;
