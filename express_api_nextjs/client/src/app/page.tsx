
'use client';

import { KioskCard } from "../components/KioskCard";
import { KioskBottom } from "../components/KioskBottom";

import { KioskIconBenefitsAndServices1 } from "../icons/KioskIconBenefitsAndServices1";
import { KioskIconCemeteryInformation4 } from "../icons/KioskIconCemeteryInformation4";
import { KioskIconGraveLocator1 } from "../icons/KioskIconGraveLocator1";
import { KioskIconIntermentSchedule1 } from "../icons/KioskIconIntermentSchedule1";

import { useEffect, useState } from 'react';
import Link from "next/link";

const Home = () => {
  const [scaleValue, setScaleValue] = useState(1);
  const [containerWidth, setContainerWidth] = useState(1920);

  useEffect(() => {
    // Function to calculate the scale value based on screen height
    const calculateScaleValue = () => {
      const screenHeight = window.innerHeight;
      const originalHeight = 1600; // The original height of the container
      const scale = screenHeight / originalHeight;
      setContainerWidth(1920 * scale);
      setScaleValue(scale);
    };

    // Calculate scale value on component mount
    calculateScaleValue();

    // Recalculate scale value on window resize
    window.addEventListener('resize', calculateScaleValue);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', calculateScaleValue);
  }, []);


  return (
    <div className="bg-[#f0f3f5] h-screen mx-auto" style={{ width: `${containerWidth}px` }}>
      <div className="bg-grey-100 w-[1920px] h-[1600px]" style={{ transform: `scale(${scaleValue})`, 'transformOrigin': 'top left' }}>

        <div className="w-full h-full absolute top-0 left-0 flex flex-col items-start">
          <div className={`flex w-full h-[152px] items-center p-14 relative rotate-180 !self-stretch !h-64 !w-full`}>
            <p
              className={`relative w-fit mt-[-1.00px] rotate-180 font-KIOSK-h3 font-[number:var(--KIOSK-h3-font-weight)] text-transparent text-[length:var(--KIOSK-h3-font-size)] text-right tracking-[var(--KIOSK-h3-letter-spacing)] leading-[var(--KIOSK-h3-line-height)] whitespace-nowrap [font-style:var(--KIOSK-h3-font-style)] !mt-[unset] !opacity-0`}
            >
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



          <div className="relative flex-1 self-stretch w-full grow bg-white flex flex-col items-start">
            <div className="relative self-stretch w-full h-px" />
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
              <div className="flex flex-col items-center justify-end gap-14 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-[200px] bg-[#ffffff]" />
                  <div className="flex flex-col items-start gap-14 px-0 py-28 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative self-stretch mt-[-1.00px] font-KIOSK-h1 font-[number:var(--KIOSK-h1-font-weight)] text-kiosk-text-secondary text-[length:var(--KIOSK-h1-font-size)] text-center tracking-[var(--KIOSK-h1-letter-spacing)] leading-[var(--KIOSK-h1-line-height)] [font-style:var(--KIOSK-h1-font-style)]">
                        Welcome to the
                      </div>
                      <div className="relative self-stretch [font-family:'Source_Sans_Pro',Helvetica] font-bold text-kioskbrand-primarydarker text-[64px] text-center tracking-[0] leading-[80px]">
                        Los Angeles National Cemetery
                      </div>
                      <p className="relative self-stretch font-KIOSK-h2 font-[number:var(--KIOSK-h2-font-weight)] text-kiosk-text-secondary text-[length:var(--KIOSK-h2-font-size)] text-center tracking-[var(--KIOSK-h2-letter-spacing)] leading-[var(--KIOSK-h2-line-height)] [font-style:var(--KIOSK-h2-font-style)]">
                        Tap on a card to get started
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="h-0.5 bg-grey-200 relative self-stretch w-full" />
                <div className="flex items-start relative flex-1 self-stretch w-full grow bg-white">
                  <Link href="/gravelocator">
                    <KioskCard
                      KIOSKCardIconIcon={
                        <KioskIconGraveLocator1 className="!absolute !w-40 !h-40 !top-5 !left-5 !object-cover" />
                      }
                      cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
                      className="!self-stretch !h-[unset] !flex-1 !shadow-[unset] !grow !w-[unset]"
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
                  <KioskCard
                    KIOSKCardIconIcon={
                      <KioskIconCemeteryInformation4 className="!absolute !w-40 !h-40 !top-5 !left-5 !object-cover" />
                    }
                    cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
                    className="!self-stretch !h-[unset] !flex-1 !shadow-[unset] !grow !w-[unset]"
                    contentClassName="!mr-[-20.75px] !ml-[-20.75px]"
                    state="default"
                    text={
                      <>
                        Cemetery <br />
                        Information
                      </>
                    }
                  />
                  <div className="relative self-stretch w-0.5 bg-grey-200" />
                  <KioskCard
                    KIOSKCardIconIcon={
                      <KioskIconBenefitsAndServices1 className="!absolute !w-40 !h-40 !top-5 !left-5 !object-cover" />
                    }
                    cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset]"
                    className="!self-stretch !h-[unset] !flex-1 !shadow-[unset] !grow !w-[unset]"
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
                      <KioskIconIntermentSchedule1 className="!absolute !w-40 !h-40 !top-5 !left-5 !object-cover" />
                    }
                    cardClassName="!rounded-[unset] !border-[unset] ![border-image:unset] !border-[unset]"
                    className="!self-stretch !h-[unset] !flex-1 !shadow-[unset] !grow !w-[unset]"
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
            <div className="h-2 bg-kiosk-gold relative self-stretch w-full" />
          </div>
          <KioskBottom className="!self-stretch !flex-[0_0_auto] !w-full" page="home-page" />
        </div>
        <div className="absolute w-[400px] h-[400px] top-14 left-[760px] bg-grey-100 rounded-[200px]" style={{ "left": "calc(50% - 200px)" }}>
          <img className="absolute w-[352px] h-[352px] top-6 left-6" alt="Logo" src="img/logo.png" />
        </div>

      </div>
    </div>
  );
};
export default Home;