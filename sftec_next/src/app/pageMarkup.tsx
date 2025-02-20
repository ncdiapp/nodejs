import Link from "next/link";
import Image from "next/image";
export default function PageMarkup({ dataModel }: { dataModel: any }) {
  return (

    /* Start of NextJs Page Layout */<>
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <span className="">
        </span>
        <div id="SubPageContainer_TiJkGx2188" className="w-full" data-iswebpage="true" data-component-element-id="gBbWNX6896">
          <div style={{ width: '100%', height: '100%' }} className="">
            <div className="flex pt-8 pb-16 lg:pb-20">
              <div className="w-full">
                <div className="items-center mb-7">
                  <div className="hidden sm:block w-full" style={{ height: '500px' }}>
                    <div className="flex h-full" style={{ columnGap: '10px' }}>
                      <div className="flex-auto h-full" style={{ width: '65%' }}>
                        <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[0]?.Name}-${dataModel.responseData_Sft_Category1List[0].Category1Id}?distributorid=${dataModel.searchParams?.distributorid || ''}`} className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="SFT-Bar®GFRP REBAR">
                          <div className="w-full h-full">
                            <div className="w-full h-full bg-no-repeat bg-center bg-cover">
                              <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[0]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                          </div>
                          <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                            {dataModel.responseData_Sft_Category1List[0]?.Name}
                          </div>
                        </Link>
                      </div>
                      <div className="flex h-full" style={{ width: '35%', flexDirection: 'column', rowGap: '10px' }}>
                        <div className="flex-auto" style={{ width: '100%', height: '45%' }}>
                          <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[1]?.Name}-${dataModel.responseData_Sft_Category1List[1].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="SFTec PRODUCTS">
                            <div className="w-full h-full">
                              <div className="w-full h-full bg-no-repeat bg-center bg-cover">
                                <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[1]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                            </div>
                            <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                              {dataModel.responseData_Sft_Category1List[1]?.Name}
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-auto" style={{ width: '100%', height: '45%' }}>
                          <div className="flex-auto" style={{ width: '50%', height: '100%' }}>
                            <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[2]?.Name}-${dataModel.responseData_Sft_Category1List[2].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="BUILDING MATERIALS">
                              <div className="w-full h-full">
                                <div className="w-full h-full bg-no-repeat bg-center bg-cover">
                                  <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[2]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                              </div>
                              <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                                {dataModel.responseData_Sft_Category1List[2]?.Name}
                              </div>
                            </Link>
                          </div>
                          <div className="" style={{ width: '50%', height: '100%' }}>
                            <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[3]?.Name}-${dataModel.responseData_Sft_Category1List[3].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full h-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="CONCRETE & MASONRY">
                              <div className="w-full h-full">
                                <div className="w-full h-full bg-no-repeat bg-center bg-cover">
                                  <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[3]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                              </div>
                              <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                                {dataModel.responseData_Sft_Category1List[3]?.Name}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block sm:hidden w-full">
                    <div className="flex" style={{ flexWrap: 'wrap' }}>
                      <div className="flex-auto" style={{ width: '50%' }}>
                        <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[0]?.Name}-${dataModel.responseData_Sft_Category1List[0].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="SFT-Bar®GFRP REBAR">
                          <div className="w-full">
                            <div className="w-full bg-no-repeat bg-center bg-cover h-[250px]">
                              <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[0]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                          </div>
                          <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                            {dataModel.responseData_Sft_Category1List[0]?.Name}
                          </div>
                        </Link>
                      </div>
                      <div className="flex-auto" style={{ width: '50%' }}>
                        <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[1]?.Name}-${dataModel.responseData_Sft_Category1List[1].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="SFTec PRODUCTS">
                          <div className="w-full">
                            <div className="w-full bg-no-repeat bg-center bg-cover h-[250px]">
                              <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[1]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                          </div>
                          <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                            {dataModel.responseData_Sft_Category1List[1]?.Name}
                          </div>
                        </Link>
                      </div>
                      <div className="flex-auto" style={{ width: '50%' }}>
                        <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[2]?.Name}-${dataModel.responseData_Sft_Category1List[2].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="BUILDING MATERIALS">
                          <div className="w-full">
                            <div className="w-full bg-no-repeat bg-center bg-cover h-[250px]">
                              <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[2]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                          </div>
                          <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                            {dataModel.responseData_Sft_Category1List[2]?.Name}
                          </div>
                        </Link>
                      </div>
                      <div className="flex-auto" style={{ width: '50%' }}>
                        <Link href={`/productlist/${dataModel.responseData_Sft_Category1List[3]?.Name}-${dataModel.responseData_Sft_Category1List[3].Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="flex w-full group box-border overflow-hidden cursor-pointer items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" title="CONCRETE & MASONRY">
                          <div className="w-full">
                            <div className="w-full bg-no-repeat bg-center bg-cover h-[250px]">
                              <Image width={800} height={600} alt="" className="w-full h-full bg-cover object-cover" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${dataModel.responseData_Sft_Category1List[3]?.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-15 transition duration-200 hover:opacity-40">
                          </div>
                          <div className="text-white absolute bottom-2 left-2 text-lg font-semibold" style={{ bottom: '10px', left: '20px' }}>
                            {dataModel.responseData_Sft_Category1List[3]?.Name}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full py-7">
                      <h1 className="text-heading text-lg font-bold hidden lg:inline-flex pb-1">
                        <span className="">
                          Browse Our Catalog
                        </span>
                      </h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                      {
                        dataModel.responseData_Sft_Category1List?.filter && dataModel.responseData_Sft_Category1List?.filter((_: any, index: any) => index > 3)
                          .map((categoryObj: any, index: any) => {
                            return (
                              <Link href={`/productlist/${categoryObj.Name}-${categoryObj.Category1Id}?distributorid=${dataModel.searchParams.distributorid || ''}`} key={index} className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" role="button" title="HEATING & COOLING">
                                <div className="flex mb-3 md:mb-3.5">
                                  <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }} className="">
                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }} className="">
                                      <Image width={800} height={600} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} className="" />
                                    </span>
                                    <Image width={800} height={600} alt="" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${categoryObj.Image}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none object-cover" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    <noscript className="">
                                    </noscript>
                                  </span>
                                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start">
                                  </div>
                                </div>
                                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                                    {categoryObj.Name}
                                  </h2>
                                </div>
                              </Link>
                            );
                          })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    /* End of NextJs Page Layout */
  );
}

