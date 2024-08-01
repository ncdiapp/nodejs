'use client';

import { useAppContext } from '../contexts/AppContext';
import { useState, useEffect } from 'react';
import PlaceOrderOrderSummary from './PlaceOrderOrderSummary';
import Image from "next/image";
import {
    GetFormData,
    ExcuteTransactionCommonad,
} from "../services/mgtService";
import { getRegularImageUrlById, getCurrentDistributorId } from '../lib/utils';


const PlaceOrderContainer = () => {
    const appContext = useAppContext();
    const orderObj = appContext.eCommerceModel.orderObj;
    const formData = orderObj?.orderFormData;
    const updateOrderFormData = appContext.eCommerceModel.updateOrderFormData;

    //const [formData, updateOrderFormData] = useState<any>(orderObj?.orderFormData);


    const dataModel: any = {};
    const isCheckout = !dataModel?.currentFormData?.RootPrimaryKeyValue || dataModel?.currentFormData?.DictOneToOneFields['OrderStatus'] == 5;
    const isOrder = dataModel?.currentFormData?.RootPrimaryKeyValue && dataModel?.currentFormData?.DictOneToOneFields['OrderStatus'] != 5;



    const markChange = (fieldId?: any) => {
        // Implement markChange logic here
    };

    const makePaymentByStripe = () => {
        appContext.eCommerceModel.MakePaymentByStripe();
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        formData.DictOneToOneFields[name] = value;
        updateOrderFormData(formData);
        markChange();
    };

    const handleDeliveryMethodClick = (id: any) => {
        formData.DictOneToOneFields['DeliveryMethod'] = id;
        updateOrderFormData(formData);
        markChange(30684);
    };

    const getDateTimeDisplay = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getDDLFieldDisplayTextValue = (items: any, value: any) => {
        const item = items?.find((item: any) => item.Id === value);
        return item ? item.Display : value || '';
    };

    const isProcessingPayment = appContext.eCommerceModel.isProcessingPayment;

    const [isBusy, setIsBusy] = useState(false);
    const [showBusiloaderPopup, setShowBusiloaderPopup] = useState(false);

    useEffect(() => {
        // Show the popup when either isProcessingPayment or isBusy is true
        setShowBusiloaderPopup(isProcessingPayment || isBusy);
    }, [isProcessingPayment, isBusy]);




    return (
        <>


            <div
                className="justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover">
                <Image
                    alt="Checkout"
                    //layout="fill"
                    width={1920}
                    height={400}
                    //objectPosition="center"
                    className="w-full h-full absolute top-0 left-0"
                    src="/background12.png">
                </Image>
                <div className="absolute top-0 left-0 bg-black w-full h-full opacity-30 transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                        {isCheckout && <span>Checkout</span>}
                        {isOrder && <span>Order</span>}
                    </h2>
                </div>
            </div>

            {!orderObj ? (
                <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
                    <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                        Checkout session out of date. Please go to your cart and checkout again.
                    </div>
                </div>
            ) :
                (!formData?.RootPrimaryKeyValue || formData?.DictOneToOneFields?.OrderStatus == 5) ? (
                    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
                        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
                            <div className="md:w-full lg:w-3/5 flex h-full flex-col -mt-1.5">
                                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">Delivery information</h2>
                                <form className="w-full mx-auto flex flex-col justify-center" noValidate>
                                    <div className="flex flex-col space-y-4 lg:space-y-5">
                                        {!formData?.DictOneToOneFields?.IsShippingAvailable_30683 ? (
                                            <div className="block">
                                                <label htmlFor="DeliveryMethod" className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                                                    Delivery Method: Pick Up Only
                                                </label>
                                            </div>
                                        ) : (
                                            <div className="block">
                                                <label htmlFor="DeliveryMethod" className="block text-gray-600 font-semibold text-sm leading-none mb-3">
                                                    Delivery Method
                                                </label>
                                                <div className="w-full">
                                                    <div className="flex" style={{ columnGap: '10px' }}>
                                                        {formData?.dictFieldEntityDataSource['30684'].items.map((lookupItemDto: any) => (
                                                            <div key={lookupItemDto.Id} className="flex-auto" style={{ width: '50%' }}>
                                                                <div
                                                                    className={`text-center cursor-pointer whitespace-nowrap py-3 px-4 md:px-5 w-full appearance-none transition border text-xs lg:text-sm font-body min-h-12 duration-200 border-gray-300 focus:outline-none h-11 md:h-12 rounded-md ${lookupItemDto.Id === formData?.DictOneToOneFields?.DeliveryMethod ? 'bg-gray-150' : ''
                                                                        }`}
                                                                    onClick={() => handleDeliveryMethodClick(lookupItemDto.Id)}
                                                                >
                                                                    {lookupItemDto.Id === formData?.DictOneToOneFields?.DeliveryMethod && (
                                                                        <i className="fa fa-check" style={{ paddingRight: '10px' }}></i>
                                                                    )}
                                                                    {lookupItemDto.Display}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                            <div className="w-full">
                                                <label htmlFor="ClientFullName" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Full Name *
                                                </label>
                                                <input
                                                    id="ClientFullName"
                                                    name="ClientFullName"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientFullName || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientFullName && (
                                                    <p className="my-2 text-xs text-red-600">First name is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="block">
                                            <label htmlFor="ShipToAddress" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                Address *
                                            </label>
                                            <input
                                                id="ShipToAddress"
                                                name="ShipToAddress"
                                                type="text"
                                                placeholder=""
                                                value={formData?.DictOneToOneFields?.ShipToAddress || ''}
                                                onChange={handleInputChange}
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="true"
                                            />
                                            {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ShipToAddress && (
                                                <p className="my-2 text-xs text-red-600">Address is required</p>
                                            )}
                                        </div>
                                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                            <div className="w-full lg:w-1/2">
                                                <label htmlFor="ClientPhone" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Phone/Mobile *
                                                </label>
                                                <input
                                                    id="ClientPhone"
                                                    name="ClientPhone"
                                                    type="tel"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientPhone || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientPhone && (
                                                    <p className="my-2 text-xs text-red-600">Phone/Mobile is required</p>
                                                )}
                                            </div>
                                            <div className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                <label htmlFor="ClientEmail" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Email *
                                                </label>
                                                <input
                                                    id="ClientEmail"
                                                    name="ClientEmail"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientEmail || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientEmail && (
                                                    <p className="my-2 text-xs text-red-600">Email is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                            <div className="w-full lg:w-1/2">
                                                <label htmlFor="ClientCity" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    City/Town *
                                                </label>
                                                <input
                                                    id="ClientCity"
                                                    name="ClientCity"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientCity || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientCity && (
                                                    <p className="my-2 text-xs text-red-600">City/Town is required</p>
                                                )}

                                                <p className="my-2 text-xs text-red-600">{formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientCity}</p>

                                            </div>
                                            <div className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                <label htmlFor="ClientProvince" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    State/Province/Region *
                                                </label>
                                                <input
                                                    id="ClientProvince"
                                                    name="ClientProvince"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientProvince || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientProvince && (
                                                    <p className="my-2 text-xs text-red-600">State/Province/Region is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                                            <div className="w-full lg:w-1/2">
                                                <label htmlFor="ClientCountry" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Country *
                                                </label>
                                                <input
                                                    id="ClientCountry"
                                                    name="ClientCountry"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientCountry || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientCountry && (
                                                    <p className="my-2 text-xs text-red-600">Country is required</p>
                                                )}
                                            </div>
                                            <div className="w-full lg:w-1/2 ltr:lg:ml-3 rtl:lg:mr-3 mt-2 md:mt-0">
                                                <label htmlFor="ClientPostcode" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                    Zip/Postal Code *
                                                </label>
                                                <input
                                                    id="ClientPostcode"
                                                    name="ClientPostcode"
                                                    type="text"
                                                    placeholder=""
                                                    value={formData?.DictOneToOneFields?.ClientPostcode || ''}
                                                    onChange={handleInputChange}
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                    autoComplete="off"
                                                    spellCheck="false"
                                                    aria-invalid="true"
                                                />
                                                {!formData?.isHideValidation && formData?.validationResultDto?.DictOneToOneFieldNameAndErrorMessage.ClientPostcode && (
                                                    <p className="my-2 text-xs text-red-600">Zip/Postal Code is required</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="block">
                                            <label htmlFor="OrderNotes" className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">
                                                Order Notes
                                            </label>
                                            <textarea
                                                id="OrderNotes"
                                                name="OrderNotes"
                                                value={formData?.DictOneToOneFields?.OrderNotes || ''}
                                                onChange={handleInputChange}
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition  ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 duration-200 bg-white border-gray-300 focus:outline-none focus:border-heading rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex mt-6">
                                        <button
                                            type="button"
                                            onClick={() => makePaymentByStripe()}
                                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400 hover:bg-gray-400"
                                            style={{ backgroundColor: '#54AC5B', maxWidth: '300px', borderRadius: '24px' }}>
                                            Place Order
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Order Summary */}
                            <PlaceOrderOrderSummary {...formData} />
                        </div>
                    </div>
                ) :
                    (formData?.RootPrimaryKeyValue && formData?.DictOneToOneFields?.OrderStatus != 5) ? (
                        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
                            <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">
                                <div className="border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8">
                                    <span className="w-10 h-10 ltr:mr-3 rtl:ml-3 ltr:xl:mr-4 rtl:xl:ml-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 text-green-600"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                                        </svg>
                                    </span>
                                    Thank you. Your order has been received.
                                </div>
                                <ul className="border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10">
                                    <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                                        <span className="uppercase text-[11px] block text-body font-normal leading-5">Order number:</span>
                                        {formData?.DictOneToOneFields?.OrderNumber}
                                    </li>
                                    <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                                        <span className="uppercase text-[11px] block text-body font-normal leading-5">Date:</span>
                                        {getDateTimeDisplay(formData?.DictOneToOneFields?.PlacedDate)}
                                    </li>
                                    <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                                        <span className="uppercase text-[11px] block text-body font-normal leading-5">Email:</span>
                                        {formData?.DictOneToOneFields?.ClientEmail}
                                    </li>
                                    <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                                        <span className="uppercase text-[11px] block text-body font-normal leading-5">Total:</span>
                                        {formData?.distributorCurrencyCode} ${parseFloat(formData?.DictOneToOneFields?.TotalAfterTax || 0).toFixed(2)}
                                    </li>
                                </ul>
                                <p className="text-heading text-sm md:text-base mb-8">
                                    Pay with cash upon delivery. Delivery Method: {getDDLFieldDisplayTextValue(formData.dictFieldEntityDataSource?.['30684'].items, formData?.DictOneToOneFields?.DeliveryMethod)}
                                </p>
                                <p className="text-heading text-sm md:text-base mb-8">
                                    Distributor: {getDDLFieldDisplayTextValue(formData.dictFieldEntityDataSource?.['30624'].items, formData?.DictOneToOneFields?.DistributorId)}
                                </p>
                                <div className="pt-10 lg:pt-12">
                                    <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">Order details:</h2>
                                    <table className="w-full text-sm font-semibold text-heading lg:text-base">
                                        <thead>
                                            <tr>
                                                <th className="w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">Product</th>
                                                <th className="w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {formData?.DictOneToManyFields['11456'].map((orderItemObj: any, index: any) => (
                                                <tr key={index} className="font-normal border-b border-gray-300 last:border-b-0">
                                                    <td className="p-4">
                                                        {/* {getDDLFieldDisplayTextValue(formData.dictFieldEntityDataSource?.['30604'].items, orderItemObj?.DictOneToOneFields?.ProductId)} */}
                                                        {orderItemObj?.DictOneToOneFields?.ProductId}
                                                        <span>×</span>
                                                        {(orderItemObj.DictOneToOneFields.ItemQty || 0)}
                                                    </td>
                                                    <td className="p-4">
                                                        {formData.distributorCurrencyCode} ${parseFloat(orderItemObj.DictOneToOneFields.ItemGrandTotal || 0).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="odd:bg-gray-150">
                                                <td className="p-4 italic">Subtotal:</td>
                                                <td className="p-4">{formData.distributorCurrencyCode} ${parseFloat(formData?.DictOneToOneFields?.ItemsSubTotal || 0).toFixed(2)}</td>
                                            </tr>
                                            <tr className="odd:bg-gray-150">
                                                <td className="p-4 italic">Shipping:</td>
                                                <td className="p-4">{formData.distributorCurrencyCode} ${parseFloat(formData?.DictOneToOneFields?.FinalShippingCost_30871 || 0).toFixed(2)}</td>
                                            </tr>
                                            <tr className="odd:bg-gray-150">
                                                <td className="p-4 italic">Tax:</td>
                                                <td className="p-4">{formData.distributorCurrencyCode} ${parseFloat(formData?.DictOneToOneFields?.TotalTax || 0).toFixed(2)}</td>
                                            </tr>
                                            <tr className="odd:bg-gray-150">
                                                <td className="p-4 italic">Total:</td>
                                                <td className="p-4">{formData.distributorCurrencyCode} ${parseFloat(formData?.DictOneToOneFields?.TotalAfterTax || 0).toFixed(2)}</td>
                                            </tr>
                                            <tr className="odd:bg-gray-150">
                                                <td className="p-4 italic">Note:</td>
                                                <td className="p-4">{formData?.DictOneToOneFields?.OrderNotes}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="px-5 sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16"></div>
                        </div>
                    ) : null
            }

            {showBusiloaderPopup && (
                <div className="Ctn-busyloaderContainer" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <div className="btn-busyloader opacity-30"></div>

                </div>
            )}
        </>
    );
}

export default PlaceOrderContainer