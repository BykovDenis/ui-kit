import React from "react";
import TIcon from "../../../icons-components/types/ticon";

const ChevronBtnRightIcon = (props: TIcon) => {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14.76504"
      fill="none"
      version="1.1"
      id="svg4"
      xmlns="http://www.w3.org/2000/svg"
      className={props?.className}
    >
      <path
        style={{ opacity: 0.7 }}
        d="m 0.50091204,2.3925663 c -0.61000604,-0.5495668 -0.61000604,-1.44057066 0,-1.99013748 0.60999036,-0.54955275 1.59907116,-0.54955275 2.20904596,0 L 10.062614,7.0264308 2.709958,13.650419 c -0.6099748,0.549524 -1.5990556,0.549524 -2.20904596,0 -0.61000604,-0.549525 -0.61000604,-1.440585 0,-1.99011 L 5.6445538,7.0264308 Z"
        fill={props?.color ?? 'var(--main-font-color)'}
      />
    </svg>
  )
}

export default ChevronBtnRightIcon;