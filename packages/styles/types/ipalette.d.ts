interface IPalette {
  baseButtonFontColor: string;
  baseFontColor: string;
  baseFontColorInverted: string;
  primary: {
    bestLighter: string,
    light: string,
    lighter: string,
    main: string,
    moreLighter: string,
  };
  secondary: {
    bestLighter: string,
    light: string,
    lighter: string,
    main: string,
    moreLighter: string,
  };
}

export default IPalette;
