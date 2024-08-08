import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  vectorClassName: any;
  vectorClassNameOverride: any;
  divClassName: any;
  headingWrapperClassName: any;
  text: string;
}

export const KioskHeader = ({
  className,
  vectorClassName,
  vectorClassNameOverride,
  divClassName,
  headingWrapperClassName,
  text = "Header",
}: Props): JSX.Element => {
  return (
    <div className={`w-[1344px] h-[76px] rotate-180 ${className}`}>
      <div className="relative h-[76px]">
        <div
          className={`w-[1300px] left-7 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(233,236,239)_100%)] absolute h-[76px] top-0 rounded-[0px_0px_76px_0px] border-4 border-solid border-white rotate-180 ${vectorClassName}`}
        />
        <div
          className={`w-[1152px] left-32 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgba(248,249,250,0.6)_100%)] absolute h-[76px] top-0 rounded-[0px_0px_76px_0px] border-4 border-solid border-white rotate-180 ${vectorClassNameOverride}`}
        />
        <div
          className={`w-[1152px] left-[228px] [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(248,249,250)_100%)] absolute h-[76px] top-0 rounded-[0px_0px_76px_0px] border-4 border-solid border-white rotate-180 ${divClassName}`}
        />
        <div className={`flex w-[1344px] items-start px-7 py-0 absolute top-6 left-0 ${headingWrapperClassName}`}>
          <div className="relative flex-1 mt-[-1.00px] rotate-180 font-KIOSK-h1 font-[number:var(--KIOSK-h1-font-weight)] text-kioskbrand-primarydarker text-[length:var(--KIOSK-h1-font-size)] text-center tracking-[var(--KIOSK-h1-letter-spacing)] leading-[var(--KIOSK-h1-line-height)] [font-style:var(--KIOSK-h1-font-style)]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

KioskHeader.propTypes = {
  text: PropTypes.string,
};
