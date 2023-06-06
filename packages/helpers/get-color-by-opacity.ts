import parseColor from "./parse-color";

function getColorByOpacity(color: string, opacity: number): string {
   return `rgba(${parseColor(color)}, ${opacity})`;
}

export default getColorByOpacity
