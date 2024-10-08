import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        brandaltblue: "var(--brandaltblue)",
        brandaltgreen: "var(--brandaltgreen)",
        brandaltpink: "var(--brandaltpink)",
        brandaltyellow: "var(--brandaltyellow)",
        brandprimary: "var(--brandprimary)",
        "brandprimary-darker": "var(--brandprimary-darker)",
        brandsecondary: "var(--brandsecondary)",
        "brandsecondary-lighter": "var(--brandsecondary-lighter)",
        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-300": "var(--grey-300)",
        "grey-400": "var(--grey-400)",
        "grey-50": "var(--grey-50)",
        "grey-500": "var(--grey-500)",
        "grey-600": "var(--grey-600)",
        "grey-700": "var(--grey-700)",
        "kiosk-brand-primary-darkest": "var(--kiosk-brand-primary-darkest)",
        "kiosk-gold": "var(--kiosk-gold)",
        "kiosk-text-primary": "var(--kiosk-text-primary)",
        "kiosk-text-secondary": "var(--kiosk-text-secondary)",
        "kioskbrand-primary-default": "var(--kioskbrand-primary-default)",
        "kioskbrand-primarydarker": "var(--kioskbrand-primarydarker)",
        kioskscrim: "var(--kioskscrim)",
        scrimprimary: "var(--scrimprimary)",
        scrimsecondary: "var(--scrimsecondary)",
        scrimtertiary: "var(--scrimtertiary)",
        semanticerror: "var(--semanticerror)",
        "semanticerror-dark": "var(--semanticerror-dark)",
        semanticsuccess: "var(--semanticsuccess)",
        semanticwarning: "var(--semanticwarning)",
        "variable-collection-color": "var(--variable-collection-color)",
        "vlm-primary-darker": "var(--vlm-primary-darker)",
        "vlmprimary-base": "var(--vlmprimary-base)",
        vlmred: "var(--vlmred)",
        white: "var(--white)",
      },
      fontFamily: {
        body: "var(--body-font-family)",
        "body-mobile": "var(--body-mobile-font-family)",
        button: "var(--button-font-family)",
        "button-mobile": "var(--button-mobile-font-family)",
        caption: "var(--caption-font-family)",
        h1: "var(--h1-font-family)",
        "h1-h4": "var(--h1-h4-font-family)",
        "h1-subtitle": "var(--h1-subtitle-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h5: "var(--h5-font-family)",
        "KIOSK-body": "var(--KIOSK-body-font-family)",
        "KIOSK-h1": "var(--KIOSK-h1-font-family)",
        "KIOSK-h2": "var(--KIOSK-h2-font-family)",
        "KIOSK-h3": "var(--KIOSK-h3-font-family)",
        "KIOSK-h3-FULL-CAPS": "var(--KIOSK-h3-FULL-CAPS-font-family)",
        "KIOSK-h4-FULL-CAPS": "var(--KIOSK-h4-FULL-CAPS-font-family)",
        label: "var(--label-font-family)",
        overline: "var(--overline-font-family)",
        title: "var(--title-font-family)",
      },
      boxShadow: {
        "1dp": "var(--1dp)",
        "2dp": "var(--2dp)",
        "3dp": "var(--3dp)",
        "4dp": "var(--4dp)",
        "KIOSK-keyboard-key-default": "var(--KIOSK-keyboard-key-default)",
        "KIOSK-keyboard-key-pressed": "var(--KIOSK-keyboard-key-pressed)",
      },
    },
  },
  plugins: [],
};
export default config;
