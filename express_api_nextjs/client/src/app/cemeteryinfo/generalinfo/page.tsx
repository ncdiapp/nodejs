"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { KioskTopNavigation } from "../../../components/KioskTopNavigation";
import { KioskHeader } from "../../../components/KioskHeader";
import { KioskIconHome1 } from "../../../icons/KioskIconHome1";
import { KioskIconArrow2 } from "../../../icons/KioskIconArrow2";
import { KioskIconCemeteryInformation4 } from "../../../icons/KioskIconCemeteryInformation4";
import { KioskIconPrint } from "../../../icons/KioskIconPrint";
import { KioskIconBenefitsAndServices } from "../../../icons/KioskIconBenefitsAndServices";
import { KioskIconIntermentSchedule } from "../../../icons/KioskIconIntermentSchedule";
import { KioskIconPhone } from "../../../icons/KioskIconPhone";

const toProperCase = (text: string): string => {
    return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

// Client component
const CemeteryInfo = () => {
    const CEMETERY_ID = process.env.NEXT_PUBLIC_CEMETERY_ID
    

    const [cemetery, setCemetery] = useState<any>([]);

    const fetchCemeteryInfo = async() => {
        try {
            const res = await fetch(`/api/v1/cemeteryinfo/${CEMETERY_ID}`);
            const resData = await res.json();
            setCemetery(resData.cemetery);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCemeteryInfo();
    }, []);

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

                        <div className="w-full h-[700px] flex-auto flex">
                            <div className="w-full h-full overflow-y-auto p-5" style={{
                                scrollbarWidth: 'thin', 
                                scrollbarColor: '#ccc #f1f1f1'
                            }}>
                                <div className="w-full p-5 pt-10  border-b-2 border-gray-200">
                                    <div className="w-full text-[20px] text-[#003E73] font-bold">
                                        Office Hours:
                                    </div>
                                    <div className="w-full text-[16px] text-[#212121] py-5">
                                        Monday thru Friday 8:00 a.m. to 4:30 p.m. <br></br>
                                        Closed federal holidays except Memorial Day and Veterans Day.
                                    </div>
                                </div>
                                <div className="w-full p-5 pt-10  border-b-2 border-gray-200">
                                    <div className="w-full text-[20px] text-[#003E73] font-bold">
                                        Visitation Hours:
                                    </div>
                                    <div className="w-full text-[16px] text-[#212121] py-5">
                                        Open daily 8:00 a.m. to 5:00 p.m. except Memorial Day 8:00 a.m. to 7:00 p.m.
                                    </div>
                                </div>
                                <div className="w-full p-5 pt-10 border-b-2 border-gray-200">
                                    <div className="w-full text-[20px] text-[#003E73] font-bold">
                                        Phone Numbers:
                                    </div>
                                    <div className="w-full text-[16px] text-[#212121] py-5">
                                        <div className="w-full flex-auto">
                                            <div className="w-full flex pt-6">
                                                <div className="w-12 h-12 p-3 border border-gray-200 rounded-sm">
                                                    <KioskIconPhone color="#003E73" className="!relative !w-5 !h-5 !-rotate-180" />
                                                </div>
                                                <div className="flex-auto pl-4">
                                                    <div className="text-[#848E98] text-[12px] h-6">Phone</div>
                                                    <div className="text-[#212121] text-[15px] h-6">{cemetery?.phone_number}</div>
                                                </div>
                                            </div>
                                            <div className="w-full flex pt-6">
                                                <div className="w-12 h-12 p-3 border border-gray-200 rounded-sm">
                                                    <KioskIconPhone color="#003E73" className="!relative !w-5 !h-5 !-rotate-180" />
                                                </div>
                                                <div className="flex-auto pl-4">
                                                    <div className="text-[#848E98] text-[12px] h-6">Fax</div>
                                                    <div className="text-[#212121] text-[15px] h-6">{cemetery?.phone_number}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-5 pt-10  border-b-2 border-gray-200">
                                    <div className="w-full text-[20px] text-[#003E73] font-bold">
                                        Mailing Address:
                                    </div>
                                    <div className="w-full  py-5">
                                        <div className="w-full flex pt-6">
                                            <div className="w-12 h-12 p-3 border border-gray-200 rounded-sm">
                                                <KioskIconCemeteryInformation4 className="!relative !w-5 !h-5 !-rotate-180" />
                                            </div>
                                            <div className="flex-auto pl-4">
                                                <div className="text-[#212121] text-[15px]">
                                                    {cemetery?.address1} <br />
                                                    {cemetery?.address2}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-5 pt-10">
                                    <div className="w-full text-[12] text-[#212121]">
                                        This touch screen was developed to enchance service to visitors who wish to locate gravesites after or during business hours when staff members are not available.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full p-2">
                                <div className="w-full h-full overflow-hidden rounded-md">
                                    <img className="w-full" alt="" src="../../img/CemeteryInfo.png" />
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