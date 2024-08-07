/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const KioskIconPhone = ({ color = "white", className }: Props): JSX.Element => {
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
        d="M32.0491 25.4323L27.8158 24.949C26.7991 24.8323 25.7991 25.1823 25.0824 25.899L22.0158 28.9656C17.2991 26.5656 13.4324 22.7156 11.0324 17.9823L14.1158 14.899C14.8324 14.1823 15.1824 13.1823 15.0658 12.1656L14.5824 7.96563C14.3824 6.28229 12.9658 5.01562 11.2658 5.01562H8.38243C6.49909 5.01562 4.93242 6.58229 5.04909 8.46563C5.93242 22.699 17.3158 34.0656 31.5324 34.949C33.4158 35.0656 34.9824 33.499 34.9824 31.6156V28.7323C34.9991 27.049 33.7324 25.6323 32.0491 25.4323Z"
        fill={color}
      />
    </svg>
  );
};

KioskIconPhone.propTypes = {
  color: PropTypes.string,
};
