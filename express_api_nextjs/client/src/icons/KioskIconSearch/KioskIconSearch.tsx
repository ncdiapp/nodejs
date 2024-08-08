/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconSearch = ({ className }: Props): JSX.Element => {
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
        d="M25.8344 23.3344H24.5177L24.051 22.8844C26.051 20.551 27.0844 17.3677 26.5177 13.9844C25.7344 9.35104 21.8677 5.65104 17.201 5.08438C10.151 4.21771 4.21771 10.151 5.08438 17.201C5.65104 21.8677 9.35104 25.7344 13.9844 26.5177C17.3677 27.0844 20.551 26.051 22.8844 24.051L23.3344 24.5177V25.8344L30.4177 32.9177C31.101 33.601 32.2177 33.601 32.901 32.9177C33.5844 32.2344 33.5844 31.1177 32.901 30.4344L25.8344 23.3344ZM15.8344 23.3344C11.6844 23.3344 8.33438 19.9844 8.33438 15.8344C8.33438 11.6844 11.6844 8.33438 15.8344 8.33438C19.9844 8.33438 23.3344 11.6844 23.3344 15.8344C23.3344 19.9844 19.9844 23.3344 15.8344 23.3344Z"
        fill="#003E73"
      />
    </svg>
  );
};
