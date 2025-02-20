
import AppStripePayment from "@/components/AppStripePayment";
import Link from "next/link";
import DistributorIdHiddenInputBox from "@/components/DistributorIdHiddenInputBox";
import MultiItemSelector from "@/components/MultiItemSelector";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
    return (
    /* Start of NextJs Page Layout */<>
            {
                dataModel.responseData_SftGetOrderById.OrderStatus == 5 &&
                dataModel.responseData_SftGetOrderById.TotalAfterTax > 0 && (
                    <div>
                        <AppStripePayment orderid={dataModel.responseData_SftGetOrderById.OrderId} amount={dataModel.responseData_SftGetOrderById.TotalAfterTax} />
                    </div>
                )
            }
            {
                !dataModel.responseData_SftGetOrderById.OrderStatus && (
                    <div>
                        <div className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/img/background12.png)' }}>
                            <div className="absolute top-0 left-0 rtl:right-0 bg-black w-full h-full opacity-30 transition-opacity duration-500 group-hover:opacity-80">
                            </div>
                            <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">

                                    <span className="">
                                        Checkout
                                    </span>

                                </h2>
                            </div>
                        </div>

                        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
                            <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                                <div className="md:w-full lg:w-3/5 flex h-full px-10 flex-col -mt-1.5">
                                    <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                                        Delivery information
                                    </h2>
                                    <form className="w-full mx-auto flex flex-col justify-center">
                                        <div className="flex flex-col space-y-4 lg:space-y-5">
                                            {
                                                !dataModel.responseData_SftGetOrderById.IsShippingAvailable_30683 && (
                                                    <div className="block flex">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                                                            Delivery Method: Pick Up Only
                                                        </label>
                                                    </div>
                                                )
                                            }
                                            {
                                                dataModel.responseData_SftGetOrderById.IsShippingAvailable_30683 && (
                                                    <div className="block">
                                                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                                                            Delivery Method
                                                        </label>
                                                        <div className="w-full" data-transfieldid="30684">
                                                            
                                                            <MultiItemSelector inputname="dataModel.responseData_SftGetOrderById.DeliveryMethod" items={dataModel.responseData_SftGetOrderById.LookupItems.SftDeliveryMethod} defaultvalue={1}/>

                                                            {/* <div className="flex" style={{ columnGap: '10px' }}>
                                                                <div className="flex-auto" style={{ width: '50%' }}>
                                                                    <div className="text-center cursor-pointer whitespace-nowrap py-3 px-4 md:px-5 w-full appearance-none transition duration-150 border text-xs lg:text-sm font-body min-h-12 duration-200 border-gray-300 focus:outline-none h-11 md:h-12 rounded-md">
                                                                        <i className="fa fa-check" style={{ paddingRight: '10px' }}>
                                                                        </i>
                                                                        {`Delivery Method`}
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                                <div className="w-full">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        Full Name *
                                                    </label>
                                                    <input id="ClientFullName" defaultValue={dataModel.responseData_SftGetOrderById.ClientFullName} name="dataModel.responseData_SftGetOrderById.ClientFullName" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="true" />
                                                    {/*
                <p className="my-2 text-xs text-red-600">
                  First name is required
                </p>
                */}
                                                </div>
                                            </div>
                                            <div className="block">
                                                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Address *
                                                </label>
                                                <input id="address" defaultValue={dataModel.responseData_SftGetOrderById.ShipToAddress} name="dataModel.responseData_SftGetOrderById.ShipToAddress" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="true" />
                                                {/*
              <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ShipToAddress']">
                Address is required
              </p>
              */}
                                            </div>
                                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 gap-5">
                                                <div className="w-full lg:w-1/2">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        Phone/Mobile *
                                                    </label>
                                                    <input id="phone" defaultValue={dataModel.responseData_SftGetOrderById.ClientPhone} name="dataModel.responseData_SftGetOrderById.ClientPhone" type="tel" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="true" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientPhone']">
                  Phone/Mobile is required
                </p>
                */}
                                                </div>
                                                <div className="w-full lg:w-1/2 lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        Email *
                                                    </label>
                                                    <input id="email" defaultValue={dataModel.responseData_SftGetOrderById.ClientEmail} name="dataModel.responseData_SftGetOrderById.ClientEmail" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="true" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientEmail']">
                  Email is required
                </p>
                */}
                                                </div>
                                            </div>
                                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 gap-5">
                                                <div className="w-full lg:w-1/2">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        City/Town *
                                                    </label>
                                                    <input id="ClientCity" defaultValue={dataModel.responseData_SftGetOrderById.ClientCity} name="dataModel.responseData_SftGetOrderById.ClientCity" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="false" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientCity']">
                  City/Town is required
                </p>
                */}
                                                </div>
                                                <div className="w-full lg:w-1/2 lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        State/Province *
                                                    </label>
                                                    <input id="ClientProvince" defaultValue={dataModel.responseData_SftGetOrderById.ClientProvince} name="dataModel.responseData_SftGetOrderById.ClientProvince" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="false" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientProvince']">
                  State/Province is required
                </p>
                */}
                                                </div>
                                            </div>
                                            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 gap-5">
                                                <div className="w-full lg:w-1/2">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        Country *
                                                    </label>
                                                    <input id="ClientCountry" defaultValue={dataModel.responseData_SftGetOrderById.ClientCountry} name="dataModel.responseData_SftGetOrderById.ClientCountry" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="false" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientCountry']">
                  Country is required
                </p>
                */}
                                                </div>
                                                <div className="w-full lg:w-1/2 lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                    <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                        Postcode *
                                                    </label>
                                                    <input id="zipCode" defaultValue={dataModel.responseData_SftGetOrderById.ClientPostcode} name="dataModel.responseData_SftGetOrderById.ClientPostcode" type="text" placeholder="" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md" aria-invalid="false" />
                                                    {/*
                <p className="my-2 text-xs text-red-600" ng-if="!dataModel.isHideValidation && dataModel.validationResultDto.DictOneToOneFieldNameAndErrorMessage['ClientPostcode']">
                  Postcode is required
                </p>
                */}
                                                </div>
                                            </div>
                                            <div className="relative flex items-center">
                                            </div>
                                            <div className="relative pt-3 xl:pt-6">
                                                <label className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                                                    Order Notes (Optional)
                                                </label>
                                                <textarea id="note" defaultValue={dataModel.responseData_SftGetOrderById.OrderNotes} name="dataModel.responseData_SftGetOrderById.OrderNotes" className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:border-heading placeholder-body" 
                                                    rows={4} placeholder="Notes about your order, e.g. special notes for delivery">
                                                </textarea>
                                            </div>
                                            <DistributorIdHiddenInputBox></DistributorIdHiddenInputBox>
                                            <div className="flex w-full" style={{ columnGap: '10px' }}>
                                                <button formAction={dataModel.SftSaveOrder}
                                                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400" style={{ backgroundColor: '#54ac5b', borderRadius: '24px', maxWidth: '250px' }}>
                                                    Place Order
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="md:w-full lg:w-2/5 md:ml-7 rtl:md:mr-7 lg:ml-10 rtl:lg:mr-10 xl:ml-14 rtl:xl:mr-14 flex flex-col px-10 h-full -mt-1.5">
                                    <div className="pt-12 md:pt-0 2xl:pl-4 rtl:2xl:pr-4">
                                        <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                                            Your Order
                                        </h2>
                                        {/* <div className="flex p-4 py-0 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                                            <span className="py-4">
                                                Distributor: {`Distributor`}
                                            </span>
                                        </div> */}
                                        <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                                            <span className="">
                                                Product
                                            </span>
                                            <span className="ml-auto rtl:mr-auto flex-shrink-0">
                                                Subtotal
                                            </span>
                                        </div>
                                        
                                        {/* ng-repeat="orderItemObj in dataModel.currentFormData.DictOneToManyFields['11456']" */}
                                        {dataModel.responseData_SftGetOrderById.SftOrderDetail.map((orderItem: any, index:any) => (
                                            <div key={index} className="flex gap-5 py-4 items-center lg:px-3 border-b border-gray-300">
                                                <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0 relative">
                                                <Image width={800} height={600} alt="" src={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}GetLatestFile.aspx?FileId=${orderItem.ProductImageId}&CurrentUserSessionId=6601508d-e7e0-4ed6-892b-879c834676af`} className="object-cover bg-gray-300" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                                </div>
                                                <h6 className="text-sm pl-3 rtl:pr-3 font-regular text-heading">
                                                    {dataModel.responseData_SftGetOrderById.LookupItems.SftProduct?.find((o:any) => o.Id == orderItem.ProductId)?.Display}
                                                    
                                                    <span className="px-2">
                                                        ×
                                                    </span>
                                                    {orderItem.ItemQty}
                                                </h6>
                                                <div className="flex ml-auto rtl:mr-auto text-heading text-sm pl-2 rtl:pr-2 flex-shrink-0">
                                                    ${orderItem.ItemGrandTotal}
                                                </div>
                                            </div>
                                        ))}


                                        <div className="flex gap-5 items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                                            Subtotal
                                            <span className="ml-auto rtl:mr-auto flex-shrink-0">
                                                ${dataModel.responseData_SftGetOrderById.ItemsSubTotal}
                                            </span>
                                        </div>
                                        {
                                            dataModel.responseData_SftGetOrderById.DeliveryMethod == 2 && (
                                                <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                                                    Shipping
                                                    <span className="ml-auto rtl:mr-auto flex-shrink-0">
                                                         ${dataModel.responseData_SftGetOrderById.FinalShippingCost_30871}
                                                    </span>
                                                </div>
                                            )
                                        }
                                        <div className="flex gap-5 items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                                            Tax
                                            <span className="ml-auto rtl:mr-auto flex-shrink-0">
                                                 ${dataModel.responseData_SftGetOrderById.TotalTax}
                                            </span>
                                        </div>
                                        <div className="flex gap-5 items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                                            Total
                                            <div className="ml-auto rtl:mr-auto flex-shrink-0">
                                                <div className="text-right" style={{ textAlign: 'right' }}>
                                                     ${dataModel.responseData_SftGetOrderById.TotalAfterTax}
                                                </div>
                                                {/* {
                                                    dataModel.responseData_SftGetOrderById.TotalAfterTaxOnClientCurrency && dataModel.responseData_SftGetOrderById.ClientCurrency && (
                                                        <div className="text-right text-sm text-gray-400 pt-2">
                                                            Approximately  {dataModel.responseData_SftGetOrderById.ClientCurrency} ${dataModel.responseData_SftGetOrderById.TotalAfterTaxOnClientCurrency}
                                                        </div>
                                                    )
                                                } */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
                            </div>
                        </div>


                    </div>
                )
            }

        </>
        /* End of NextJs Page Layout */
    );
};

