/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconArrow1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6685 31.6635V13.0469L29.8018 21.1802C30.4518 21.8302 31.5185 21.8302 32.1685 21.1802C32.8185 20.5302 32.8185 19.4802 32.1685 18.8302L21.1852 7.84688C20.5352 7.19687 19.4852 7.19687 18.8352 7.84688L7.83516 18.8135C7.18516 19.4635 7.18516 20.5135 7.83516 21.1635C8.48516 21.8135 9.53516 21.8135 10.1852 21.1635L18.3352 13.0469V31.6635C18.3352 32.5802 19.0852 33.3302 20.0018 33.3302C20.9185 33.3302 21.6685 32.5802 21.6685 31.6635Z"
        fill="#003E73"
      />
    </svg>
  );
};
