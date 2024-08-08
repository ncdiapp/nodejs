
import PropTypes from "prop-types";
import React from "react";
import { text } from "stream/consumers";
//import { Chevron } from "./Chevron";
//import { KioskVeteran } from "./KioskVeteran";

interface Props {
  type: "date" | "name" | "icon";
  className: any;
  KIOSKVeteranTop: string;
}

export const KioskTableCell = ({ type, className, KIOSKVeteranTop = "image.png" }: Props): JSX.Element => {
  return (
    <div
      className={`flex-col px-2 py-0 relative ${["date", "name"].includes(type) ? "w-[600px]" : ""} ${
        type === "icon" ? "inline-flex" : "flex"
      } ${type === "icon" ? "items-end" : "items-start"} ${className}`}
    >
      <div
        className={`gap-6 h-[88px] relative ${["date", "name"].includes(type) ? "w-full" : ""} ${
          type === "icon" ? "inline-flex" : "flex"
        } ${["date", "name"].includes(type) ? "self-stretch" : ""} ${
          type === "icon" ? "items-start" : "items-center"
        } ${type === "icon" ? "justify-end" : ""}`}
      >
        {type === "name" && (
          <>
            {/* <KioskVeteran
              className="!rounded-[44px] !h-[88px] !w-[88px]"
              top={KIOSKVeteranTop}
              topClassName="!h-20 !w-20"
              type="four"
            /> */}
            <div className="relative flex-1 font-KIOSK-h4-FULL-CAPS font-[number:var(--KIOSK-h4-FULL-CAPS-font-weight)] text-kioskbrand-primarydarker text-[length:var(--KIOSK-h4-FULL-CAPS-font-size)] tracking-[var(--KIOSK-h4-FULL-CAPS-letter-spacing)] leading-[var(--KIOSK-h4-FULL-CAPS-line-height)] [font-style:var(--KIOSK-h4-FULL-CAPS-font-style)]">
              SMITH, JOHN
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

            {/* {type === "icon" && <Chevron className="!relative !w-10 !h-10" />} */}
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
