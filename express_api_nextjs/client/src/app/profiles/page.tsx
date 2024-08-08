"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { KioskTopNavigation } from "../../components/KioskTopNavigation";
import { KioskHeader } from "../../components/KioskHeader";
import { KioskTableHeader } from "../../components/KioskTableHeader";
import { KioskTableCell } from "../../components/KioskTableCell";


const toProperCase = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};


// Client component
const Profiles = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("/api/v1/profiles");
        const resData = await res.json();
        setData(resData.profiles);
        return resData;
      } catch (error) {
        throw error;
      }
    };
    fetchProfiles();
  }, []);

  return (
    <section className="w-full">
      <div className="w-full">
        <div className="bg-[#f0f3f5] flex flex-row justify-center w-full">
          <div className="bg-grey-100 w-[1400px] h-full">
            <div className="relative h-full">
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
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-white">
                      <div className="flex flex-col items-start px-14 py-0 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex items-start px-2 py-4 relative self-stretch w-full flex-[0_0_auto]">
                          <KioskTableHeader className="!w-[420px]" text="NAME" />
                          <KioskTableHeader className="!flex-1 !grow !w-[unset]" text="BIRTH DATE" />
                          <KioskTableHeader className="!flex-1 !grow !w-[unset]" text="INTERMENT" />
                          <KioskTableHeader className="!flex-1 !grow !w-[unset]" text="WAR PERIOD" />
                          <KioskTableHeader className="!flex-1 !grow !w-[unset]" text="SERVICE BRANCH" />
                          <KioskTableHeader className="!flex-1 !grow !w-[unset]" text="DECORATIONS" />
                          <div className="relative self-stretch w-[104px]" />
                        </div>
                      </div>
                      <div className="relative self-stretch w-full h-1 bg-grey-200" />
                    </div>
                    <div className="flex items-start px-7 py-3 relative flex-1 self-stretch w-full grow bg-grey-100">
                      <div className="flex items-start gap-4 flex-1 self-stretch grow flex-col relative">
                        
                        {data.map((profile) => (
                          <div key={profile.decedent_id} className="flex items-start justify-center px-1 py-2 flex-1 self-stretch w-full grow bg-white rounded-xl border-1 border-solid border-grey-200 flex-col relative">
                          <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                            <KioskTableCell KIOSKVeteranTop="top-9.png" className="!w-[420px]" type="name" text={toProperCase(profile.full_name)} />
                            <KioskTableCell className="!flex-1 !grow !w-[unset]" text="07/05/2016" type="date" />
                            <KioskTableCell className="!flex-1 !grow !w-[unset]" text="15/08/2017" type="date" />
                            <KioskTableCell className="!flex-1 !grow !w-[unset]" text="KOREA" type="date" />
                            <KioskTableCell className="!flex-1 !grow !w-[unset]" text="US NAVY" type="date" />
                            <KioskTableCell
                              className="!flex-1 !grow !w-[unset]"
                              nameClassName="!opacity-0"
                              text="15/08/2017"
                              type="date"
                            />
                            <KioskTableCell className="!flex-[0_0_auto]" type="icon" />
                          </div>
                        </div>

                         
                        ))}
                        
                      </div>
                    </div>
                  </div>
                  <div className="relative self-stretch w-full h-2 bg-kiosk-gold" />
                </div>

              </div>
              <div className="absolute w-[120px] h-[120px] top-4 left-7 bg-grey-100 rounded-[60px]">
                <img className="absolute w-24 h-24 top-3 left-3" alt="Logo" src="img/logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mb-10">
        {data.map((profile) => (
          <div key={profile.decedent_id}>
            <h1 className="text-3xl">{toProperCase(profile.full_name)}</h1>
          </div>
        ))}
      </div>

      <Link
        href=""
        className="p-4 border bg-white text-black rounded-md"
      >
        Test
      </Link> */}
    </section>
  );
};
export default Profiles;