import React from "react";
import TIcon from "../../../icons-components/types/ticon";

const ChevronBtnLeftIcon = (props: TIcon) => {
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
        d="m 9.8257871,12.310658 c 0.6433399,0.579599 0.6433399,1.519292 0,2.098891 -0.6433237,0.579583 -1.6864535,0.579583 -2.3297608,0 L -0.25842073,7.4235731 7.4960263,0.43761178 c 0.6433073,-0.579553 1.6864371,-0.579553 2.3297608,0 0.6433399,0.57955502 0.6433399,1.51930702 0,2.09886102 L 4.4010674,7.4235731 Z"
        fill={props?.color ?? 'var(--main-font-color)'}
       />
    </svg>
  )
}

export default ChevronBtnLeftIcon;