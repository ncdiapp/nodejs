import React from "react";

interface Props {
  className: any;
}

export const KioskTopNavigation = ({ className }: Props): JSX.Element => {
  return (
    <div className={`flex w-[1400px] h-[76px] items-center p-8 relative rotate-180 bg-[#F1F3F5] ${className}`}>
      <p className="relative w-fit mt-[-1.00px] rotate-180 font-KIOSK-h3 font-[number:var(--KIOSK-h3-font-weight)] text-transparent text-[length:var(--KIOSK-h3-font-size)] text-right tracking-[var(--KIOSK-h3-letter-spacing)] leading-[var(--KIOSK-h3-line-height)] whitespace-nowrap [font-style:var(--KIOSK-h3-font-style)]">
        <span className="text-[#212121] font-KIOSK-h3 [font-style:var(--KIOSK-h3-font-style)] font-[number:var(--KIOSK-h3-font-weight)] tracking-[var(--KIOSK-h3-letter-spacing)] leading-[var(--KIOSK-h3-line-height)] text-[length:var(--KIOSK-h3-font-size)]">
          Los Angeles National Cemetery
        </span>
        <span className="text-[#5b616b] font-KIOSK-h3 [font-style:var(--KIOSK-h3-font-style)] font-[number:var(--KIOSK-h3-font-weight)] tracking-[var(--KIOSK-h3-letter-spacing)] leading-[var(--KIOSK-h3-line-height)] text-[length:var(--KIOSK-h3-font-size)]">
          {" "}
          •{" "}
        </span>
        <span className="text-[#212121] font-KIOSK-h3 [font-style:var(--KIOSK-h3-font-style)] font-[number:var(--KIOSK-h3-font-weight)] tracking-[var(--KIOSK-h3-letter-spacing)] leading-[var(--KIOSK-h3-line-height)] text-[length:var(--KIOSK-h3-font-size)]">
          VA/NCA
        </span>
      </p>
    </div>
  );
};
