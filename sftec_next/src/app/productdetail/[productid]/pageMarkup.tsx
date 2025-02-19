
import Link from "next/link";
import ImageViewer from "@/components/ImageViewer";
import AddToShoppingCartButton from "@/components/AddToShoppingCartButton";
import SendMesssageButton from "@/components/SendMesssageButton";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
  const images = [];

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo2) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo2}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }

  if (dataModel.responseData_GetAppForm9787_SFTProduct.Photo3) {
    images.push(`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetRegularImage.aspx?FileId=${dataModel.responseData_GetAppForm9787_SFTProduct.Photo3}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`)
  }
  

  const distributorCurrencyCode = '';
  return (
    /* Start of NextJs Page Layout */<>
  <div className="w-full">
    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
      <div className="relative w-full">
        <div id="ProductDetailContainer" className="w-full">
          <div style={{width: '100%', height: '100%'}} className="">
            <div className="w-full" style={{minHeight: '100vh'}}>
              <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start" style={{opacity: '1'}}>
                <div className="col-span-5 grid grid-cols-2 gap-2.5" style={{}}>
                  <div className="px-0 py-0 w-full col-span-2" data-internal-code="Default Container">
                    <ImageViewer images={images} className="">
                    </ImageViewer>
                  </div>
                  <div className="px-0 py-0 w-full col-span-2">
                    <div className="shadow-sm">
                      <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6">
                        <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
                          Product Details
                        </h2>
                        <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4">
                        </div>
                      </header>
                      <div style={{opacity: '1', height: 'auto'}} className="">
                        <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 pt-8 lg:pt-0">
                  <div className="pb-7 mb-7 border-b border-gray-300">
                    <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName} {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}
                    </h2>
                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory1?.find((o:any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog1)?.Display}
                    </p>
                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory2?.find((o:any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog2)?.Display}
                    </p>
                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftCategory3?.find((o:any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Catalog3)?.Display}
                    </p>
                    <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 mb-2">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftProductType?.find((o:any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.ProductType)?.Display}
                    </p>
                    <div className="flex items-center mt-8">
                      <div className="flex items-center">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.IsVisiblePrice_30951 == 1 && (
                        <div className="flex items-center">
                          <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                            {distributorCurrencyCode} ${(dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 || 0).toFixed(2)}
                          </div>
                          <span ng-if="dataModel.currentFormData.DictOneToOneFields['PriceUnit']" className="font-segoe text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl ltr:pl-2 rtl:pr-2">
                            / {dataModel.responseData_GetAppForm9787_SFTProduct.PriceUnit || 'Unit'}
                          </span>
                        </div>
                        )}
                            {dataModel.responseData_GetAppForm9787_SFTProduct.IsVisiblePrice_30951 != 1 && (
                        <div className="font-segoe text-gray-600 text-sm md:text-base text-red-500">
                          Please contact distributor for unit price.
                        </div>
                        )}
                      </div>
                    </div>
                    {(dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null) && (
                    <div className="flex items-center mt-8 text-gray-600" style={{columnGap: '20px'}}>
                      <div className="text-sm pr-2 md:pr-0 rtl:md:pl-0 lg:pr-2 rtl:lg:pl-2 2xl:pr-0 rtl:2xl:pl-0">
                        {dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 || 0} In Stock
                      </div>
                      <div className="text-sm pr-2 md:pr-0 rtl:md:pl-0 lg:pr-2 rtl:lg:pl-2 2xl:pr-0 rtl:2xl:pl-0">
                        <span className="pr-2">
                          Deliver Option:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 == 1 && (
                        <span className="">
                          Only pick up
                        </span>
                        )}
                              {dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 == 2 && (
                        <span className="">
                          Pick up or delivery
                        </span>
                        )}
                              {!dataModel.responseData_GetAppForm9787_SFTProduct.DeliveryOption_30663 && (
                        <span className="">
                          Not available
                        </span>
                        )}
                      </div>
                    </div>
                    )}
                  </div>
                  {(dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null)
                        && dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 > 0
                        && dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 > 0
                        && dataModel.responseData_GetAppForm9787_SFTProduct.IsPublished_30841 == 1
                        && dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 == 1 &&
                        (
                  <div className="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48 border-b border-gray-300 py-8">
                    <div className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400" style={{backgroundColor: '#54ac5b', borderRadius: '24px', maxWidth: '250px'}}>
                      <AddToShoppingCartButton cartitem={dataModel.cartItem} className="">
                      </AddToShoppingCartButton>
                    </div>
                  </div>
                  )}
                      {dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 !== null
                        &&
                        !(dataModel.responseData_GetAppForm9787_SFTProduct.UnitPriceOnDistributorCurrency_30864 > 0
                          && dataModel.responseData_GetAppForm9787_SFTProduct.AvailbleInventoryForSale_30660 > 0
                          && dataModel.responseData_GetAppForm9787_SFTProduct.IsPublished_30841 == 1
                          && dataModel.responseData_GetAppForm9787_SFTProduct.IsOnline_30842 == 1
                        ) &&
                        (
                  <div className="gap-x-4 pt-1 py-8 border-b border-gray-300">
                    <div className="text-red-500 flex items-center pb-2">
                      This Product Is Currently Unavailable
                    </div>
                    <div className="relative submenu-wrapper cursor-pointer py-2">
                      <SendMesssageButton productid={dataModel.responseData_GetAppForm9787_SFTProduct.ProductId}>
                        <button className="text-[13px] md:text-sm leading-4 flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400" style={{backgroundColor: '#54ac5b', borderRadius: '24px', maxWidth: '250px'}}>
                          <span className="py-2 3xl:px-8">
                            <i className="fa fa-phone" style={{marginRight: '5px'}}>
                            </i>
                            Get a Quote
                          </span>
                        </button>
                      </SendMesssageButton>
                    </div>
                  </div>
                  )}
                  <div className="py-6">
                    <ul className="text-sm space-y-5 pb-1">
                      {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Product Code:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.ProductCode}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Product Name:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.ProductName}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Brand && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Brand:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.LookupItems.SftBrand?.find((o:any) => o.Id === dataModel.responseData_GetAppForm9787_SFTProduct.Brand)?.Display}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Width && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Width:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Width}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Length && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Length:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Length}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Diameter && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Diameter:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Diameter}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.PlateDiameter && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          PlateDiameter:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.PlateDiameter}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Dimension && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Dimension:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Dimension}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Space && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Space:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Space}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Density && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Density:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Density}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Color && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Color:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Color}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.CrossSectionArea && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          CrossSectionArea:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.CrossSectionArea}
                      </li>
                      )}
                          {dataModel.responseData_GetAppForm9787_SFTProduct.Weight && (
                      <li className="">
                        <span className="font-semibold text-heading inline-block pr-2">
                          Weight:
                        </span>
                        {dataModel.responseData_GetAppForm9787_SFTProduct.Weight}
                      </li>
                      )}
                    </ul>
                  </div>
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
};

