/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const BaseKioskIcon = ({ className }: Props): JSX.Element => {
  return (
    <div className={`w-[100px] h-[100px] bg-grey-50 rounded-2xl overflow-hidden ${className}`}>
      <div className="relative w-[102px] h-[102px] -top-0.5 -left-0.5 rounded-[0px_0px_120px_0px] border-2 border-solid border-white [background:linear-gradient(180deg,rgb(248,249,250)_0%,rgb(233,236,239)_100%)]">
        <div className="w-[104px] h-[104px] rounded-[0px_0px_60px_0px] absolute -top-0.5 -left-0.5 border-2 border-solid border-white" />
        <div className="w-[154px] h-[154px] rounded-[0px_0px_90px_0px] absolute -top-0.5 -left-0.5 border-2 border-solid border-white" />
      </div>
    </div>
  );
};
