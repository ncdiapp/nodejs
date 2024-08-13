
"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { KioskTopNavigation } from "../../components/KioskTopNavigation";
import { KioskHeader } from "../../components/KioskHeader";
import { KioskTableHeader } from "../../components/KioskTableHeader";
import { KioskTableCell } from "../../components/KioskTableCell";
import Link from "next/link";

// Function to convert text to Proper Case
const toProperCase = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Function to format date as MM/DD/YYYY
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Client component
const Profiles = () => {
  const [data, setData] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const name = searchParams.get("name");
        console.log("")

        const res = await fetch(`/api/v1/profiles${name ? `?name=${name}` : ''}`);
        const resData = await res.json();
        setData(resData.profiles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfiles();
  }, [searchParams]);

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
                          <KioskTableHeader className="!w-[300px]" text="NAME" />
                          <KioskTableHeader className="!w-[150px]" text="BIRTH DATE" />
                          <KioskTableHeader className="!w-[150px]" text="INTERMENT" />
                          <KioskTableHeader className="!w-[300px]" text="WAR PERIOD" />
                          <KioskTableHeader className="!w-[300px]" text="SERVICE BRANCH" />
                          {/* <KioskTableHeader className="!w-[200px]" text="DECORATIONS" /> */}
                          {/* <div className="relative self-stretch w-[104px]" /> */}
                        </div>
                      </div>
                      <div className="relative self-stretch w-full h-1 bg-grey-200" />
                    </div>
                    <div className="flex items-start px-7 py-3 relative flex-1 self-stretch w-full grow bg-grey-100">
                      <div className="flex items-start gap-4 flex-1 self-stretch grow flex-col relative">
                        {/* t_honorsdisplay.honorsdisplay, t_servicebranchesdisplay.servicebranchesdisplay, t_warperiodsdisplay.warperiodsdisplay */}
                        {data.map((profile) => (
                          <div key={profile.decedent_id} className="flex items-start justify-center px-1 py-2 flex-1 self-stretch w-full grow bg-white rounded-xl border-1 border-solid border-grey-200 flex-col relative">
                            <Link href={`/profiledetails/${profile.decedent_id}`}>
                              <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                <KioskTableCell KIOSKVeteranTop="top-9.png" className="!w-[300px]" type="name" text={toProperCase(profile.full_name)} />
                                <KioskTableCell className="!w-[150px]" text={profile.date_of_birth} type="date" />
                                <KioskTableCell className="!w-[150px]" text={formatDate(profile.date_of_interment)} type="date" />
                                <KioskTableCell className="!w-[300px] !overflow-hidden" text={profile.warperiodsdisplay} type="name" />
                                <KioskTableCell className="!w-[300px] !overflow-hidden" text={profile.servicebranchesdisplay} type="name" />
                                {/* <KioskTableCell
                            className="!w-[300px] !overflow-hidden"
                            nameClassName="!opacity-0"
                            text={profile.honorsdisplay} 
                            type="name"
                          /> */}
                                {/* <KioskTableCell className="!flex-[0_0_auto]" type="icon" /> */}
                              </div>
                            </Link>
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




