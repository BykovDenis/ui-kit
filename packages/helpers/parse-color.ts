function parseColor(color: string): string {
    if (color?.indexOf('#') === 0 && color?.length === 7) {
        const redColor: string = color?.substring(1,3);
        const greenColor: string = color?.substring(3,5);
        const blueColor: string = color?.substring(5,7);
            return `${parseInt(redColor, 16)}, ${parseInt(greenColor, 16)}, ${parseInt(blueColor, 16)}`;
    } else if (color?.indexOf('rgb') > -1) {
        const colorParsed: string = color.replace('rgb(', '')?.replaceAll(' ', '')?.replaceAll(',', ', ');
        return colorParsed.substring(0, colorParsed?.length - 1);
    }
    return color;
}

export default parseColor;
