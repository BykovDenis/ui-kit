import React from 'react';

import IListElement from './ilist-element';

interface IList {
  ReactThemeContext?: any;
  children?: any;
  className?: string;
  colorTheme?: string;
  elements?: Array<IListElement>;
  fontFamily?: string;
  onKeyUp?: (evt: React.KeyboardEvent<HTMLElement>) => void;
  onMouseOutUp?: (isSearchResult: boolean, evt?: React.ChangeEvent<HTMLElement>) => void;
  type?: string;
}

export default IList;
