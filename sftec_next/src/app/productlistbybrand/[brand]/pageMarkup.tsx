
import Link from "next/link";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
  return (
    /* Start of NextJs Page Layout */<>
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div id="SubPageContainer_lrbGrU6571" className="w-full" data-iswebpage="true" data-component-element-id="gBbWNX6896">
          <div style={{ width: '100%', height: '100%' }} className="">
            <div className="flex pt-8 pb-16 lg:pb-20">
              <div className="w-full">
                <div className="w-full">
                  <div className="flex items-center mb-7" style={{ columnGap: '10px' }}>
                    <h1 className="text-heading text-lg font-bold hidden lg:inline-flex pb-1">
                      <span className="">
                        <span className="">
                          {dataModel.pageName}
                        </span>
                      </span>
                    </h1>
                    <div className="flex-shrink-0 text-body text-xs text-gray-500 md:text-sm leading-4 pr-4 md:mr-6 pl-5 hidden lg:block">
                      {dataModel.responseData_Sft_ProductSearch?.length || 0} items
                    </div>
                    <div className="hidden lg:block" style={{ flex: '1 1 auto' }}>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                    {/* StatementBegin_StartLoop: uUbsdC9128 */}
                    {dataModel.responseData_Sft_ProductSearch.map((loopItemObj:any, index:any) => (
                      /* StatementEnd_StartLoop */
                      <Link key={index} href={`/productdetail/${(loopItemObj.ProductName || '').replaceAll('#', '').replaceAll('/', '')}-${loopItemObj.ProductId}?distributorid=${dataModel.searchParams.distributorid || ''}`} className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white" data-internal-code="Loop Content Container">
                        <div className="flex mb-3 md:mb-3.5">
                          <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }} className="">
                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }} className="">
                             <Image width={800} height={600} alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} className="object-cover" />
                            </span>
                            <Image width={800} height={600} alt="" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${loopItemObj.Photo}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            <noscript className="">
                            </noscript>
                          </span>
                          <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start">
                          </div>
                        </div>
                        <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                          <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                            {loopItemObj.ProductName}
                            {loopItemObj.ProductCode}
                          </h2>
                          <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate text-gray-500">
                            <span className="">
                              {loopItemObj.Brand}
                            </span>
                            <span className="">
                              {loopItemObj.Catalog3}
                            </span>
                          </p>
                          <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
                            {loopItemObj.IsVisiblePrice == 'Yes' && (
                              <span className="">
                                ${loopItemObj.UnitPriceCAD}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                      /* StatementBegin_EndLoop: uUbsdC9128 */
                    ))}
                    {/* StatementEnd_EndLoop */}
                  </div>
                  <div className="text-center pt-8 xl:pt-14">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-5 w-full" data-internal-code="Default Container">
      </div>
    </>
    /* End of NextJs Page Layout */
  );
};

