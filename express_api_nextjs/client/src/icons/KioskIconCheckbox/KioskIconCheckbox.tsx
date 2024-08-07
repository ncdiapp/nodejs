/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconCheckbox = ({ className }: Props): JSX.Element => {
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
        d="M30 31.6667H10C9.08333 31.6667 8.33333 30.9167 8.33333 30V10C8.33333 9.08333 9.08333 8.33333 10 8.33333H30C30.9167 8.33333 31.6667 9.08333 31.6667 10V30C31.6667 30.9167 30.9167 31.6667 30 31.6667ZM31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5Z"
        fill="white"
      />
    </svg>
  );
};
