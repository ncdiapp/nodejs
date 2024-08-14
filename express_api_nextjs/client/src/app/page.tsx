
'use client';
//import { useAppContext } from "../contexts/AppContext";
import { KioskCard } from "../components/KioskCard";
import { KioskIconBenefitsAndServices1 } from "../icons/KioskIconBenefitsAndServices1";
import { KioskIconCemeteryInformation4 } from "../icons/KioskIconCemeteryInformation4";
import { KioskIconIntermentSchedule1 } from "../icons/KioskIconIntermentSchedule1";

import { KioskIconGraveLocator1 } from "../icons/KioskIconGraveLocator1";
import { KioskIconPhone } from "../icons/KioskIconPhone";

import { useEffect, useState } from 'react';
import Link from "next/link";

const Home = () => {
  //const { cemeteryInfo } = useAppContext();
  // const [scaleValue, setScaleValue] = useState(1);
  // const [containerWidth, setContainerWidth] = useState(1920);

  const CEMETERY_ID = process.env.NEXT_PUBLIC_CEMETERY_ID
  const [cemeteryInfo, setCemeteryInfo] = useState<any>([]);
  const fetchCemeteryInfo = async () => {
    try {
      const res = await fetch(`/api/v1/cemeteryinfo/${CEMETERY_ID}`);
      const resData = await res.json();
      setCemeteryInfo(resData.cemetery);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCemeteryInfo();

    // const calculateScaleValue = () => {     
    // const screenHeight = window.innerHeight;
    // const originalHeight = 1600; // The original height of the container
    // const scale = screenHeight / originalHeight;
    // setContainerWidth(1920 * scale);
    // setScaleValue(scale);

    // };

    // // Calculate scale value on component mount
    // calculateScaleValue();

    // // Recalculate scale value on window resize
    // window.addEventListener('resize', calculateScaleValue);

    // // Cleanup event listener on component unmount
    // return () => window.removeEventListener('resize', calculateScaleValue);
  }, []);


  return (


    <div className="w-screen h-screen flex flex-col">


      <div className="w-full h-[260px] relative">
        <div className="w-full h-[50%] bg-grey-100 "></div>
        <div className="flex w-full h-[50%] bg-white">
        </div>
        <div className="absolute w-[215px] h-[215px] inset-0 m-auto bg-grey-100 rounded-full p-3">
          <img className="w-full h-full" alt="Logo" src="img/logo.png" />
        </div>
      </div>

      <div className="w-full flex-auto">
        <div className="w-full text-center h-[50%]">
          <div className="py-4 font-KIOSK-h1 font-bold text-kiosk-text-secondary text-center tracking-[var(--KIOSK-h1-letter-spacing)] [font-style:var(--KIOSK-h1-font-style)] text-[24px] leading-8">
            Welcome to the
          </div>
          <div className="[font-family:'Source_Sans_Pro',Helvetica] font-bold text-kioskbrand-primarydarker text-[32px] leading-8">
            {cemeteryInfo?.name}
          </div>
          <p className="py-4 font-KIOSK-h2 font-bold text-kiosk-text-secondary text-center tracking-[var(--KIOSK-h2-letter-spacing)] leading-[var(--KIOSK-h2-line-height)] [font-style:var(--KIOSK-h2-font-style)] text-[20px] leading-8">
            Tap on a card to get started
          </p>
        </div>

        <div className="w-full h-[50%] overflow-hidden">
          <div className="h-0.5 bg-grey-200 relative self-stretch w-full" />
          <div className="flex w-full bg-white">
            <Link className="h-full w-full flex-auto" href="/gravelocator">
              <KioskCard
                KIOSKCardIconIcon={
                  <KioskIconGraveLocator1 className="!absolute !w-20 !h-20 !top-5 !left-5 !object-cover" />
                }
                cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
                className="w-full h-full"
                contentClassName="!mr-[-20.75px] !ml-[-20.75px]"
                state="default"
                text={
                  <>
                    Grave <br />
                    Locator
                  </>
                }
              />
            </Link>

            <div className="relative self-stretch w-0.5 bg-grey-200" />
            <Link className="h-full w-full flex-auto" href="/cemeteryinfo">
              <KioskCard
                KIOSKCardIconIcon={
                  <KioskIconCemeteryInformation4 className="!absolute !w-20 !h-20 !top-5 !left-5 !object-cover" />
                }
                cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
                className="w-full h-full"
                contentClassName="!mr-[-20.75px] !ml-[-20.75px]"
                state="default"
                text={
                  <>
                    Cemetery <br />
                    Information
                  </>
                }
              />
            </Link>
            <div className="relative self-stretch w-0.5 bg-grey-200" />
            <KioskCard
              KIOSKCardIconIcon={
                <KioskIconBenefitsAndServices1 className="!absolute !w-20 !h-20 !top-5 !left-5 !object-cover" />
              }
              cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset]"
              className="h-full w-full flex-auto"
              contentClassName="!mr-[-20.75px] !ml-[-20.75px]"
              state="default"
              text={
                <>
                  Benefits <br />
                  and Services
                </>
              }
            />
            <div className="relative self-stretch w-0.5 bg-grey-200" />
            <KioskCard
              KIOSKCardIconIcon={
                <KioskIconIntermentSchedule1 className="!absolute !w-20 !h-20 !top-5 !left-5 !object-cover" />
              }
              cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
              className="h-full w-full flex-auto"
              contentClassName="!mr-[-20.75px] !ml-[-20.75px]"
              state="default"
              text={
                <>
                  Interment <br />
                  Schedule
                </>
              }
            />
          </div>
        </div>

      </div>
      <div className="relative self-stretch w-full h-2 bg-kiosk-gold" />
      <div className="w-full h-[80px] flex items-center bg-kioskbrand-primarydarker gap-3 justify-center">
        <KioskIconPhone className="!relative !w-5 !h-5" color="white" />
        <p className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-white text-[18px] text-center">
          <span className="leading-[var(--KIOSK-body-line-height)] font-KIOSK-body [font-style:var(--KIOSK-body-font-style)] font-[number:var(--KIOSK-body-font-weight)] tracking-[var(--KIOSK-body-letter-spacing)] text-[14px]">
            Are you eligible for VA Survivors benefits? To find out contact the VA at{" "}
          </span>
          <span className="font-[number:var(--KIOSK-h3-font-weight)] leading-[var(--KIOSK-h3-line-height)] font-KIOSK-h3 [font-style:var(--KIOSK-h3-font-style)] tracking-[var(--KIOSK-h3-letter-spacing)] text-[12px]">
            1-800-827-1000
          </span>
        </p>
        <div className="relative w-5 h-5" />
      </div>
    </div>






  );
};
export default Home;