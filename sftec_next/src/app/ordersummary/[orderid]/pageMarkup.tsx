import Link from "next/link";
import Image from "next/image";

export default function PageMarkup({ dataModel }: { dataModel: any }) {
    return (
    /* Start of NextJs Page Layout */<>
            <div className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(/img/background12.png)' }}>
                <div className="absolute top-0 left-0 rtl:right-0 bg-black w-full h-full opacity-30 transition-opacity duration-500 group-hover:opacity-80">
                </div>
                <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">

                        <span className="">
                            Order
                        </span>

                    </h2>
                </div>
            </div>



            {
                !(dataModel.searchParams?.myorders == '1') && !(!dataModel.responseData_SftGetOrderById.OrderStatus || dataModel.responseData_SftGetOrderById.OrderStatus == 5) && (
                    <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">
                        <div className="border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8">
                            <span className="w-10 h-10 mr-3 rtl:ml-3 xl:mr-4 rtl:xl:ml-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-5 h-5 text-green-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" className="">
                                    </path>
                                </svg>
                            </span>
                            Thank you. Your order has been received.
                        </div>
                    </div>
                )
            }

            <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">


                <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">
                    {
                        dataModel.searchParams?.myorders == '1' && (

                            <div className="pb-8">
                                <div className="flex items-center chawkbazarBreadcrumb">
                                    <ol className="flex items-center w-full overflow-hidden">
                                        <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 rtl:first:pr-0 last:pr-0 rtl:last:pl-0 hover:text-heading">
                                            <Link href={`/myorders?distributorid=${dataModel.searchParams.distributorid || ''}`}
                                                className="underline hover:no-underline cursor-pointer">
                                                <i className="fa fa-arrow-left mr-2"></i>
                                                Go To My Orders
                                            </Link>
                                        </li>
                                    </ol>
                                    <div className="flex-auto">

                                    </div>

                                    {
                                        dataModel.responseData_SftGetOrderById?.InvoiceId_30789 && (
                                            <ol className="flex items-center w-60 overflow-hidden ng-scope" ng-if="dataModel.currentFormData.DictOneToOneFields['InvoiceId_30789']">
                                                <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 rtl:first:pr-0 last:pr-0 rtl:last:pl-0 hover:text-heading">
                                                    <a target={`invoice_${dataModel.responseData_SftGetOrderById?.InvoiceId_30789}`} href={`${process.env.NEXT_PUBLIC_MGT_BASE_URL}PrintView.aspx?MessageTemplateId=13433&TransactionId=9801&TransactionRId=${dataModel.responseData_SftGetOrderById?.InvoiceId_30789}&currentusersessionid=${process.env.NEXT_PUBLIC_ANONYMOUS_USER_SESSION_ID}`}
                                                        className="underline hover:no-underline cursor-pointer">
                                                        # Invoice <i className="fa fa-print ml-2"></i>
                                                    </a>
                                                </li>
                                            </ol>
                                        )
                                    }


                                </div>
                            </div>

                        )
                    }
                    <ul className="border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10">
                        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                            <span className="uppercase text-[11px] block text-body font-normal leading-5">
                                Order number:
                            </span>
                            {dataModel.responseData_SftGetOrderById?.OrderId}
                        </li>
                        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                            <span className="uppercase text-[11px] block text-body font-normal leading-5">
                                Date:
                            </span>
                            {dataModel.responseData_SftGetOrderById?.PlacedDate}
                        </li>
                        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                            <span className="uppercase text-[11px] block text-body font-normal leading-5">
                                Email:
                            </span>
                            {dataModel.responseData_SftGetOrderById?.ClientEmail}
                        </li>
                        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                            <span className="uppercase text-[11px] block text-body font-normal leading-5">
                                Total:
                            </span>
                            {dataModel.responseData_SftGetOrderById?.TotalAfterTax}
                        </li>
                    </ul>
                    <p className="text-heading text-sm md:text-base mb-8">
                        Pay with cash upon delivery. Delivery Method:
                        <span className="px-2">
                            {dataModel.responseData_SftGetOrderById.LookupItems.SftDeliveryMethod?.find((o:any) => o.Id === dataModel.responseData_SftGetOrderById?.DeliveryMethod)?.Display}
                        </span>
                    </p>
                    <p className="text-heading text-sm md:text-base mb-8">
                        Distributor:
                        <span className="px-2">
                            {dataModel.responseData_SftGetOrderById.LookupItems.SftDistributorAndLocation?.find((o:any) => o.Id === dataModel.responseData_SftGetOrderById?.DistributorId)?.Display}
                        </span>
                    </p>
                    <div className="pt-10 lg:pt-12">
                        <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">
                            Order
                            details:
                        </h2>
                        <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                            <span className="">
                                Product
                            </span>
                            <span className="ml-auto rtl:mr-auto flex-shrink-0">
                                Total
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
                            </div>
                        </div>

                        <div className="flex gap-5 py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                            <div className="">Order Notes</div>
                            <div className="">
                                <div className="text-sm pt-8 pl-4 font-normal text-heading">
                                {dataModel.responseData_SftGetOrderById.OrderNotes}
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

