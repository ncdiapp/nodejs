"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { KioskTopNavigation } from "../../components/KioskTopNavigation";
import { KioskHeader } from "../../components/KioskHeader";
import { KioskTableHeader } from "../../components/KioskTableHeader";
import { KioskTableCell } from "../../components/KioskTableCell";

import { KioskIconHome1 } from "../../icons/KioskIconHome1";
import Keyboard from '../../components/Keyboard';



// Client component
const ProfileDetails = () => {

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (key: string) => {
        setInputValue((prev) => prev + key);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

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
                                            text="Veteran and Location Information"

                                        />

                                    </div>

                                </div>

                            </div>
                            <div className="absolute w-[120px] h-[120px] top-4 left-7 bg-grey-100 rounded-[60px]">
                                <img className="absolute w-24 h-24 top-3 left-3" alt="Logo" src="img/logo.png" />
                            </div>
                        </div>

                        <div className="w-full h-[700px] flex-auto p-7">
                            <div className="w-full h-full bg-white border rounded-lg border-[#0071BB] flex flex-wrap">
                                <div className="w-[66%] h-full flex-auto min-w-64">
                                    <div className="w-full h-[66%] p-7 flex flex-col">
                                        <div className="w-full h-12 flex">
                                            <div className="w-12 h-12">
                                                <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                            </div>
                                            <div className="flex-auto h-full px-8">
                                                <div className="text-[#003E73] text-[32px] font-bold">
                                                    John B Smith
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-auto pt-10 flex gap-10">
                                            <div className="w-full flex-auto">
                                                <div className="w-full text-[#003E73] text-[20px] font-bold">
                                                    Last Recorded Information
                                                </div>
                                                <div className="w-full flex-auto">
                                                    <div className="w-full flex pt-6">
                                                        <div className="w-12 h-12 p-4 border border-gray-200 rounded-sm">
                                                            <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                                        </div>
                                                        <div className="flex-auto pl-4">
                                                            <div className="text-[#848E98] text-[12px] h-6">Service Period</div>
                                                            <div className="text-[#212121] text-[16px] h-6">06/17/1942 – 07/02/1945</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex pt-6">
                                                        <div className="w-12 h-12 p-4 border border-gray-200 rounded-sm">
                                                            <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                                        </div>
                                                        <div className="flex-auto pl-4">
                                                            <div className="text-[#848E98] text-[12px] h-6">Branch</div>
                                                            <div className="text-[#212121] text-[16px] h-6">US Navy</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex pt-6">
                                                        <div className="w-12 h-12 p-4 border border-gray-200 rounded-sm">
                                                            <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                                        </div>
                                                        <div className="flex-auto pl-4">
                                                            <div className="text-[#848E98] text-[12px] h-6">Rank</div>
                                                            <div className="text-[#212121] text-[16px] h-6">EM1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full flex-auto">
                                                <div className="w-full text-[#003E73] text-[20px] font-bold">
                                                    Location
                                                </div>
                                                <div className="w-full flex-auto">
                                                    <div className="w-full flex pt-6">
                                                        <div className="w-12 h-12 p-4 border border-gray-200 rounded-sm">
                                                            <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                                        </div>
                                                        <div className="flex-auto pl-4">
                                                            <div className="text-[#848E98] text-[12px] h-6">Cemetery</div>
                                                            <div className="text-[#212121] text-[16px] h-6">Los Angeles National Cemetery</div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex pt-6">
                                                        <div className="w-12 h-12 p-4 border border-gray-200 rounded-sm">
                                                            <img className="w-full" alt="Top" src="img/UnitedStatesAirForce.png" />
                                                        </div>
                                                        <div className="flex-auto pl-4">
                                                            <div className="text-[#848E98] text-[12px] h-6">Section / Row / Site</div>
                                                            <div className="text-[#212121] text-[16px] h-6">Section 199 / Row C / Site 12</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[34%] flex p-2 gap-2">
                                        <div className="w-full h-full bg-[#E9ECEF]">
                                            <img className="max-w-full max-h-full m-auto" alt="Top" src="https://s3-alpha-sig.figma.com/img/9141/c565/19cd122b8ccd46ba62dc2795c4e018e9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxmGSqtUGuNOCDLLgvV6WsFNGGyYMp71rDoZqGDx6BPyAY48Z20Zj~MZ~112jfzrmIs0zM6zk2~35nJDv3VakNVNKhUj9CaOUmTOxPugJ~ZP3gPESEi3067Wx7XeucaS5wO1Q7-YPDBYaOLQ6gwnAkqwr5pS00BtlZ2fyrRfIGxA-QGAef4Rq-4OEqg06WYU5Lk6Sy7d9W1DjWniVFJFGFh0n0su0sg20lQ4-jfuXIge7KiIGXrlfEGHOxueJJCr-xbbxUptguUOlBLp2sZ7mVayu~7P~uTsp4UMlQ79t~-3~nlWguF30VJZBmb3iWgZPJagoI-JaGx9O3LDtlD-dA__" />
                                        </div>
                                        <div className="w-full h-full bg-[#E9ECEF]">
                                            <img className="max-w-full max-h-full m-auto" alt="Top" src="https://s3-alpha-sig.figma.com/img/f0b8/9c66/9a46844ef8b7b014438d442f2df9c253?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwJJNwePIJbAyzucKx1TLtxjCWFqHydauB0lcgL3Y33xc~7yPIbJ-wg1tJctr5YUeC9M9EuYvXh~V01mbguspLagewoiMOUrU0MKuRn1Y4YGmNqm6gik8pk76XRCZav3saNUn6Q6xwtlv1m~eSeyMGl3pq9WTBGyYPiIRTb2JBsHKSTwFIDFrqONptHbHHCOIutVPcrLd5FXqDF~ZCaKkHyxPPaiBnxIvD-1vP-UDhMbQhcOywXynVGqx30tfmZsxywQ-3f1VldPg12pVTaDre9n5APd43MC7raaLnxswftjqTrbkdWooXTl-tAhVhr8LHzESQJAY5aVSMx3CSmEaQ__" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[34%] h-full flex-auto min-w-64 bg-[#0071BB] text-white">
                                    <div className="w-full h-[25%]">
                                        <div className="flex flex-col items-center"></div>
                                    </div>
                                    <div className="w-full h-[50%]">
                                        <div className="flex flex-col items-center"></div>
                                    </div>
                                    <div className="w-full h-[25%]">
                                        <div className="flex flex-col items-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative self-stretch w-full h-2 bg-kiosk-gold" />
                        <div className="bg-[#003E73] py-4 px-8 w-full">
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
export default ProfileDetails;