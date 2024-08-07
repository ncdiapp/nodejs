/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconChevron = ({ className }: Props): JSX.Element => {
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
        d="M24.5148 11.1828C23.8648 10.5328 22.8148 10.5328 22.1648 11.1828L14.5148 18.8328C13.8648 19.4828 13.8648 20.5328 14.5148 21.1828L22.1648 28.8328C22.8148 29.4828 23.8648 29.4828 24.5148 28.8328C25.1648 28.1828 25.1648 27.1328 24.5148 26.4828L18.0482 19.9995L24.5148 13.5328C25.1648 12.8828 25.1482 11.8161 24.5148 11.1828Z"
        fill="#003E73"
      />
    </svg>
  );
};
