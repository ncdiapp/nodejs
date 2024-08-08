import PropTypes from "prop-types";
import React from "react";

interface Props {
  className: any;
  text: string;
}

export const KioskTableHeader = ({ className, text = "LABEL" }: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-[600px] items-start px-2 py-0 relative ${className}`}>
      <div className="flex h-7 items-center gap-4 relative self-stretch w-full">
        <div className="relative flex-1 font-KIOSK-h4-FULL-CAPS font-[number:var(--KIOSK-h4-FULL-CAPS-font-weight)] text-kiosk-text-secondary text-[length:var(--KIOSK-h4-FULL-CAPS-font-size)] tracking-[var(--KIOSK-h4-FULL-CAPS-letter-spacing)] leading-[var(--KIOSK-h4-FULL-CAPS-line-height)] [font-style:var(--KIOSK-h4-FULL-CAPS-font-style)]">
          {text}
        </div>
      </div>
    </div>
  );
};

KioskTableHeader.propTypes = {
  text: PropTypes.string,
};