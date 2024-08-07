/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconArrow2 = ({ className }: Props): JSX.Element => {
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
        d="M18.3352 8.33073V26.9474L10.2018 18.8141C9.55182 18.1641 8.48516 18.1641 7.83516 18.8141C7.18516 19.4641 7.18516 20.5141 7.83516 21.1641L18.8185 32.1474C19.4685 32.7974 20.5185 32.7974 21.1685 32.1474L32.1518 21.1641C32.8018 20.5141 32.8018 19.4641 32.1518 18.8141C31.5018 18.1641 30.4518 18.1641 29.8018 18.8141L21.6685 26.9474V8.33073C21.6685 7.41406 20.9185 6.66406 20.0018 6.66406C19.0852 6.66406 18.3352 7.41406 18.3352 8.33073Z"
        fill="#003E73"
      />
    </svg>
  );
};
