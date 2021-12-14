import IPalette from './ipalette';

interface IThemes {
  [key: string]: {
    palette: IPalette,
  };
}

export default IThemes;
