
import PropTypes from "prop-types";
import React from "react";
//import { Chevron } from "./Chevron";
//import { KioskVeteran } from "./KioskVeteran";

interface Props {
  type: "date" | "name" | "icon";
  className: any;
  KIOSKVeteranTop: string;
  text: string;
}

export const KioskTableCell = ({ type, className, text, KIOSKVeteranTop = "image.png" }: Props): JSX.Element => {
  return (
    <div
      className={`flex-col px-2 py-0 relative whitespace-nowrap overflow-hidden ${["date", "name"].includes(type) ? "w-[600px]" : ""} ${
        type === "icon" ? "inline-flex" : "flex"
      } ${type === "icon" ? "items-end" : "items-start"} ${className}`}
    >
      <div
        className={`gap-6 h-[44px] relative ${["date", "name"].includes(type) ? "w-full" : ""} ${
          type === "icon" ? "inline-flex" : "flex"
        } ${["date", "name"].includes(type) ? "self-stretch" : ""} ${
          type === "icon" ? "items-start" : "items-center"
        } ${type === "icon" ? "justify-end" : ""}`}
      >
        {type === "name" && (
          <>
            {/* <KioskVeteran
              className="!rounded-[22px] !h-[44px] !w-[44px]"
              top={KIOSKVeteranTop}
              topClassName="!h-10 !w-10"
              type="four"
            /> */}
            <div className="relative flex-1 font-KIOSK-h4-FULL-CAPS font-[number:var(--KIOSK-h4-FULL-CAPS-font-weight)] text-kioskbrand-primarydarker text-[length:var(--KIOSK-h4-FULL-CAPS-font-size)] tracking-[var(--KIOSK-h4-FULL-CAPS-letter-spacing)] leading-[var(--KIOSK-h4-FULL-CAPS-line-height)] [font-style:var(--KIOSK-h4-FULL-CAPS-font-style)]">
              {text}
            </div>
          </>
        )}

        {["date", "icon"].includes(type) && (
          <div
            className={`relative ${type === "date" ? "font-KIOSK-h4-FULL-CAPS" : ""} ${
              type === "icon" ? "inline-flex" : ""
            } ${type === "date" ? "tracking-[var(--KIOSK-h4-FULL-CAPS-letter-spacing)]" : ""} ${
              type === "date" ? "[font-style:var(--KIOSK-h4-FULL-CAPS-font-style)]" : ""
            } ${type === "date" ? "text-[length:var(--KIOSK-h4-FULL-CAPS-font-size)]" : ""} ${
              type === "icon" ? "items-start" : ""
            } ${type === "icon" ? "flex-[0_0_auto]" : "flex-1"} ${
              type === "date" ? "text-kioskbrand-primarydarker" : ""
            } ${type === "icon" ? "p-6" : ""} ${
              type === "date" ? "font-[number:var(--KIOSK-h4-FULL-CAPS-font-weight)]" : ""
            } ${type === "date" ? "leading-[var(--KIOSK-h4-FULL-CAPS-line-height)]" : ""} ${
              type === "icon" ? "rounded-lg" : ""
            } ${type === "icon" ? "justify-end" : ""}`}
          >
            {type === "date" && <>{text}</>}

            {/* {type === "icon" && <Chevron className="!relative !w-5 !h-5" />} */}
          </div>
        )}
      </div>
    </div>
  );
};

KioskTableCell.propTypes = {
  type: PropTypes.oneOf(["date", "name", "icon"]),
  KIOSKVeteranTop: PropTypes.string,
};
