/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconGraveLocator1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="160"
      viewBox="0 0 161 160"
      width="161"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120.193 108.156L108.406 119.943L134.64 146.176C135.29 146.826 136.346 146.826 136.996 146.176L146.423 136.75C147.073 136.1 147.073 135.043 146.423 134.393L120.193 108.156Z"
        fill="#003E73"
      />
      <path
        d="M105.587 93.5469L93.8008 105.334L108.411 119.94L120.194 108.157L105.587 93.5469Z"
        fill="url(#paint0_radial_40078_2492)"
      />
      <path
        d="M67.0516 120.002C96.4331 120.002 120.252 96.1831 120.252 66.8016C120.252 37.42 96.4331 13.6016 67.0516 13.6016C37.67 13.6016 13.8516 37.42 13.8516 66.8016C13.8516 96.1831 37.67 120.002 67.0516 120.002Z"
        fill="url(#paint1_linear_40078_2492)"
      />
      <g filter="url(#filter0_b_40078_2492)">
        <path
          d="M67.0484 107.198C89.3607 107.198 107.448 89.1107 107.448 66.7984C107.448 44.4861 89.3607 26.3984 67.0484 26.3984C44.7361 26.3984 26.6484 44.4861 26.6484 66.7984C26.6484 89.1107 44.7361 107.198 67.0484 107.198Z"
          fill="white"
          fillOpacity="0.9"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="88.7969"
          id="filter0_b_40078_2492"
          width="88.8008"
          x="22.6484"
          y="22.3984"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_40078_2492" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_40078_2492" mode="normal" result="shape" />
        </filter>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(66.9975 66.9835) scale(65.3466)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_40078_2492"
          r="1"
        >
          <stop offset="0.693" stopColor="#000033" />
          <stop offset="0.921" stopColor="#0071BB" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_40078_2492"
          x1="36.9563"
          x2="100.118"
          y1="4.30383"
          y2="104.5"
        >
          <stop stopColor="#0071BB" />
          <stop offset="1" stopColor="#003E73" />
        </linearGradient>
      </defs>
    </svg>
  );
};
