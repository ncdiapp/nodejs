import PropTypes from "prop-types";
import React from "react";
// import { Arrow } from "./Arrow";
// import { ButtonGroup } from "./ButtonGroup";
// import { CheckedNo } from "./CheckedNo";
// import { Chevron } from "./Chevron";
// import { DirectionLeft } from "./DirectionLeft";
// import { DirectionRight } from "./DirectionRight";
// import { Home } from "./Home";
// import { IconComponentNode } from "./IconComponentNode";
// import { KioskButton } from "./KioskButton";
// import { Phone } from "./Phone";
// import { Print } from "./Print";
// import { QrCode } from "./QrCode";
// import { Search } from "./Search";

interface Props {
  page: "text-page" | "home-page" | "veteran-s-profile" | "sub-menu" | "grave-locator" | "table";
  className: any;
  KIOSKButtonBaseKioskButtonIcon: JSX.Element;
  override: JSX.Element;
  KIOSKButtonBaseKioskButtonIcon1: JSX.Element;
  buttonGroupKioskButtonBaseKioskButtonIcon: JSX.Element;
  buttonGroupKioskButtonBaseKioskButtonIcon1: JSX.Element;
}

export const KioskBottom = ({
  page,
  className, 

}: Props): JSX.Element => {
  return (
    <div>
    </div>
  );
};

KioskBottom.propTypes = {
  page: PropTypes.oneOf(["text-page", "home-page", "veteran-s-profile", "sub-menu", "grave-locator", "table"]),
};