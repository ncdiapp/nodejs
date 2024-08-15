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
const GraveLocator = () => {

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const [isSearchAllCemetery, setIsSearchAllCemetery] = useState(false);
    const inputRefIsSearchAllCemetery = useRef<HTMLInputElement>(null);

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
                                            text="Grave Locator"

                                        />

                                    </div>

                                </div>

                            </div>
                            <div className="absolute w-[120px] h-[120px] top-4 left-7 bg-grey-100 rounded-[60px]">
                                <img className="absolute w-24 h-24 top-3 left-3" alt="Logo" src="img/logo.png" />
                            </div>
                        </div>

                        <div className="w-full flex-auto">
                            <div className="w-full h-[45%] bg-white flex items-center px-28">

                                <div className="w-full">
                                    <div className="text-center text-[20px] font-bold [color:#212121] py-8">
                                        Search for a Veteran by entering their full or partial last name
                                    </div>
                                    <div className="w-full flex gap-2">
                                        <input className="flex-auto text-2xl pl-16 [color:#212121] rounded-md border-2 border-[#0071BB]"
                                            ref={inputRef}
                                            type="text" value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Enter Veteran Last Name"
                                        />

                                        <Link href={'/profiles?name=' + inputValue + '&searchallcemetery=' + isSearchAllCemetery} className="block">
                                            <button className="w-[120px] h-[60px] bg-[#0071BB] text-white rounded-md">Search</button>
                                        </Link>
                                    </div>
                                    <div className="text-center text-[16px] [color:#212121] py-8">
                                        <input className=""
                                            ref={inputRefIsSearchAllCemetery}
                                            type="checkbox" 
                                            checked={isSearchAllCemetery}
                                            onChange={(e) => setIsSearchAllCemetery(e.target.checked)}                                           
                                        /> 
                                        <span className="px-2">Search All Cemetery</span>
                                    </div>




                                </div>

                            </div>
                            <div className="w-full h-[55%] bg-[#DDE2E7]">

                                <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                    <Keyboard onKeyPress={handleKeyPress} />
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
export default GraveLocator;