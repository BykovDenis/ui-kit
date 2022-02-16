import IListElement from './ilist-element';

interface IList {
  ReactThemeContext?: any;
  children?: any;
  className?: string;
  colorTheme?: string;
  elements: Array<IListElement>;
  fontFamily?: string;
  type?: string;
}

export default IList;
