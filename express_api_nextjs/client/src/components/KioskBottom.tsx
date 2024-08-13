import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { KioskIconArrow1 } from "../icons/KioskIconArrow1";
import { KioskIconArrow2 } from "../icons/KioskIconArrow2";
import { KioskIconArrow3 } from "../icons/KioskIconArrow3";
import { KioskIconCheckbox } from "../icons/KioskIconCheckbox";
import { KioskIconChevron } from "../icons/KioskIconChevron";
import { KioskIconChevron1 } from "../icons/KioskIconChevron1";
import { KioskIconHome1 } from "../icons/KioskIconHome1";
import { KioskIconPhone } from "../icons/KioskIconPhone";
import { KioskIconPrint } from "../icons/KioskIconPrint";
import { KioskIconQrCode } from "../icons/KioskIconQrCode";
import { KioskIconSearch } from "../icons/KioskIconSearch";

interface Props {
  page: "text-page" | "home-page" | "veteran-s-profile" | "sub-menu" | "grave-locator" | "table";
  className: any;
}

export const KioskBottom = ({ page, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[1920px] flex items-center bg-kioskbrand-primarydarker relative ${
        page === "home-page" ? "gap-6" : ""
      } ${page === "home-page" ? "px-14 py-[52px]" : "px-14 py-8"} ${
        ["home-page", "sub-menu"].includes(page)
          ? "justify-center"
          : page === "grave-locator"
          ? "justify-around"
          : "justify-between"
      } ${className}`}
    >
      {["grave-locator", "sub-menu"].includes(page) && (
        <Link className="inline-flex items-start flex-[0_0_auto] relative" href="/x0u460u460-u45-home-page">
          <div className="inline-flex items-start gap-6 flex-[0_0_auto] pl-12 pr-6 py-6 rotate-180 rounded-lg bg-kioskbrand-primary-default relative">
            <div className="font-KIOSK-h3 w-fit mt-[-2.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-white rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)] relative">
              Main Menu
            </div>
            <KioskIconHome1 className="!relative !w-10 !h-10 !-rotate-180" />
          </div>
        </Link>
      )}

      {page === "home-page" && (
        <>
          <KioskIconPhone className="!relative !w-10 !h-10" color="white" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-8">
            <span className="leading-[var(--KIOSK-body-line-height)] font-KIOSK-body [font-style:var(--KIOSK-body-font-style)] font-[number:var(--KIOSK-body-font-weight)] tracking-[var(--KIOSK-body-letter-spacing)] text-[24px]">
              Are you eligible for VA Survivors benefits? To find out contact the VA at{" "}
            </span>
            <span className="font-[number:var(--KIOSK-h3-font-weight)] leading-[var(--KIOSK-h3-line-height)] font-KIOSK-h3 [font-style:var(--KIOSK-h3-font-style)] tracking-[var(--KIOSK-h3-letter-spacing)] text-[20px]">
              1-800-827-1000
            </span>
          </p>
          <div className="relative w-10 h-10" />
        </>
      )}

      {["table", "text-page", "veteran-s-profile"].includes(page) && (
        <>
          <div className="inline-flex items-start gap-6 flex-[0_0_auto] relative">
            <Link className="inline-flex items-start flex-[0_0_auto] relative" href="/x0u460u460-u45-home-page">
              <div className="inline-flex items-start gap-6 flex-[0_0_auto] pl-12 pr-6 py-6 rotate-180 rounded-lg bg-kioskbrand-primary-default relative">
                <div className="font-KIOSK-h3 w-fit mt-[-2.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-white rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)] relative">
                  Main Menu
                </div>
                <KioskIconHome1 className="!relative !w-10 !h-10 !-rotate-180" />
              </div>
            </Link>
            <div className="inline-flex items-start flex-[0_0_auto] relative">
              <div className="border-2 border-solid border-grey-200 inline-flex items-start gap-6 flex-[0_0_auto] pl-12 pr-6 py-6 rotate-180 rounded-lg bg-white relative">
                <div className="font-KIOSK-h3 w-fit mt-[-2.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-kioskbrand-primarydarker relative rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)]">
                  {page === "table" && <>New Search</>}

                  {["text-page", "veteran-s-profile"].includes(page) && <>Go back</>}
                </div>
                {["text-page", "veteran-s-profile"].includes(page) && (
                  <KioskIconArrow3 className="!relative !w-10 !h-10 !-rotate-180" />
                )}

                {page === "table" && <KioskIconSearch className="!relative !w-10 !h-10 !-rotate-180" />}
              </div>
            </div>
            {page === "table" && (
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="pl-12 pr-6 py-6 rounded-lg border-2 border-solid border-white inline-flex items-start gap-6 relative flex-[0_0_auto] rotate-180">
                  <div className="mt-[-2.00px] rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-white leading-[var(--KIOSK-h3-line-height)] relative w-fit font-KIOSK-h3 text-[length:var(--KIOSK-h3-font-size)] text-right tracking-[var(--KIOSK-h3-letter-spacing)] whitespace-nowrap [font-style:var(--KIOSK-h3-font-style)]">
                    Advanced view
                  </div>
                  <KioskIconCheckbox className="!relative !w-10 !h-10 !-rotate-180" />
                </div>
              </div>
            )}
          </div>
          <div
            className={`inline-flex flex-[0_0_auto] relative ${page === "table" ? "items-center" : "items-start"} ${
              page === "text-page" ? "gap-1" : "gap-6"
            } ${page === "table" ? "justify-end" : ""}`}
          >
            {["text-page", "veteran-s-profile"].includes(page) && (
              <>
                <div className="inline-flex items-start flex-[0_0_auto] relative">
                  <div
                    className={`border-2 border-solid border-grey-200 inline-flex items-start gap-6 flex-[0_0_auto] pl-12 pr-6 py-6 rotate-180 bg-white relative ${
                      page === "veteran-s-profile" ? "rounded-lg" : "rounded-[0px_8px_8px_0px]"
                    }`}
                  >
                    <div className="font-KIOSK-h3 w-fit mt-[-2.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-kioskbrand-primarydarker rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)] relative">
                      {page === "veteran-s-profile" && <>Get Directions</>}

                      {page === "text-page" && <>Scroll up</>}
                    </div>
                    {page === "text-page" && <KioskIconArrow1 className="!relative !w-10 !h-10 !-rotate-180" />}

                    {page === "veteran-s-profile" && <KioskIconQrCode className="!relative !w-10 !h-10 !-rotate-180" />}
                  </div>
                </div>
                <div className="inline-flex items-start flex-[0_0_auto] relative">
                  <div
                    className={`border-2 border-solid border-grey-200 inline-flex items-start gap-6 flex-[0_0_auto] pl-12 pr-6 py-6 rotate-180 bg-white relative ${
                      page === "veteran-s-profile" ? "rounded-lg" : "rounded-[8px_0px_0px_8px]"
                    }`}
                  >
                    <div className="font-KIOSK-h3 w-fit mt-[-2.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-kioskbrand-primarydarker rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)] relative">
                      {page === "veteran-s-profile" && <>Print Map</>}

                      {page === "text-page" && <>Scroll down</>}
                    </div>
                    {page === "text-page" && <KioskIconArrow2 className="!relative !w-10 !h-10 !-rotate-180" />}

                    {page === "veteran-s-profile" && <KioskIconPrint className="!relative !w-10 !h-10 !-rotate-180" />}
                  </div>
                </div>
              </>
            )}

            {page === "table" && (
              <>
                <div className="font-[number:var(--KIOSK-body-font-weight)] text-white leading-[var(--KIOSK-body-line-height)] relative w-fit font-KIOSK-body text-[length:var(--KIOSK-body-font-size)] text-right tracking-[var(--KIOSK-body-letter-spacing)] whitespace-nowrap [font-style:var(--KIOSK-body-font-style)]">
                  1900 Results Found
                </div>
                <div className="font-[number:var(--KIOSK-body-font-weight)] text-white leading-[var(--KIOSK-body-line-height)] relative w-fit font-KIOSK-body text-[length:var(--KIOSK-body-font-size)] text-right tracking-[var(--KIOSK-body-letter-spacing)] whitespace-nowrap [font-style:var(--KIOSK-body-font-style)]">
                  •
                </div>
                <div className="font-[number:var(--KIOSK-body-font-weight)] text-white leading-[var(--KIOSK-body-line-height)] relative w-fit font-KIOSK-body text-[length:var(--KIOSK-body-font-size)] text-right tracking-[var(--KIOSK-body-letter-spacing)] whitespace-nowrap [font-style:var(--KIOSK-body-font-style)]">
                  Page 1 of 16
                </div>
                <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                  <div className="inline-flex items-start relative flex-[0_0_auto]">
                    <div className="p-6 bg-white rounded-[0px_8px_8px_0px] border-2 border-solid border-grey-200 inline-flex items-start gap-6 relative flex-[0_0_auto] rotate-180">
                      <KioskIconChevron className="!relative !w-10 !h-10 !-rotate-180" />
                    </div>
                  </div>
                  <div className="inline-flex items-start relative flex-[0_0_auto]">
                    <div className="p-6 bg-white rounded-[8px_0px_0px_8px] border-2 border-solid border-grey-200 inline-flex items-start gap-6 relative flex-[0_0_auto] rotate-180">
                      <KioskIconChevron1 className="!relative !w-10 !h-10 !-rotate-180" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

KioskBottom.propTypes = {
  page: PropTypes.oneOf(["text-page", "home-page", "veteran-s-profile", "sub-menu", "grave-locator", "table"]),
};
