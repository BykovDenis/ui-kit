const getCssVariables = () => {
  const htmlElement: any = document.querySelector('html');
  const getCssVariablesSelector = window?.getComputedStyle(htmlElement);

  function getCssVariablesValueByKey(key: string): string | null {
    return getCssVariablesSelector?.getPropertyValue(key) || null;
  }

  const baseFontSize: string = getCssVariablesValueByKey('--base-font-size');
  const backgroundColor: string = getCssVariablesValueByKey('--main-background-color');
  const inactiveBackgroundColor: string = getCssVariablesValueByKey('--inactive-background-color');
  const inactiveFontColor: string = getCssVariablesValueByKey('--inactive-font-color');
  const primaryMainColor: string = getCssVariablesValueByKey('--primary-main-color');
  const primaryLighterColor: string = getCssVariablesValueByKey('--primary-lighter-color');
  const primaryLightColor: string = getCssVariablesValueByKey('--primary-light-color');
  const secondaryMainColor: string = getCssVariablesValueByKey('--secondary-main-color');
  const secondaryLighterColor: string = getCssVariablesValueByKey('--secondary-lighter-color');
  const fontFamily: string = getCssVariablesValueByKey('--base-font-family');
  const mainOutlinedColor: string = getCssVariablesValueByKey('--main-outlined-color');
  const mainOutlinedHoverColor: string = getCssVariablesValueByKey('--main-outlined-hover-color');
  const baseFontColor: string = getCssVariablesValueByKey('--base-font-color');
  const baseFontColorInverted: string = getCssVariablesValueByKey('--base-font-color-inverted');
  const baseFontColorOpacity05: string = getCssVariablesValueByKey('--base-font-color-opacity05');
  const mainGrayColor: string = getCssVariablesValueByKey('--main-gray-color');
  const baseButtonFontColor: string = getCssVariablesValueByKey('--base-button-font-color');
  const h1FontSize: string = getCssVariablesValueByKey('--h1-font-size');
  const h2FontSize: string = getCssVariablesValueByKey('--h2-font-size');
  const h3FontSize: string = getCssVariablesValueByKey('--h3-font-size');
  const h4FontSize: string = getCssVariablesValueByKey('--h4-font-size');
  const h5FontSize: string = getCssVariablesValueByKey('--h5-font-size');
  const h6FontSize: string = getCssVariablesValueByKey('--h6-font-size');
  return {
    h1FontSize,
    h2FontSize,
    h3FontSize,
    h4FontSize,
    h5FontSize,
    h6FontSize,
    baseFontColorInverted,
    primaryLightColor,
    primaryLighterColor,
    baseButtonFontColor,
    mainGrayColor,
    baseFontSize,
    baseFontColorOpacity05,
    mainOutlinedColor,
    baseFontColor,
    mainOutlinedHoverColor,
    secondaryLighterColor,
    secondaryMainColor,
    backgroundColor,
    fontFamily,
    inactiveBackgroundColor,
    inactiveFontColor,
    primaryMainColor,
  };
};

export default getCssVariables;
