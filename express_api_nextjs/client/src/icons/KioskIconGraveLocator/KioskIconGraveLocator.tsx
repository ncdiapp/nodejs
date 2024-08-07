/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const KioskIconGraveLocator = ({ className }: Props): JSX.Element => {
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
        d="M119.943 108.16L108.156 119.947L134.39 146.18C135.04 146.83 136.096 146.83 136.746 146.18L146.173 136.753C146.823 136.103 146.823 135.047 146.173 134.397L119.943 108.16Z"
        fill="#003E73"
      />
      <path
        d="M105.337 93.5508L93.5508 105.337L108.161 119.944L119.944 108.161L105.337 93.5508Z"
        fill="url(#paint0_radial_9206_137418)"
      />
      <path
        d="M66.7996 120.002C96.1812 120.002 120 96.1831 120 66.8016C120 37.42 96.1812 13.6016 66.7996 13.6016C37.4181 13.6016 13.5996 37.42 13.5996 66.8016C13.5996 96.1831 37.4181 120.002 66.7996 120.002Z"
        fill="url(#paint1_linear_9206_137418)"
      />
      <g filter="url(#filter0_b_9206_137418)">
        <path
          d="M66.8004 107.198C89.1127 107.198 107.2 89.1107 107.2 66.7984C107.2 44.4861 89.1127 26.3984 66.8004 26.3984C44.4881 26.3984 26.4004 44.4861 26.4004 66.7984C26.4004 89.1107 44.4881 107.198 66.8004 107.198Z"
          fill="white"
          fillOpacity="0.9"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="88.8008"
          id="filter0_b_9206_137418"
          width="88.8008"
          x="22.4004"
          y="22.3984"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9206_137418" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_9206_137418" mode="normal" result="shape" />
        </filter>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(66.7475 66.9875) scale(65.3466)"
          gradientUnits="userSpaceOnUse"
          id="paint0_radial_9206_137418"
          r="1"
        >
          <stop offset="0.693" stopColor="#000033" />
          <stop offset="0.921" stopColor="#0071BB" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_9206_137418"
          x1="36.7044"
          x2="99.866"
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
