import React from 'react';

import IListElement from './ilist-element';

interface IList {
  ReactThemeContext?: any;
  children?: any;
  className?: string;
  colorTheme?: string;
  elements?: Array<IListElement>;
  fontFamily?: string;
  onKeyUp?: (evt?: React.KeyboardEvent<HTMLElement>, listRef?: React.Ref<any>) => void;
  onMouseUp?: (evt?: React.MouseEvent<HTMLElement, MouseEvent>, listRef?: React.Ref<any>) => void;
  type?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  underlineColor?: string;
}

export default IList;
