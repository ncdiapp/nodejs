'use client';

import { useAppContext } from '../contexts/AppContext';
import { useState, useEffect } from 'react';
import Image from "next/image";
import {
    GetFormData,
    ExcuteTransactionCommonad,
} from "../services/mgtService";
import { getRegularImageUrlById, getCurrentDistributorId } from '../lib/utils';


interface OrderItem {
    ProductImageId: string;
    ProductId: string;
    ItemQty: number;
    ItemGrandTotal: number;
}

interface OrderSummaryProps {
    distributorName: string;
    orderItems: OrderItem[];
    itemsSubTotal: number;
    shippingCost?: number;
    tax: number;
    totalAfterTax: number;
    clientCurrency?: string;
    totalAfterTaxOnClientCurrency?: number;
    distributorCurrencyCode: string;
}

const PlaceOrderOrderSummary = () => {

    const orderObj = useAppContext().eCommerceModel.orderObj;
    const [formData, setFormData] = useState<any>(orderObj?.orderFormData);
    formData.DictOneToOneFields["distributorName"]
    useEffect(() => {

        //console.log(JSON.stringify(orderObj));
    }, []);



    return (
        <div className="md:w-full lg:w-2/5 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-10 rtl:lg:mr-10 ltr:xl:ml-14 rtl:xl:mr-14 flex flex-col h-full -mt-1.5">
            <div className="pt-12 md:pt-0 ltr:2xl:pl-4 rtl:2xl:pr-4">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                    Your Order
                </h2>
                <div className="flex p-4 py-0 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                    <span className="py-4">Distributor: {formData.DictOneToOneFields["distributorName"] || ''}</span>
                </div>
                <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                    <span>Product</span>
                    <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">Subtotal</span>
                </div>
                {formData.DictOneToManyFields['11456'].map((orderItem: any, index: any) => (
                    <div key={index} className="flex py-4 items-center lg:px-3 border-b border-gray-300">
                        <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0 relative">
                            <Image
                                alt=""
                                src={getRegularImageUrlById(orderItem.DictOneToOneFields.ProductImageId)} // Replace with the correct URL
                                width={64}
                                height={64}
                                className="object-cover bg-gray-300"
                            />
                        </div>
                        <h6 className="text-sm ltr:pl-3 rtl:pr-3 font-regular text-heading">
                            {orderItem.DictOneToOneFields.ProductId} {/* Replace with product name */}
                            <span> × </span>
                            {orderItem.DictOneToOneFields.ItemQty}
                        </h6>
                        <div className="flex ltr:ml-auto rtl:mr-auto text-heading text-sm ltr:pl-2 rtl:pr-2 flex-shrink-0">
                            {formData.DictOneToOneFields["distributorCurrencyCode"] || ''} ${(orderItem.DictOneToOneFields['ItemGrandTotal'] ||
                                0).toFixed(2)}
                        </div>
                    </div>
                ))}
                <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                    Subtotal
                    <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">{formData.DictOneToOneFields["distributorCurrencyCode"] || ''} ${(formData.DictOneToOneFields['ItemsSubTotal'] || 0).toFixed(2)}</span>
                </div>
                {formData.DictOneToOneFields['FinalShippingCost_30871'] !== undefined && (
                    <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                        Shipping
                        <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">{formData.DictOneToOneFields["distributorCurrencyCode"] || ''} ${(formData.DictOneToOneFields['FinalShippingCost_30871'] || 0).toFixed(2)}</span>
                    </div>
                )}
                <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                    Tax
                    <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">{formData.DictOneToOneFields["distributorCurrencyCode"] || ''} ${(formData.DictOneToOneFields['TotalTax'] || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                    Total
                    <div className="ltr:ml-auto rtl:mr-auto flex-shrink-0">
                        <div className="text-right">{formData.DictOneToOneFields["distributorCurrencyCode"] || ''} ${(formData.DictOneToOneFields['TotalAfterTax'] || 0).toFixed(2)}</div>
                        {/* {totalAfterTaxOnClientCurrency && clientCurrency && (
                            <div className="text-right text-sm text-gray-400 pt-2">
                                Approximately {clientCurrency} ${totalAfterTaxOnClientCurrency.toFixed(2)}
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrderOrderSummary