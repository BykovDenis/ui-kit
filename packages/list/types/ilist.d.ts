import React from 'react';

import IListElement from '../../list-item/types/ilist-element';

interface IList {
  backgroundColor?: string;
  children?: any;
  className?: string;
  colorTheme?: string;
  elements?: Array<IListElement>;
  fontFamily?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  margin?: string;
  onKeyUp?: (evt?: React.KeyboardEvent<HTMLElement>, listRef?: React.Ref<any>) => void;
  type?: string;
  underlineColor?: string;
  onMouseDown?: (evt?: React.MouseEvent<HTMLElement, MouseEvent>, listRef?: React.Ref<any>) => void;
  fontSize?: number | string;
}

export default IList;
