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

export const KioskIconCemeteryInformation3 = ({
  color = "url(#paint0_linear_9173_131037)",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="160"
      viewBox="0 0 160 160"
      width="160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M140.52 26.3984H20.2796C16.5889 26.3984 13.5996 29.3726 13.5996 33.0446V119.445C13.5996 123.117 16.5889 126.091 20.2796 126.091H46.9996V152.669C46.9996 155.63 50.5968 157.112 52.701 155.018L81.7757 126.091H140.52C144.21 126.091 147.2 123.117 147.2 119.445V33.0446C147.2 29.3726 144.21 26.3984 140.52 26.3984Z"
        fill={color}
      />
      <path
        d="M80 62C85.1321 62 88 58.3888 88 53.9256C88 49.4624 84.9721 46 80 46C75.0279 46 72 49.4624 72 53.9256C72 58.3888 74.8679 62 80 62Z"
        fill="white"
      />
      <path
        d="M83.1996 68.3984H76.7996C75.0323 68.3984 73.5996 69.8311 73.5996 71.5984V103.598C73.5996 105.366 75.0323 106.798 76.7996 106.798H83.1996C84.9669 106.798 86.3996 105.366 86.3996 103.598V71.5984C86.3996 69.8311 84.9669 68.3984 83.1996 68.3984Z"
        fill="white"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_40078_75"
          x1="42.6108"
          x2="118.514"
          y1="15.0734"
          y2="139.199"
        >
          <stop stopColor="#0071BB" />
          <stop offset="1" stopColor="#003E73" />
        </linearGradient>
      </defs>
    </svg>
  );
};

KioskIconCemeteryInformation3.propTypes = {
  color: PropTypes.string,
};
