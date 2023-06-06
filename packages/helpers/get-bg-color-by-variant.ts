import Variant from "../enums/variant";
import rgbToRgba from "./rgb-to-rgba";
import getColorByOpacity from "./get-color-by-opacity";

const getBackgroundColor = (color: string, opacity: number, isDisabled: boolean, variant: Variant, inactiveBgColor: string, gbColorByUser?: string): string =>  isDisabled ? inactiveBgColor : variant === Variant.Text || variant === Variant.Outlined ? 'transparent' : rgbToRgba(gbColorByUser, 0.85) || getColorByOpacity(color, opacity);

export default getBackgroundColor;
