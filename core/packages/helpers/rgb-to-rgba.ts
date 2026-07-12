function rgbToRgba(rgbValue: string | null | undefined, alpha: number): string | undefined {
  return rgbValue?.replace('rgb', 'rgba')?.replace(')', `, ${alpha})`);
}

export default rgbToRgba;
