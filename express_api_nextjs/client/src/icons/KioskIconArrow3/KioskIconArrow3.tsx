/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconArrow3 = ({ className }: Props): JSX.Element => {
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
        d="M31.6674 18.3313H13.0508L21.1841 10.1979C21.8341 9.54792 21.8341 8.48125 21.1841 7.83125C20.5341 7.18125 19.4841 7.18125 18.8341 7.83125L7.85078 18.8146C7.20078 19.4646 7.20078 20.5146 7.85078 21.1646L18.8341 32.1479C19.4841 32.7979 20.5341 32.7979 21.1841 32.1479C21.8341 31.4979 21.8341 30.4479 21.1841 29.7979L13.0508 21.6646H31.6674C32.5841 21.6646 33.3341 20.9146 33.3341 19.9979C33.3341 19.0813 32.5841 18.3313 31.6674 18.3313Z"
        fill="#003E73"
      />
    </svg>
  );
};
