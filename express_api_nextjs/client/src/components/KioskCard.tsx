import PropTypes from "prop-types";
import React from "react";
import { KioskIconCemeteryInformation3 } from "../icons/KioskIconCemeteryInformation3";
import { KioskCardIcon } from "./KioskCardIcon";

interface Props {
  state: "pressed" | "default";
  className: any;
  cardClassName: any;
  contentClassName: any;
  KIOSKCardIconIcon: JSX.Element;
  text: string;
}

export const KioskCard = ({
  state,
  className,
  cardClassName,
  contentClassName,
  KIOSKCardIconIcon = (
    <KioskIconCemeteryInformation3
      className="!absolute !w-20 !h-20 !top-5 !left-5 !object-cover"
      color="url(#paint0_linear_40078_75)"
    />
  ),
  text = "General Information",
}: Props): JSX.Element => {
  return (
    <div
      className={`w-full h-full flex flex-col items-center shadow-[0px_8px_8px_#131e290a,0px_24px_18px_#131e290a] rounded-2xl justify-center relative ${className}`}
    >
      <div
        className={`flex items-center flex-1 p-7 relative w-full flex-col grow rounded-2xl gap-7 bg-white self-stretch justify-center ${
          state === "pressed" ? "border-kiosk-gold" : "border-transparent"
        } ${state === "default" ? "[border-image:linear-gradient(to_bottom,rgb(0,62,115),rgb(0,113,187))_1]" : ""} ${
          state === "pressed" ? "border-4 border-solid" : "border-0 border-solid"
        } ${cardClassName}`}
      >
        <div className={`w-full flex flex-col items-center gap-6 flex-[0_0_auto] relative ${contentClassName}`}>
          <KioskCardIcon className="!relative" icon={KIOSKCardIconIcon} />
          <div className="font-KIOSK-h2 [font-style:var(--KIOSK-h2-font-style)] text-kioskbrand-primarydarker font-[number:var(--KIOSK-h2-font-weight)] text-center relative text-[24px] leading-[32px]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

KioskCard.propTypes = {
  state: PropTypes.oneOf(["pressed", "default"]),
  text: PropTypes.string,
};
