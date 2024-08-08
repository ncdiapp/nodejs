
import React from "react";
import { KioskIconCemeteryInformation3 } from "../icons/KioskIconCemeteryInformation3";
import { BaseKioskIcon } from "./BaseKioskIcon";

interface Props {
  className: any;
  icon: JSX.Element;
}

export const KioskCardIcon = ({
  className,
  icon = (
    <KioskIconCemeteryInformation3
      className="!absolute !w-40 !h-40 !top-5 !left-5 !object-cover"
      color="url(#paint0_linear_9173_131040)"
    />
  ),
}: Props): JSX.Element => {
  return (
    <div className={`w-[200px] h-[200px] ${className}`}>
      <div className="relative h-[200px] rounded-2xl">
        <BaseKioskIcon className="!absolute !left-0 !top-0" />
        {icon}
      </div>
    </div>
  );
};
