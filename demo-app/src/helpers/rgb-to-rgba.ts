function rgbToRgba(rgbValue: string, alpha: number) {
  return rgbValue.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

export default rgbToRgba;
