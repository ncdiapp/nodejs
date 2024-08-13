"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { KioskTopNavigation } from "../../components/KioskTopNavigation";
import { KioskHeader } from "../../components/KioskHeader";
import { KioskIconHome1 } from "../../icons/KioskIconHome1";
import { KioskIconArrow2 } from "../../icons/KioskIconArrow2";
import { KioskIconCemeteryInformation4 } from "../../icons/KioskIconCemeteryInformation4";
import { KioskIconPrint } from "../../icons/KioskIconPrint";
import { KioskIconBenefitsAndServices } from "../../icons/KioskIconBenefitsAndServices";
import { KioskIconIntermentSchedule } from "../../icons/KioskIconIntermentSchedule";


// Client component
const CemeteryInfo = () => {   

    return (
        <section className="w-full h-screen [font-family:'Source_Sans_Pro',Helvetica]">
            <div className="w-full h-full">
                <div className="bg-[#f0f3f5] flex flex-row justify-center w-full h-full">
                    <div className="flex flex-col bg-grey-100 w-[1400px] h-full">
                        <div className="relative h-[160px]">
                            <div className="flex flex-col w-[1400px] h-full items-start absolute top-0 left-0">
                                <KioskTopNavigation className="!self-stretch !w-full" />
                                <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow bg-white">
                                    <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                                        <KioskHeader
                                            className="!self-stretch !relative !w-full"
                                            divClassName="!w-[1464px]"
                                            headingWrapperClassName="!w-[1400px]"
                                            text="Cemetery Information"

                                        />

                                    </div>

                                </div>

                            </div>
                            <div className="absolute w-[120px] h-[120px] top-4 left-7 bg-grey-100 rounded-[60px]">
                                <img className="absolute w-24 h-24 top-3 left-3" alt="Logo" src="../img/logo.png" />
                            </div>
                        </div>

                        <div className="w-full h-[700px] flex-auto">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="w-full h-[400px] p-5 flex gap-5">

                                    <Link href="cemeteryinfo/generalinfo"
                                        className="w-full h-full flex-auto border border-[#003E73] rounded-md">
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className="p-5"><KioskIconCemeteryInformation4 className="!relative !w-24 !h-24" /></div>
                                            <div className="text-lg text-[#003E73] font-semibold">General Information</div>
                                        </div>
                                    </Link>
                                    <Link href="cemeteryinfo/generalinfo" className="w-full h-full flex-auto border border-[#003E73] rounded-md">
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className="p-5"><KioskIconBenefitsAndServices className="!relative !w-24 !h-24" /></div>
                                            <div className="text-lg text-[#003E73] font-semibold">Military Funeral Honors</div>
                                        </div>
                                    </Link>
                                    <Link href="cemeteryinfo/generalinfo" className="w-full h-full flex-auto border border-[#003E73] rounded-md">
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className="p-5"><KioskIconPrint className="!relative !w-24 !h-24" /></div>
                                            <div className="text-lg text-[#003E73] font-semibold">Floral/Grounds Policy</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative self-stretch w-full h-2 bg-kiosk-gold" />
                        <div className="bg-[#003E73] py-4 px-6 w-full flex gap-4">
                            <Link className="w-40 block mx-auto" href="/">
                                <div className="flex gap-3 pl-6 pr-3 py-3 rotate-180 rounded-lg bg-kioskbrand-primary-default relative">
                                    <div className="font-KIOSK-h3 w-fit mt-[-1.00px] tracking-[var(--KIOSK-h3-letter-spacing)] text-[length:var(--KIOSK-h3-font-size)] [font-style:var(--KIOSK-h3-font-style)] text-white rotate-180 font-[number:var(--KIOSK-h3-font-weight)] text-right whitespace-nowrap leading-[var(--KIOSK-h3-line-height)] relative">
                                        Main Menu
                                    </div>
                                    <KioskIconHome1 className="!relative !w-5 !h-5 !-rotate-180" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};
export default CemeteryInfo;